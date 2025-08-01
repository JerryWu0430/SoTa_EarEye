import type { Viewport } from "next";
import { Geist } from "next/font/google";
import { Providers } from "@/context/providers";
import { Header } from "@/components/header";
import { MeshGradientComponent } from "@/components/mesh-gradient";
import "./globals.css";
import { ClientLayout } from "./client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: true,
});

export const dynamic = "force-static";

export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

// Update metadata for the audio navigation assistant
export const metadata = {
  title: "EarEye - Audio Navigation Assistant",
  description: "Personalize your wearable device audio feedback with EarEye's intelligent object detection system.",
  openGraph: {
    type: "website",
    title: "EarEye - Audio Navigation Assistant",
    description: "Personalize your wearable device audio feedback with EarEye's intelligent object detection system.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EarEye - Audio Navigation Assistant", 
    description: "Personalize your wearable device audio feedback with EarEye's intelligent object detection system.",
  },
};

// Static settings for the app
const staticSettings = {
  defaultTheme: "system" as const,
  forcedTheme: null,
  background: {
    color1: { hex: "#e6f3ff" },
    color2: { hex: "#cce7ff" },
    color3: { hex: "#a6d5ff" },
    color4: { hex: "#80c4ff" },
    speed: 1.5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased max-w-screen min-h-svh bg-slate-1 text-slate-12 opacity-0 duration-75 transition-opacity`}
      >
        <Providers
          defaultTheme={staticSettings.defaultTheme}
          forcedTheme={staticSettings.forcedTheme}
        >
          <MeshGradientComponent
            colors={[
              staticSettings.background.color1.hex,
              staticSettings.background.color2.hex,
              staticSettings.background.color3.hex,
              staticSettings.background.color4.hex,
            ]}
            speed={staticSettings.background.speed}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 0,
              width: "100%",
              height: "100%",
            }}
          />
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
