"use client;";

import localFont from "next/font/local";
import "./css/globals.scss";
import { pageview } from "./lib/gtag";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Outright",
  description: "",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      pageview(pathname);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-JF5377DG23`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JF5377DG23', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="overlay active" id="overlay-loading"></div> */}
        {children}
      </body>
    </html>
  );
}
