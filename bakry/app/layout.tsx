import type { Metadata } from "next";
import { Tajawal } from "next/font/google"; // Import Tajawal font
import "./globals.css";
import { ThemeProvider } from "./provider";

const tajawal = Tajawal({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "700", "800", "900"] // Specify available font weights
});

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
        <link rel="icon" href="/bakry.png" sizes="any" />
      </head>
      <body className={tajawal.className}> {/* Apply Tajawal font class */}
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
