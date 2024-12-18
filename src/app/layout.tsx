import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const font = Jost({
  subsets: ["latin"],
  weight: ["500", "400", "600"],
});


export const metadata: Metadata = {
  title: "nextJS",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        {children}
      </body>
    </html>
  );
}
