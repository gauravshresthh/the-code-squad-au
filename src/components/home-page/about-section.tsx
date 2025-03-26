import React from "react";
import Pills from "../shared/pills";
import Image from "next/image";
import PrimaryButton from "../shared/primary-button";

const AboutSection = () => {
  return (
    <div className="p-6">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:hidden">
          <Pills>About Us</Pills>
        </div>
        <div className="flex flex-col xl:px-10 md:flex-row gap-10 lg:gap-14 xl:gap-20">
          <div>
            <Image
              src="/images/about-us-section.jpg"
              alt="about img"
              width={500}
              height={100}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-3/5">
            <div className="hidden md:block">
              <Pills>About Us</Pills>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl text-primary ">
              Professional <br className="hidden lg:block" />
              <span className="text-tertiary">App Development Agency</span>
            </div>
            {/* <div className="mt-4 md:mt-8 text-xl md:text-2xl lg:text-3xl text-secondary">
              Professional App Development Agency
            </div> */}
            <div className="mt-4 text-[#909090] text-sm md:text-base">
              A team of expert developers, designers, and strategists dedicated
              to empowering startups with innovative digital solutions. Our
              mission is to help businesses launch, scale, and succeed in an
              ever-evolving digital landscape. With a deep understanding of
              technology, user experience, and market trends, we build
              high-performance web and mobile applications, scalable software
              solutions, and AI-powered automation tools tailored to meet the
              unique needs of startups. From MVP development to full-scale
              digital transformation, we partner with businesses at every stage
              of their journey.
            </div>
            <div className="text-primary text-sm md:text-base font-semibold mt-4">
              <div className="flex gap-2 ">
                <Image
                  src="/icons/tick.svg"
                  alt="tick"
                  width="15"
                  height="15"
                />
                Cutting-edge technology
              </div>
              <div className="flex gap-2">
                <Image
                  src="/icons/tick.svg"
                  alt="tick"
                  width="15"
                  height="15"
                />
                Scalable solutions tailored for startups
              </div>
              <div className="flex gap-2">
                <Image
                  src="/icons/tick.svg"
                  alt="tick"
                  width="15"
                  height="15"
                />
                Expert team with a startup mindset
              </div>
            </div>
            <div className="mt-10">
              <PrimaryButton href="/about-us">Learn More</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
