import React from "react";
import Pills from "../shared/pills";

const solutions = [
  {
    id: 1,
    title: "Enhanced Visibility",
    description:
      "A strong digital presence is essential for success. We design high-performance websites, mobile apps, and SEO strategies to ensure businesses reach their target audience. Our solutions drive better search rankings, brand awareness, and customer engagement.",
    icon: "/images/dummy-cta-img.avif",
  },
  {
    id: 2,
    title: "Customer Engagement & Retention",
    description:
      "User experience defines brand loyalty. We develop intuitive, interactive web and mobile applications that keep users engaged. From personalized content recommendations to AI-powered chatbots, we ensure seamless interactions that boost retention.",
    icon: "/images/dummy-cta-img.avif",
  },
  {
    id: 3,
    title: "Operational Efficiency & Automation",
    description:
      "Manual processes slow down businesses. We build AI-driven automation systems, cloud-based platforms, and API integrations to streamline operations, reduce errors, and improve productivity. Our solutions optimize workflows, minimize costs, and accelerate growth.",
    icon: "/images/dummy-cta-img.avif",
  },
  {
    id: 4,
    title: "Scalability & Performance Optimization",
    description:
      "Growing businesses need scalable infrastructure. We implement cloud-native solutions, microservices, and serverless computing to handle traffic spikes and ensure high-speed performance, reliability, and seamless scalability.",
    icon: "/images/dummy-cta-img.avif",
  },
  {
    id: 5,
    title: "Seamless Payment Processing",
    description:
      "Secure and efficient transactions are critical for global businesses. We integrate multi-currency payment gateways like Stripe, Paystack, and PayPal, ensuring secure, frictionless, and compliant payment processing.",
    icon: "/images/dummy-cta-img.avif",
  },
  {
    id: 6,
    title: "Data Security & Compliance",
    description:
      "With increasing cyber threats, we prioritize data protection, encryption, and compliance with standards like GDPR, HIPAA, and PCI DSS. Our security measures prevent breaches and ensure data integrity and user privacy.",
    icon: "/images/dummy-cta-img.avif",
  },
  {
    id: 7,
    title: "AI & Data-Driven Decision Making",
    description:
      "Harnessing data unlocks business potential. We develop AI-powered analytics, machine learning models, and predictive insights to help companies make informed decisions and drive revenue growth.",
    icon: "/images/dummy-cta-img.avif",
  },
  {
    id: 8,
    title: "Bespoke Digital Transformation",
    description:
      "We modernize outdated systems by integrating cloud computing, enterprise software, and IoT solutions. Our digital transformation strategies improve agility, scalability, and operational efficiency.",
    icon: "/images/dummy-cta-img.avif",
  },
  {
    id: 9,
    title: "Future-Proof Tech Solutions",
    description:
      "We deliver next-gen technologies like progressive web apps (PWAs), blockchain, AI automation, and decentralized applications to keep businesses ahead in the digital landscape.",
    icon: "/images/dummy-cta-img.avif",
  },
];

const SolutionsSection = () => {
  return (
    <div className="p-6">
      <div className="bg-[#F5F6F9] border border-[#d8d8db] rounded-2xl py-12 lg:py-20 xl:py-28">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Pills>Our Solutions</Pills>
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl text-primary text-center">
            <span className="text-tertiary">Innovation</span> That Drives{" "}
            <span className="text-tertiary">Success</span>
          </div>
          <div className="text-[#909090] text-sm md:text-base text-center mt-6">
            From AI-powered automation to seamless customer experiences, our
            solutions help businesses thrive in a digital-first world. {" "}
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly gap-5 mt-10 md:mt-14 lg:mt-20">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="group hover:bg-tertiary transition duration-300 ease-in-out px-5 py-5 md:py-10 md:w-[48%] xl:w-[32%] bg-white border border-[#d8d8db] cursor-pointer"
              >
                <div>
                  <div className="mt-2 text-lg md:text-xl lg:text-2xl text-secondary font-semibold group-hover:text-white transition duration-300">
                    {solution.title}
                  </div>
                  <div className="mt-2 md:mt-4 text-[#909090] text-sm md:text-base group-hover:text-white transition duration-300">
                    {solution.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
