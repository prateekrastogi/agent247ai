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
  description: "Smarter Marketing. AI Engineered.",
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
      </body>
    </html>
  );
}
