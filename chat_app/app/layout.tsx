import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat App",
  description: "An App to chat with your friends and family",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-100 flex items-center justify-center h-screen">
        {children}
      </body>
    </html>
  );
}
