import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400", "700","900"] });
export const metadata: Metadata = {
  title: "Mudassar Majeed | Portfolio",
  description: "Hey, Mudassar Majeed here, I have been learning Full stack Web development for one year now, and I mostly focus on frontend development, Looking forward to work with you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}

      </body>
    </html>
  );
}
