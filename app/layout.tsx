import type { Metadata } from "next";
import "./globals.css";
import { instrumentSans } from "./fonts";
import { HeaderShell, FooterShell } from "./Shell";

export const metadata: Metadata = {
  title: "Growth Architect",
  description: "Data-driven strategies and innovative marketing solutions.",
  icons: {
    icon: "/gx-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.className} bg-white flex flex-col min-h-screen`}
      >
        <HeaderShell />
        <main className="flex-grow">{children}</main>
        <FooterShell />
      </body>
    </html>
  );
}
