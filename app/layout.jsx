import localFont from "next/font/local";
import "./css/globals.scss";
import Analytics from "./components/Analytics";
import Script from "next/script";

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
  metadataBase: new URL("https://weareoutright.com"),
  openGraph: {
    type: "website",
    url: "https://weareoutright.com",
    title: "Outright | Home",
    description:
      "We are Outright. A creative agency making elevated creative for modern brands.",
    images: ["https://weareoutright.com/media/logo-outright-social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outright | Home",
    description:
      "We are Outright. A creative agency making elevated creative for modern brands.",
    images: ["https://weareoutright.com/media/logo-outright-social.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  applicationName: "Outright",
  appleWebApp: {
    title: "Outright",
  },
};

export default function RootLayout({ children }) {
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=600144734158587&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Custom Script */}
        {/* <Script src="/o.js" strategy="lazyOnload" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="overlay active" id="overlay-loading"></div> */}
        <Analytics />
        {children}
      </body>
    </html>
  );
}
