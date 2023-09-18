import { NavBar } from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Store",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
