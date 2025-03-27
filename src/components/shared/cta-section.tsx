import React from "react";
import PrimaryButton from "./primary-button";

const CtaSection = () => {
  const calendlyLink = "https://outlook.office365.com/book/TheCodeSquad1@thecodesquad.onmicrosoft.com/"
  return (
    <div className="p-6">
      <div className="bg-[#F5F6F9] border border-[#d8d8db] rounded-2xl px-6 py-12 lg:py-20">
        <div className="text-3xl md:text-4xl lg:text-5xl text-primary text-center">
          Ready to <span className="text-tertiary">Build</span> the{" "}
          <span className="text-tertiary">Future?</span>
        </div>
        <div className="text-[#909090] text-sm md:text-base text-center mt-6">
          Let’s turn your vision into reality with cutting-edge technology,
          strategic execution, and scalable solutions.
        </div>
        <div className="text-center mt-4 lg:mt-8">
          <PrimaryButton href={calendlyLink} target>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
