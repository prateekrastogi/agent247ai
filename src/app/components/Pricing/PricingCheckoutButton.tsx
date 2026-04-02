"use client";

import { useState } from "react";

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
  backdropColor: string;
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Something went wrong while starting checkout. Please try again.";
}

export default function PricingCheckoutButton({
  buttonLabel,
  buttonClassName,
  plan,
}: PricingCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<StatusState>(null);

  async function handleCheckout() {
    setIsLoading(true);
    setStatus(null);

    try {
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

      const razorpay = new window.Razorpay({
        key: configPayload.key,
        subscription_id: configPayload.subscriptionId,
        name: "Agent247AI",
        description: `${configPayload.description} • ${configPayload.amountLabel}`,
        image: "https://agent247ai.com/logo_black.png",
        notes: {
          selected_plan: configPayload.planTitle,
        },
        theme: {
          color: configPayload.themeColor,
          backdrop_color: configPayload.backdropColor,
        },
        modal: {
          ondismiss: () => {
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
            setIsLoading(false);
          }
        },
      });

      razorpay.on("payment.failed", (response) => {
        const description = response.error?.description || response.error?.reason;

        setStatus({
          tone: "error",
          message: description || "Payment failed before authorization was completed.",
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
