import type { Metadata } from "next";
import { Cairo } from "next/font/google"; // Import Cairo font
import "./globals.css";
import { ThemeProvider } from "./provider";

const cairo = Cairo({ subsets: ["latin"] }); // Initialize Cairo font with the desired subset

export const metadata: Metadata = {
  title: "Bakry Portfolio",
  description: "Modern & Minimalist Bakry Abdelsalam Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={cairo.className}> {/* Apply Cairo font class */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
