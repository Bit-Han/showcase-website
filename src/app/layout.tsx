import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Showcase Website",
  description: "Website that shows cases different amazing UIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
