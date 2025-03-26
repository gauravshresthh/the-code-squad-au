import React from "react";
import Pills from "../shared/pills";
import Image from "next/image";
import PrimaryButton from "../shared/primary-button";

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

const ServiceSection = () => {
  return (
    <div className="px-6 py-20 lg:py-32 bg-[url('/images/grid.svg')] bg-cover bg-center">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Pills>Our Services</Pills>
        </div>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-10 lg:gap-14 xl:gap-20 xl:px-10 py-10 md:py-16`}
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
                <PrimaryButton href="/services">Learn More</PrimaryButton>
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
  );
};

export default ServiceSection;
