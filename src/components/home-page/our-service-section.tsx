import React from "react";
import Pills from "../shared/pills";
import Image from "next/image";
import PrimaryButton from "../shared/primary-button";

const services = [
  {
    id: 1,
    title: "Web and App Development",
    description:
      "We build robust, scalable, and high-performance web and mobile applications tailored to your business needs. Our expertise spans across modern frameworks and technologies, ensuring your digital product is optimized for speed, security, and seamless user experience.",
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
    title: "MVP Development for Startups",
    description:
      "Turning an idea into a market-ready product requires strategic execution. We specialize in Minimum Viable Product (MVP) development, helping startups rapidly prototype, validate, and launch their solutions with a lean approach.",
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
        items: "Ensuring your product is ready to grow.",
      },
    ],
    image: "/images/about-us3.jpg",
  },
  {
    id: 3,
    title: "Product & Growth Strategy",
    description:
      "A great product requires more than just development; it needs a strategic roadmap for growth. We guide startups through the entire product lifecycle, from ideation to scaling.",
    technologies: [
      {
        category: "Market Research & Competitor Analysis",
        items: "Understanding the industry landscape.",
      },
      {
        category: "Feature Prioritization",
        items: "Roadmapping critical functionalities for success.",
      },
      {
        category: "Growth Hacking & User Acquisition",
        items: "Data-driven strategies for customer growth.",
      },
      {
        category: "Performance Analytic",
        items: "Optimizing retention, engagement, and revenue.",
      },
    ],
    image: "/images/about-us4.jpg",
  },
  {
    id: 4,
    title: "Tech Consultation",
    description:
      "Navigating the digital landscape can be overwhelming. Our team of seasoned tech experts provides consultation on the best technology stack, software architecture, and development strategies tailored to your business goals.",
    technologies: [
      {
        category: "Technology Stack Selection ",
        items: "Choosing the right tools & frameworks.",
      },
      {
        category: "Cloud Architecture & Scalability",
        items: "AWS, GCP, Azure, and DevOps best practices.",
      },
      {
        category: "API Integrations & Automation",
        items: "Optimizing workflows and system interoperability.",
      },
      {
        category: "Security & Performance Optimization",
        items: " Ensuring robust and efficient solutions.",
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
