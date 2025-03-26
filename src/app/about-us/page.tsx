import React from "react";
import TeamCard from "@/components/about-us/team-card";
import Image from "next/image";
import Pills from "@/components/shared/pills";

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

const AboutUs = () => {
  return (
    <div className="p-6">
      <div
        className="bg-[url('/images/grid.svg'),url('/images/gradient1.avif'),url('/images/gradient2.avif'),url('/images/gradient3.avif'),url('/images/gradient4.avif'),url('/images/gradient5.avif')] bg-[#f5f6f9] bg-cover bg-center flex flex-col items-start border border-[#d8d8db] rounded-3xl px-4 pt-30 md:pt-36 xl:pt-52 pb-5 md:pb-0 min-h-[calc(100vh-3rem)]"
      >
        <div className="mt-10 md:px-16 mx-auto text-center flex items-center flex-col">

          <h1 className="mt-2 text-[1.6rem] md:text-4xl lg:text-5xl text-primary mb-4">
            Introducing <br className="md:hidden" />
            <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 md:px-8 py-1 rounded-2xl border border-secondary leading-12 md:leading-auto">
              The Code Squad
            </span>
          </h1>
          <p className="px-5 text-base md:text-lg mb-6 mt-12 md:w-1/2 mx-auto text-gray-500">
            We are a team of passionate developers, designers, and AI
            enthusiasts who are dedicated to transforming your ideas into
            powerful software solutions that enhance efficiency, engage
            customers, and fuel long-term success.
          </p>
          <p className="px-2 text-sm mb-12 mt-2 md:w-1/2 mx-auto text-gray-500">
            At The Code Squad, we integrate AI into every solution, creating
            smart systems that learn, adapt, and automate. From predictive
            analytics to personalized experiences, we empower businesses with
            intelligent, evolving technology for lasting growth.
          </p>
        </div>
      </div>
      <div className="max-w-[120rem] mx-auto sm:px-6 lg:px-8 mt-20">
        <div className="flex justify-center">
          <Pills>Mission & Vision</Pills>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4 px-6 md-px-16 text-center">
          What <span className="text-tertiary">Guides</span> Us
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-10">
          <div className="px-5 py-5 md:py-10 bg-[#F5F6F9] border border-[#d8d8db] rounded-2xl">
            <div>
              <Image
                src="/icons/mission.png"
                alt="about img"
                width={60}
                height={60}
              />
            </div>
            <div>
              <div className="mt-2 text-lg md:text-xl lg:text-2xl text-secondary font-semibold">
                Our Mission
              </div>
              <div className="mt-2 md:mt-4 text-[#909090] text-sm md:text-base">
                At TheCodeSquad, our mission is to empower businesses with
                cutting-edge digital solutions that drive growth, efficiency,
                and impact. We strive to build scalable, high-performance web
                experiences that not only meet but exceed industry standards.
                Through innovation, collaboration, and a passion for technology,
                we help brands turn ideas into reality.
              </div>
            </div>
          </div>
          <div className="px-5 py-5 md:py-10 bg-[#F5F6F9] border border-[#d8d8db] rounded-2xl">
            <div>
              <Image
                src="/icons/vision.png"
                alt="about img"
                width={60}
                height={60}
              />
            </div>
            <div>
              <div className="mt-2 text-lg md:text-xl lg:text-2xl text-secondary font-semibold">
                Our Vision
              </div>
              <div className="mt-2 md:mt-4 text-[#909090] text-sm md:text-base">
                Our vision is to become a global leader in AI-driven software
                development, delivering innovative solutions that transform the
                way businesses operate and engage with customers. We strive to
                empower organizations with technology that drives growth,
                fosters innovation, and creates lasting value for all
                stakeholders.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-10 md:pt-15 md:mt-15 md:pb-30 mx-auto text-center bg-[url('/images/grid.svg')] bg-cover bg-center max-w-[120rem] sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Pills>Our Team</Pills>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4 px-6 md-px-16">
          Meet The <span className="text-tertiary"> Squad</span> And
          <span className="text-tertiary"> Industry Experts</span>
        </h1>
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 flex-wrap">
              <TeamCard
                image="/images/team-1-min.png"
                name="Gaurav Shrestha"
                position="Founder & CEO"
                altText="Team1"
              />
              <TeamCard
                image="/images/team-2-min.PNG"
                name="Sresta Malla Thakuri"
                position="Co-founder & CTO"
                altText="Team2"
              />
              <TeamCard
                image="/images/team-7-min.PNG"
                name="Pareekshit Pokharel"
                position="Business Head / Project Manager"
                altText="Team7"
              />
              <TeamCard
                image="/images/team-9-min.PNG"
                name="Ganesh Thapa"
                position="Financial Advisor"
                altText="Team8"
              />
              <TeamCard
                image="/images/team-10-min.PNG"
                name="Nirvaya Shrestha"
                position="Marketing Advisor"
                altText="Team10"
              />
              <TeamCard
                image="/images/team-3-min.PNG"
                name="Roshan Rai"
                position="Senior Software Engineer"
                altText="Team3"
              />
              <TeamCard
                image="/images/team-4-min.PNG"
                name="Samrat Pandey"
                position="QA Engineer"
                altText="Team4"
              />
              <TeamCard
                image="/images/team-5-min.PNG"
                name="Saurabh Shrestha"
                position="Sales Representative"
                altText="Team5"
              />
              <TeamCard
                image="/images/team-6-min.PNG"
                name="Milan Rajbanshi"
                position="React Engineer"
                altText="Team6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
