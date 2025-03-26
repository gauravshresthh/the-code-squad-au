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
              alt="About Us"
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
              Leading <br className="hidden lg:block" />
              <span className="text-tertiary">Australian Digital Solutions Agency</span>
              <br className="hidden lg:block" />
              Helping Businesses Succeed
            </div>
            <div className="mt-4 text-[#909090] text-sm md:text-base">
              Based in Australia, we are a team of expert developers, designers, and strategists committed to empowering local startups and enterprises. Our goal is to help Australian businesses navigate the digital landscape with innovative, scalable, and regulation-compliant solutions. 
              
              With in-depth knowledge of the Australian market, consumer behavior, and industry regulations, we build high-performance web and mobile applications, AI-driven automation tools, and scalable software solutions tailored to local business needs. Whether you need an MVP, eCommerce platform, or a full-scale digital transformation, we are your trusted technology partner.
            </div>
            <div className="text-primary text-sm md:text-base font-semibold mt-4">
              <div className="flex gap-2">
                <Image src="/icons/tick.svg" alt="tick" width="15" height="15" />
                Australian market expertise
              </div>
              <div className="flex gap-2">
                <Image src="/icons/tick.svg" alt="tick" width="15" height="15" />
                Compliance with local regulations & data security laws
              </div>
              <div className="flex gap-2">
                <Image src="/icons/tick.svg" alt="tick" width="15" height="15" />
                Scalable digital solutions for Aussie businesses
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