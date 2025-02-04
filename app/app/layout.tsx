import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dounya Bourhani Portfolio",
  description: "My portfolio where I showcase my projects and skills"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="pastel">
      <body className={patrickHand.className}>
        {children}

        <footer className="text-center text-sm text-gray-500 pb-6">© 2025 Dounya Bourhani. All Rights Reserved.</footer>
      </body>
    </html>
  );
}
