import { createHmac, timingSafeEqual } from "node:crypto";

export type PricingPlanKey = "go" | "grow" | "pro";

type RazorpayPlanConfig = {
  title: string;
  description: string;
  amountLabel: string;
  planEnvKey: string;
  themeColor: string;
};

const planConfigs: Record<PricingPlanKey, RazorpayPlanConfig> = {
  go: {
    title: "Go",
    description: "Agent247AI Go subscription",
    amountLabel: "$300/mo",
    planEnvKey: "RAZORPAY_PLAN_ID_GO",
    themeColor: "#f05a3f",
  },
  grow: {
    title: "Grow",
    description: "Agent247AI Grow subscription",
    amountLabel: "$500/mo",
    planEnvKey: "RAZORPAY_PLAN_ID_GROW",
    themeColor: "#1496d1",
  },
  pro: {
    title: "Pro",
    description: "Agent247AI Pro subscription",
    amountLabel: "$1000/mo",
    planEnvKey: "RAZORPAY_PLAN_ID_PRO",
    themeColor: "#f3a61f",
  },
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required Razorpay environment variable: ${name}`);
  }

  return value;
}

export function isPricingPlanKey(value: unknown): value is PricingPlanKey {
  return typeof value === "string" && value in planConfigs;
}

export function getPlanConfig(plan: PricingPlanKey) {
  const config = planConfigs[plan];

  return {
    key: getRequiredEnv("RAZORPAY_KEY_ID"),
    planId: getRequiredEnv(config.planEnvKey),
    planTitle: config.title,
    description: config.description,
    amountLabel: config.amountLabel,
    themeColor: config.themeColor,
  };
}

function safeCompare(left: string, right: string) {
  const leftBuffer = Buffer.from(left, "utf8");
  const rightBuffer = Buffer.from(right, "utf8");

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function verifySubscriptionSignature(params: {
  paymentId: string;
  subscriptionId: string;
  signature: string;
}) {
  const digest = createHmac("sha256", getRequiredEnv("RAZORPAY_KEY_SECRET"))
    .update(`${params.paymentId}|${params.subscriptionId}`)
    .digest("hex");

  return safeCompare(digest, params.signature);
}

export function verifyWebhookSignature(payload: string, signature: string) {
  const webhookSecret = getRequiredEnv("RAZORPAY_WEBHOOK_SECRET");
  const digest = createHmac("sha256", webhookSecret).update(payload).digest("hex");

  return safeCompare(digest, signature);
}
