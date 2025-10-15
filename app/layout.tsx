import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UniHelp",
  description: "Helping hand is a community-driven digital platform where individuals can report hazards, social problems, or societal issues anonymously or with their identity. Users can collaborate to provide information, support, or resources to solve the problems—either physically or virtually. A reward system with points, titles, and recognition motivates individuals and groups to contribute actively. Reported issues can be voted upon by the community, with severe or high-priority problems escalated to concerned authorities.",

  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/Logo-dark.png",
        href: "/logo-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/Logo.png",
        href: "/logo.png",
      }
    ]
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
