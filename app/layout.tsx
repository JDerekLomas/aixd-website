import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIXD - AI & Experience Design",
  description: "Expand your human potential with AI. A practical hub for experience designers learning to shape experiences with artificial intelligence.",
  keywords: ["AI", "experience design", "UX", "human potential", "design patterns", "AI tools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
