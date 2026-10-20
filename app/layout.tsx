import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peter Afolabi · Full-Stack Software Engineer",
  description:
    "Full-stack software engineer in Lagos building web and mobile products for fintech, agritech, HR, logistics and education teams with React, Next.js, Node.js and Laravel.",
  openGraph: {
    title: "Peter Afolabi · Full-Stack Software Engineer",
    description:
      "Web and mobile products for fintech, agritech, HR, logistics and education teams in Nigeria and the UK.",
    images: ["/peter.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
