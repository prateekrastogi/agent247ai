import { NextResponse } from "next/server";

import { getPlanConfig, isPricingPlanKey } from "@/lib/razorpay";

const RAZORPAY_SUBSCRIPTIONS_URL = "https://api.razorpay.com/v1/subscriptions";
const DEFAULT_TOTAL_COUNT = 1200;

type RazorpayCreateSubscriptionResponse = {
  id: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { plan?: string };

    if (!isPricingPlanKey(body.plan)) {
      return NextResponse.json({ error: "Invalid pricing plan." }, { status: 400 });
    }

    const planConfig = getPlanConfig(body.plan);
    const auth = Buffer.from(
      `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`,
      "utf8",
    ).toString("base64");

    const razorpayResponse = await fetch(RAZORPAY_SUBSCRIPTIONS_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plan_id: planConfig.planId,
        total_count: DEFAULT_TOTAL_COUNT,
        quantity: 1,
        customer_notify: true,
        notes: {
          selected_plan: planConfig.planTitle,
          source: "agent247ai_pricing_page",
        },
      }),
    });

    const razorpayPayload =
      (await razorpayResponse.json()) as
        | RazorpayCreateSubscriptionResponse
        | { error?: { description?: string } };

    if (!razorpayResponse.ok || !("id" in razorpayPayload)) {
      return NextResponse.json(
        {
          error:
            razorpayPayload.error?.description ||
            "Unable to create a Razorpay subscription right now.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      key: planConfig.key,
      subscriptionId: razorpayPayload.id,
      planTitle: planConfig.planTitle,
      description: planConfig.description,
      amountLabel: planConfig.amountLabel,
      themeColor: planConfig.themeColor,
    });
  } catch (error) {
    console.error("Failed to build Razorpay checkout config:", error);

    return NextResponse.json(
      { error: "Unable to start checkout right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
