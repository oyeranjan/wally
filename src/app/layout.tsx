import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {ThemeController} from "../components/ThemeController"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wally",
  description: "Unleash the Art of Your Screen: Dive into a World of Stunning Wallpapers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <ThemeController />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
