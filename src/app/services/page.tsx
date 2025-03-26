import React from "react";
import Image from "next/image";
// import PrimaryButton from "@/components/shared/primary-button";
import CtaSection from "@/components/shared/cta-section";
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

const services = [
  {
    id: 1,
    title: "Web and App Development",
    description:
      "We design and develop high-performance web and mobile applications tailored to Australian businesses. Our expert team leverages modern frameworks and technologies to build secure, scalable, and user-friendly digital solutions that align with local market needs.",
    technologies: [
      { category: "Frontend", items: "React.js, Next.js, Vue.js" },
      { category: "Backend", items: "Node.js, Express.js, NestJS" },
      { category: "Databases", items: "PostgreSQL, MongoDB, Firebase" },
      { category: "Mobile", items: "React Native, Flutter" },
      {
        category: "Cloud & DevOps",
        items: "AWS, Docker, Kubernetes, CI/CD",
      },
    ],
    image: "/images/about-us1.avif",
  },
  {
    id: 2,
    title: "MVP Development for Australian Startups",
    description:
      "We help Australian startups turn their ideas into market-ready products with our streamlined MVP development approach. Our Sydney-based team ensures rapid prototyping, market validation, and seamless scalability, helping you launch with confidence.",
    technologies: [
      {
        category: "Rapid Prototyping & Wireframing",
        items: "Visualizing the core idea before development",
      },
      {
        category: "Lean Development",
        items: "Building only what’s necessary to validate the market.",
      },
      {
        category: "Agile Iterations",
        items: "Continuous improvements based on user feedback.",
      },
      {
        category: "Scalable Architecture",
        items: "Ensuring your product is ready to grow in the Australian market.",
      },
    ],
    image: "/images/about-us3.jpg",
  },
  {
    id: 3,
    title: "Product & Growth Strategy",
    description:
      "Building a great product is just the beginning. We provide strategic guidance to Australian businesses, helping them navigate product development, user acquisition, and market expansion with data-driven insights.",
    technologies: [
      {
        category: "Market Research & Competitor Analysis",
        items: "Understanding the Australian business landscape.",
      },
      {
        category: "Feature Prioritization",
        items: "Roadmapping critical functionalities for success.",
      },
      {
        category: "Growth Hacking & User Acquisition",
        items: "Localized strategies for customer acquisition and engagement.",
      },
      {
        category: "Performance Analytics",
        items: "Optimizing retention, engagement, and revenue for Australian businesses.",
      },
    ],
    image: "/images/about-us4.jpg",
  },
  {
    id: 4,
    title: "Tech Consultation for Australian Businesses",
    description:
      "Our Sydney-based tech experts provide strategic consultation to help Australian businesses choose the right technology stack, optimize software architecture, and implement scalable cloud solutions while ensuring compliance with local regulations.",
    technologies: [
      {
        category: "Technology Stack Selection",
        items: "Choosing the right tools & frameworks for Australian businesses.",
      },
      {
        category: "Cloud Architecture & Scalability",
        items: "AWS, GCP, Azure, and DevOps best practices for local enterprises.",
      },
      {
        category: "API Integrations & Automation",
        items: "Optimizing workflows and system interoperability.",
      },
      {
        category: "Security & Performance Optimization",
        items: "Ensuring compliance with Australian cybersecurity and data privacy laws.",
      },
    ],
    image: "/images/about-us2.jpg",
  },
];

const page = () => {
  return (
    <>
      <div className="p-6">
        <div className="bg-[url('/images/grid.svg'),url('/images/gradient1.avif'),url('/images/gradient2.avif'),url('/images/gradient3.avif'),url('/images/gradient4.avif'),url('/images/gradient5.avif')] bg-[#f5f6f9] bg-cover bg-center flex flex-col items-start border border-[#d8d8db] rounded-3xl px-4 pt-30 md:pt-36 xl:pt-52 pb-5 md:pb-0 min-h-[calc(100vh-3rem)]">
          <div className="mt-10 md:px-16 mx-auto text-center flex flex-col items-center justify-center">
            <h1 className="text-[1.6rem] md:text-4xl lg:text-5xl text-primary mb-4">
              Transforming Ideas into {' '}
              <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 md:px-8 py-1 rounded-2xl border border-secondary leading-12 xl:leading-24">
                Digital Success
              </span>
            </h1>
            <p className="px-5 text-base md:text-lg mb-6 mt-6 md:w-1/2 mx-auto text-gray-500">
              At TheCodeSquad, we believe that every business is unique, and so
              are its challenges. That’s why we offer bespoke digital solutions
              designed to meet your specific goals. From cutting-edge web
              development to seamless user experiences, our team works closely
              with you to create the perfect strategy that drives results and
              elevates your brand.
            </p>
            <p className="px-2 text-sm mb-12 mt-2 md:w-1/2 mx-auto text-gray-500">
              Whether you’re a startup or an established enterprise, we have the
              expertise to deliver solutions that fit your vision and push you
              forward.
            </p>
          </div>
        </div>
        <div className="max-w-[120rem] mx-auto sm:px-6 lg:px-8 mt-10 md:mt-20">
          <div className="px-10">
          <Pills>Our Services</Pills>
          </div>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 lg:gap-14 xl:gap-20 xl:px-10 pb-20 md:pb-28`}
            >
              <div className="md:w-4/5 lg:w-3/5">
                <div className="mt-2 text-xl md:text-2xl lg:text-3xl text-secondary">
                  {service.title}
                </div>
                <div className="mt-4 text-[#909090] text-sm md:text-base">
                  {service.description}
                </div>
                <div className="text-primary text-sm md:text-base mt-4">
                  <div>Technologies we use</div>
                  {service.technologies.map((tech) => (
                    <div key={tech.category} className="flex gap-2 ">
                      <Image
                        src="/icons/tick.svg"
                        alt="tick"
                        width="15"
                        height="15"
                      />
                      {tech.category} - {tech.items}
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  {/* <PrimaryButton href="#/">Learn More</PrimaryButton> */}
                </div>
              </div>
              <div>
                <Image
                  src={service.image}
                  alt="about img"
                  width={500}
                  height={100}
                  className="rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <CtaSection />
      </div>
    </>
  );
};

export default page;
