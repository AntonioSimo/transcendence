import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const terminal_char = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start-2p',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Transcendence",
  description: "A different Pong game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${terminal_char.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
