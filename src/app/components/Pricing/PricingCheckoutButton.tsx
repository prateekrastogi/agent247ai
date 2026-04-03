"use client";

import { useRef, useState } from "react";

import type { PricingPlanKey } from "@/lib/razorpay";
import styles from "./pricing.module.css";

type PricingCheckoutButtonProps = {
  buttonLabel: string;
  buttonClassName: string;
  plan: PricingPlanKey;
};

type StatusState =
  | {
      tone: "error";
      message: string;
    }
  | null;

type CheckoutConfig = {
  key: string;
  subscriptionId: string;
  planTitle: string;
  description: string;
  amountLabel: string;
  themeColor: string;
};

type CheckoutFailureResponse = {
  error?: {
    code?: string;
    description?: string;
    reason?: string;
    source?: string;
    step?: string;
  };
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Something went wrong while starting checkout. Please try again.";
}

function getPaymentFailureMessage(response: CheckoutFailureResponse) {
  const description = response.error?.description?.trim();
  const reason = response.error?.reason?.trim();
  const message = description || reason || "";
  const normalized = message.toLowerCase();

  if (
    normalized.includes("already subscribed") ||
    normalized.includes("already subscribed to this plan") ||
    normalized.includes("customer already subscribed")
  ) {
    return "This customer is already subscribed to this plan.";
  }

  return message || "Payment failed before authorization was completed.";
}

function getSuppressedAlertMessage(message?: string) {
  const text = String(message ?? "").trim();
  const normalized = text.toLowerCase();

  if (
    normalized.includes("already subscribed") ||
    normalized.includes("already subscribed to this plan") ||
    normalized.includes("customer already subscribed")
  ) {
    return "This customer is already subscribed to this plan.";
  }

  if (
    normalized.includes("payment failed") ||
    normalized.includes("oops! something went wrong")
  ) {
    return "This customer may already be subscribed to this plan.";
  }

  return text || "This customer may already be subscribed to this plan.";
}

async function scrollToPricingSection() {
  const pricingSection = document.getElementById("pricing");

  if (!pricingSection) {
    return;
  }

  const rootStyles = window.getComputedStyle(document.documentElement);
  const headerHeight = Number.parseInt(rootStyles.getPropertyValue("--header-height"), 10) || 0;
  const targetTop = pricingSection.getBoundingClientRect().top + window.scrollY;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollingElement = document.scrollingElement || document.documentElement;

  if (window.location.hash !== "#pricing") {
    window.history.replaceState(null, "", "#pricing");
  }

  const currentSectionTop = pricingSection.getBoundingClientRect().top;
  const alreadyAligned =
    currentSectionTop >= headerHeight - 16 && currentSectionTop <= headerHeight + 24;

  if (alreadyAligned) {
    return;
  }

  const nextTop = Math.max(0, targetTop);

  if (reducedMotion) {
    scrollingElement.scrollTop = nextTop;
  } else {
    window.scrollTo({
      top: nextTop,
      behavior: "smooth",
    });
  }

  await new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => {
      scrollingElement.scrollTop = nextTop;
      resolve();
    });
  });

  await new Promise((resolve) => {
    window.setTimeout(resolve, reducedMotion ? 0 : 350);
  });
}

export default function PricingCheckoutButton({
  buttonLabel,
  buttonClassName,
  plan,
}: PricingCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<StatusState>(null);
  const paymentFailureFallbackTimerRef = useRef<number | null>(null);

  async function handleCheckout() {
    setIsLoading(true);
    setStatus(null);

    try {
      await scrollToPricingSection();

      if (!window.Razorpay) {
        throw new Error("Razorpay checkout is still loading. Please retry in a moment.");
      }

      const configResponse = await fetch("/api/razorpay/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      });

      const configPayload = (await configResponse.json()) as CheckoutConfig & { error?: string };

      if (!configResponse.ok) {
        throw new Error(
          configPayload.error || "Unable to prepare checkout at the moment. Please try again.",
        );
      }

      const originalAlert = window.alert;
      const restoreAlert = () => {
        if (paymentFailureFallbackTimerRef.current !== null) {
          window.clearTimeout(paymentFailureFallbackTimerRef.current);
          paymentFailureFallbackTimerRef.current = null;
        }

        if (window.alert !== originalAlert) {
          window.alert = originalAlert;
        }
      };

      window.alert = (message?: string) => {
        if (paymentFailureFallbackTimerRef.current !== null) {
          window.clearTimeout(paymentFailureFallbackTimerRef.current);
        }

        console.error("Suppressed checkout alert:", message ?? "");

        paymentFailureFallbackTimerRef.current = window.setTimeout(() => {
          setStatus({
            tone: "error",
            message: getSuppressedAlertMessage(message),
          });
          setIsLoading(false);
          paymentFailureFallbackTimerRef.current = null;
        }, 100);
      };

      const razorpay = new window.Razorpay({
        key: configPayload.key,
        subscription_id: configPayload.subscriptionId,
        name: "Agent24/7AI",
        description: `${configPayload.description} • ${configPayload.amountLabel}`,
        image: "https://agent247ai.com/razorpay-logo-black.png",
        notes: {
          selected_plan: configPayload.planTitle,
        },
        theme: {
          color: configPayload.themeColor,
        },
        modal: {
          ondismiss: () => {
            restoreAlert();
            setIsLoading(false);
          },
        },
        handler: async (response) => {
          try {
            const verificationResponse = await fetch("/api/razorpay/verify-subscription", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            });

            const verificationPayload = (await verificationResponse.json()) as {
              verified?: boolean;
              error?: string;
            };

            if (!verificationResponse.ok || !verificationPayload.verified) {
              throw new Error(
                verificationPayload.error ||
                  "Checkout completed, but payment verification did not pass.",
              );
            }

            setStatus(null);
          } catch (error) {
            setStatus({
              tone: "error",
              message: getErrorMessage(error),
            });
          } finally {
            restoreAlert();
            setIsLoading(false);
          }
        },
      });

      razorpay.on("payment.failed", (response) => {
        console.error("Razorpay payment.failed payload:", response);
        restoreAlert();

        setStatus({
          tone: "error",
          message: getPaymentFailureMessage(response),
        });
        setIsLoading(false);
      });

      razorpay.open();
    } catch (error) {
      setStatus({
        tone: "error",
        message: getErrorMessage(error),
      });
      setIsLoading(false);
    }
  }

  const statusClassName =
    status?.tone === "error" ? styles.statusError : "";

  return (
    <div className={styles.checkoutButtonWrapper}>
      <button
        type="button"
        className={buttonClassName}
        onClick={handleCheckout}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : buttonLabel}
      </button>
      {status ? (
        <p
          className={`${styles.pricingStatusMessage} ${statusClassName}`}
          aria-live="polite"
        >
          {status.message}
        </p>
      ) : null}
    </div>
  );
}
