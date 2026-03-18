import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google"; // Import fonts
import Script from "next/script";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer";

// Configure Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600"], // Medium and Semi-bold
  variable: "--font-plus-jakarta-sans", // CSS variable
});

// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"], // Regular and Medium
  variable: "--font-inter", // CSS variable
});

export const metadata: Metadata = {
  title: "HVAC AI Agent – 24/7 Call & Text",
  description: "Always On. Always Booking.",
  icons: {
    icon: [
      { url: "/logo_black.png", media: "(prefers-color-scheme: light)" },
      { url: "/logo_white.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <elevenlabs-convai agent-id="agent_3001kjysjf56fv5a38pg6pwstne9" />
        <Script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          strategy="afterInteractive"
          async
          type="text/javascript"
        />
        <Script id="elevenlabs-hide-branding-text" strategy="afterInteractive">
          {`
            (function () {
              function injectBrandingStyle(host) {
                if (!host || !host.shadowRoot) return false;
                var root = host.shadowRoot;
                if (root.getElementById("agent247ai-hide-branding")) return true;

                var style = document.createElement("style");
                style.id = "agent247ai-hide-branding";
                style.textContent = [
                  "p.whitespace-nowrap {",
                  "  color: transparent !important;",
                  "  font-size: 0 !important;",
                  "}",
                  "p.whitespace-nowrap span,",
                  "p.whitespace-nowrap a {",
                  "  display: none !important;",
                  "}",
                ].join("\\n");

                root.appendChild(style);
                return true;
              }

              function initHost(host) {
                var attempts = 0;
                var timer = setInterval(function () {
                  attempts += 1;
                  if (injectBrandingStyle(host)) {
                    clearInterval(timer);
                  } else if (attempts > 100) {
                    clearInterval(timer);
                  }
                }, 100);
              }

              function init() {
                document.querySelectorAll("elevenlabs-convai").forEach(initHost);

                var bodyObserver = new MutationObserver(function () {
                  document.querySelectorAll("elevenlabs-convai").forEach(initHost);
                });
                bodyObserver.observe(document.body, { childList: true, subtree: true });
              }

              customElements.whenDefined("elevenlabs-convai").then(init);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
