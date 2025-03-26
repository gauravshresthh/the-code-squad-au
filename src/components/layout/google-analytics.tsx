/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const GA_TRACKING_ID = "G-DCC58CFFL8";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (window && GA_TRACKING_ID) {
      window.gtag("event", "page_view", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      {/* GA Initialization */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
