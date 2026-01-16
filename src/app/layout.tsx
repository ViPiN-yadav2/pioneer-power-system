import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pioneer Power System - Leading Energy Solutions",
  description: "Revolutionary energy solutions for a sustainable future. Pioneer Power System delivers cutting-edge technology and reliable power systems for homes, businesses, and industries.",
  keywords: "energy solutions, power systems, renewable energy, sustainable technology, Pioneer Power System",
  authors: [{ name: "Pioneer Power System" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Pioneer Power System - Leading Energy Solutions",
    description: "Revolutionary energy solutions for a sustainable future.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pioneer Power System - Leading Energy Solutions",
    description: "Revolutionary energy solutions for a sustainable future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
