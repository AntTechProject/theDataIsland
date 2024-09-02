import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import ScrollToTopButton from "@/components/layout/sections/scroll-to-top";
import { siteConfig } from "@/config/site";
import { NavbarTop } from "@/components/layout/NavBar";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "The Data Island - Best Data Annotation Service Provider",
//   description: "Best Data Annotation Service Provider",
// };

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon.ico",
    // apple: "/favicon.ico",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <NavbarTop /> */}
            {children}
            <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
