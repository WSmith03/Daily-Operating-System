import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ServiceWorkerRegister } from "@/components/shared/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Workout Library",
    template: "%s — Workout Library",
  },
  description:
    "A comprehensive, mobile-first workout and exercise library — pick a muscle, generate a workout, and train with a built-in player.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Workout Library",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0b0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ServiceWorkerRegister />
        <div className="flex-1 pb-24 safe-top">{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}
