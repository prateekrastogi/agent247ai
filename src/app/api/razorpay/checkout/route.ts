import { NextResponse } from "next/server";

import { getCheckoutConfig, isPricingPlanKey } from "@/lib/razorpay";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { plan?: string };

    if (!isPricingPlanKey(body.plan)) {
      return NextResponse.json({ error: "Invalid pricing plan." }, { status: 400 });
    }

    const checkoutConfig = getCheckoutConfig(body.plan);

    return NextResponse.json(checkoutConfig);
  } catch (error) {
    console.error("Failed to build Razorpay checkout config:", error);

    return NextResponse.json(
      { error: "Unable to start checkout right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
