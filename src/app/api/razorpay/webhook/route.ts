import { NextResponse } from "next/server";

import { verifyWebhookSignature } from "@/lib/razorpay";

export async function POST(request: Request) {
  const signature = request.headers.get("x-razorpay-signature");
  const payload = await request.text();

  if (!signature) {
    return NextResponse.json({ error: "Missing Razorpay webhook signature." }, { status: 400 });
  }

  try {
    const isValid = verifyWebhookSignature(payload, signature);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid Razorpay webhook signature." }, { status: 400 });
    }

    const event = JSON.parse(payload) as { event?: string; payload?: unknown };

    console.info("Razorpay webhook received:", {
      event: event.event,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Failed to process Razorpay webhook:", error);

    return NextResponse.json({ error: "Webhook processing failed." }, { status: 500 });
  }
}
