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
              var processed = new WeakSet();

              function hideBrandingText(host) {
                if (!host || !host.shadowRoot || processed.has(host)) return;
                var root = host.shadowRoot;
                var apply = function () {
                  var paragraphs = root.querySelectorAll("p");
                  paragraphs.forEach(function (p) {
                    var text = (p.textContent || "").toLowerCase();
                    if (text.includes("powered by elevenlabs")) {
                      p.style.color = "transparent";
                      p.style.userSelect = "none";
                      p.querySelectorAll("span, a").forEach(function (node) {
                        node.style.display = "none";
                      });
                    }
                  });
                };
                apply();
                var observer = new MutationObserver(apply);
                observer.observe(root, { childList: true, subtree: true });
                processed.add(host);
              }

              function initHost(host) {
                var attempts = 0;
                var timer = setInterval(function () {
                  attempts += 1;
                  if (host.shadowRoot) {
                    clearInterval(timer);
                    hideBrandingText(host);
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
