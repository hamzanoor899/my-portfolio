// src/app/layout.tsx
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BackgroundFX from "@/components/BackgroundFX";

export const metadata = {
  title: "Hamza Noor | Frontend Developer",
  description: "React & Next.js Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <BackgroundFX />
      </body>
    </html>
  );
}
