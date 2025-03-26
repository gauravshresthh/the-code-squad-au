/* eslint-disable @next/next/inline-script-id */
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
// import Script from 'next/script';
import Head from 'next/head';
import GoogleAnalytics from '@/components/layout/google-analytics';

export const metadata: Metadata = {
  title: 'TheCodeSquad - Professional Digital Solutions & App Development',
  description:
    'Cutting-edge digital solutions for web and mobile app development, leveraging cloud services like AWS, Google Cloud, and Microsoft Azure. Contact us for innovative software solutions!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://www.thecodesquad.com/" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        {/* <meta name="google-site-verification" content="bymMVmn9D2dBJTSy6KjJFlpTdXMUcaMoQemrKpPJD_s" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="The Code Squad, TheCodeSquad, software development, custom software solutions, web development, mobile app development, digital transformation, technology consulting, it solutions, cloud computing, saas development, ai & machine learning, Cloud Solutions, AWS, Google Cloud, Microsoft Azure"
        />
        <meta
          property="og:title"
          content="TheCodeSquad - Professional Digital Solutions & App Development"
        />
        <meta
          property="og:description"
          content="Cutting-edge digital solutions for web and mobile app development."
        />
        <meta property="og:image" content="/images/website-preview.jpeg" />{' '}
        {/* Update with your website preview image */}
        <meta property="og:url" content="https://www.thecodesquad.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TheCodeSquad - Professional Digital Solutions"
        />
        <meta
          name="twitter:description"
          content="Offering innovative software solutions for your business."
        />
        <meta name="twitter:image" content="/images/website-preview.jpeg" />{' '}
        {/* Update with your image */}
        {/* Structured Data (JSON-LD) */}
        <GoogleAnalytics/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TheCodeSquad',
              url: 'https://www.thecodesquad.com/',
              logo: 'https://www.thecodesquad.com/logos/logo.png',
              sameAs: [
                'https://www.linkedin.com/company/thecodesquad',
                'https://twitter.com/thecodesquad',
              ],
              description:
                'TheCodeSquad provides top-tier digital solutions including web and mobile app development, cloud services, and custom software development.',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+977-9816947062',
                  contactType: 'Customer Service',
                  areaServed: 'Worldwide',
                  availableLanguage: 'English',
                },
              ],
            }),
          }}
        />
      </Head>
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DCC58CFFL8"
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DCC58CFFL8');
              `,
        }}
      /> */}
      <body className={`antialiased`}>
        
        <div className="absolute top-10 z-50 w-full flex justify-center">
          <Navbar />
        </div>
        <div className="min-h-screen">{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
