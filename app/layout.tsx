// src/app/layout.tsx
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

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
      <body className="bg-black text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
