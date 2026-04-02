import { NextResponse } from "next/server";

import { getKnownSubscriptionIds, verifySubscriptionSignature } from "@/lib/razorpay";

type VerifyPayload = {
  razorpay_payment_id?: string;
  razorpay_subscription_id?: string;
  razorpay_signature?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as VerifyPayload;
    const paymentId = body.razorpay_payment_id;
    const subscriptionId = body.razorpay_subscription_id;
    const signature = body.razorpay_signature;

    if (!paymentId || !subscriptionId || !signature) {
      return NextResponse.json(
        { verified: false, error: "Missing Razorpay verification fields." },
        { status: 400 },
      );
    }

    if (!getKnownSubscriptionIds().has(subscriptionId)) {
      return NextResponse.json(
        { verified: false, error: "Unknown Razorpay subscription." },
        { status: 400 },
      );
    }

    const verified = verifySubscriptionSignature({
      paymentId,
      subscriptionId,
      signature,
    });

    if (!verified) {
      return NextResponse.json(
        { verified: false, error: "Razorpay signature verification failed." },
        { status: 400 },
      );
    }

    return NextResponse.json({ verified: true });
  } catch (error) {
    console.error("Failed to verify Razorpay subscription:", error);

    return NextResponse.json(
      { verified: false, error: "Unable to verify payment right now." },
      { status: 500 },
    );
  }
}
