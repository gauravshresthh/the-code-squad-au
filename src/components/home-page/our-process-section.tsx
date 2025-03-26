import React from "react";
import Pills from "../shared/pills";
import Image from "next/image";

const processes = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business goals, target audience, and challenges. Through in-depth research and strategy sessions, we define the right technology stack and product roadmap to bring your vision to life.",
    icon: "/icons/strategy.png",
  },
  {
    id: 2,
    title: "UX/UI Design & Prototyping",
    description:
      "Great products begin with great design. Our designers create intuitive, user-friendly interfaces that enhance engagement and drive conversions. With interactive prototypes, you get a clear vision of the final product before development begins.",
    icon: "/icons/design.png",
  },
  {
    id: 3,
    title: "Agile Development & Engineering",
    description:
      "Our expert developers build scalable, high-performance applications using the latest web, mobile, and cloud technologies. We follow Agile methodologies, ensuring continuous development, feedback, and improvement throughout the process.",
    icon: "/icons/web-development.png",
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "We prioritize performance, security, and reliability. Through rigorous automated and manual testing, we ensure that your product is bug-free, optimized, and ready for launch.",
    icon: "/icons/testing.png",
  },
  {
    id: 5,
    title: "Deployment & Launch",
    description:
      "Once tested and refined, we deploy your product using cloud-native solutions and DevOps best practices, ensuring a seamless and scalable launch.",
    icon: "/icons/deployment.png",
  },
  {
    id: 6,
    title: "Growth & Continuous Improvement",
    description:
      "Our work doesn’t stop at launch. We provide ongoing support, performance monitoring, and iterative updates to keep your product optimized, secure, and aligned with evolving market needs.",
    icon: "/icons/growth.png",
  },
];

const OurProcessSection = () => {
  return (
    <div className="px-6 py-20 lg:py-32 bg-[url('/images/bg-img-1.webp')] bg-cover bg-center">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Pills>Our Process</Pills>
        </div>
        <div className="mt-4 md:mt-2 text-3xl md:text-4xl lg:text-5xl text-primary text-center">
          From <span className="text-tertiary">Concept</span> to Scalable{" "}
          <span className="text-tertiary">Success</span>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly gap-5 mt-10 md:mt-14 lg:mt-20">
          {processes.map((process) => (
            <div
              key={process.id}
              className="px-5 py-5 md:py-10 md:w-[48%] xl:w-[32%] bg-[#F5F6F9] border border-[#d8d8db] rounded-2xl"
            >
              <div>
                <Image
                  src={process.icon}
                  alt="about img"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <div className="mt-2 text-lg md:text-xl lg:text-2xl text-secondary font-semibold">
                  {process.title}
                </div>
                <div className="mt-2 md:mt-4 text-[#909090] text-sm md:text-base">
                  {process.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcessSection;
