import { createHmac, timingSafeEqual } from "node:crypto";

export type PricingPlanKey = "go" | "grow" | "pro";

type RazorpayPlanConfig = {
  title: string;
  description: string;
  amountLabel: string;
  subscriptionEnvKey: string;
  themeColor: string;
  backdropColor: string;
};

const planConfigs: Record<PricingPlanKey, RazorpayPlanConfig> = {
  go: {
    title: "Go",
    description: "Agent247AI Go subscription",
    amountLabel: "$300/mo",
    subscriptionEnvKey: "RAZORPAY_SUBSCRIPTION_ID_GO",
    themeColor: "#f05a3f",
    backdropColor: "rgba(66, 21, 8, 0.72)",
  },
  grow: {
    title: "Grow",
    description: "Agent247AI Grow subscription",
    amountLabel: "$500/mo",
    subscriptionEnvKey: "RAZORPAY_SUBSCRIPTION_ID_GROW",
    themeColor: "#1496d1",
    backdropColor: "rgba(5, 32, 59, 0.78)",
  },
  pro: {
    title: "Pro",
    description: "Agent247AI Pro subscription",
    amountLabel: "$1000/mo",
    subscriptionEnvKey: "RAZORPAY_SUBSCRIPTION_ID_PRO",
    themeColor: "#f3a61f",
    backdropColor: "rgba(68, 39, 2, 0.76)",
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

export function getCheckoutConfig(plan: PricingPlanKey) {
  const config = planConfigs[plan];

  return {
    key: getRequiredEnv("RAZORPAY_KEY_ID"),
    subscriptionId: getRequiredEnv(config.subscriptionEnvKey),
    planTitle: config.title,
    description: config.description,
    amountLabel: config.amountLabel,
    themeColor: config.themeColor,
    backdropColor: config.backdropColor,
  };
}

export function getKnownSubscriptionIds(): Set<string> {
  return new Set(
    (Object.values(planConfigs) as RazorpayPlanConfig[])
      .map((config) => process.env[config.subscriptionEnvKey])
      .filter((value): value is string => Boolean(value)),
  );
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
