import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idealnovate Africa | Learn the Skill. Land the Job.",
  description: "Our top-rated online tech programs take you from zero experience to landing your dream tech job. Design School, Data & AI School, Marketing School, and Management School.",
  keywords: ["tech education", "online learning", "design school", "data science", "AI", "Africa", "upskilling", "tech jobs"],
  openGraph: {
    title: "Idealnovate Africa | Learn the Skill. Land the Job.",
    description: "Our top-rated online tech programs take you from zero experience to landing your dream tech job.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
