import ClientSection from "@/components/home-page/client-section";
import HeroSection from "../components/home-page/hero-section";
import AboutSection from "@/components/home-page/about-section";
import CtaSection from "@/components/shared/cta-section";
import ServiceSection from "@/components/home-page/our-service-section";
import OurProcessSection from "@/components/home-page/our-process-section";
import SolutionsSection from "@/components/home-page/solutions-section";
import Testimonials from "@/components/home-page/testimonials";
import TechStackSection from "@/components/home-page/tech-stack-section";

export async function generateMetadata() {
  return {
    title: "TheCodeSquad | Professional Digital Solutions & App Development",
    applicationName: "TheCodeSquad",
    description: "Professional Digital Solutions & App Development",
    authors: [
      {
        name: "TheCodeSquad Team",
        url: "https://www.thecodesquad.com/",
      },
    ],
    keywords: [
      "The Code Squad",
      "TheCodeSquad",
      "software development",
      "custom software solutions",
      "web development",
      "mobile app development",
      "digital transformation",
      "technology consulting",
      "it solutions",
      "cloud computing",
      "saas development",
      "ai & machine learning",
    ],
    creator: "TheCodeSquad Team",
    publisher: "TheCodeSquad",
    robots: { index: true, follow: true },
    icons: "/icons/logo.png",
    images: [
      {
        url: "images/website-preview.jpeg",
        width: 1200,
        height: 630,
        alt: "TheCodeSquad Website Preview",
      },
    ],
    metadataBase: new URL("https://www.thecodesquad.com/"),
    // manifest:,
    openGraph: {
      title: "TheCodeSquad | Professional Digital Solutions & App Development",
      description: "Professional Digital Solutions & App Development",
      icons: "/icons/logo.png",
      images: [
        {
          url: "images/website-preview.jpeg",
          width: 1200,
          height: 630,
          alt: "TheCodeSquad Website Preview",
        },
        {
          url: "images/website-preview-about-us.jpeg",
          width: 1200,
          height: 630,
          alt: "TheCodeSquad Website Preview",
        },
      ],
      url: "https://www.thecodesquad.com/",
      type: "website",
      "og:image:alt": "TheCodeSquad Website Preview",
    },
    twitter: {
      site: "@thecodesquad",
      title: "TheCodeSquad | Professional Digital Solutions & App Development",
      description: "Professional Digital Solutions & App Development",
      icons: "/icons/logo.png",
      images: [
        "images/website-preview.jpeg",
        "images/website-preview-about-us.jpeg",
      ],
    },
  };
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientSection />
      <AboutSection />
      <ServiceSection />
      <CtaSection />
      <OurProcessSection />
      <TechStackSection />
      <SolutionsSection />
      <Testimonials />
    </div>
  );
}
