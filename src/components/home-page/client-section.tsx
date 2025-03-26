"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const logos = [
    { id: 1, name: "Anydone", logo: "/images/logo-anydone.png" },
    { id: 3, name: "Queensford College", logo: "/images/logo-queensford.png" },
    { id: 2, name: "Learnt", logo: "/images/logo-learnt.webp" },
    { id: 4, name: "Kheladi", logo: "/images/logo-kheladi.png" },
    { id: 5, name: "Catapult", logo: "/images/logo-catapult.webp" },
    { id: 6, name: "Swasthya Sambriddi", logo: "/images/logo-swasthya-sambriddhi.png" },
    { id: 7, name: "Vasto", logo: "/images/logo-vasto.webp" },
    { id: 8, name: "GymHub", logo: "/images/logo-gymhub.png" },
    { id: 12, name: "Sajilo App", logo: "/images/logo-sajilo.jpg" },
    { id: 9, name: "Uutyo", logo: "/images/logo-uutyo.png" },
    { id: 10, name: "Pharmacy", logo: "/images/logo-pharmacy.jpg" },
    { id: 11, name: "Ma Ta Chhu Tayar", logo: "/images/logo-ma-ta-chhu-tayar.png" },
    { id: 13, name: "Optonome", logo: "/images/logo-optonome.png" },  
  ];

  return (
    <div className="px-6 pt-16 pb-20 md:py-24 min-h-[50vh] w-full flex flex-col justify-center items-center">
      <div className="text-3xl md:text-4xl lg:text-5xl text-center text-primary">
        Trusted by <span className="text-tertiary">20+ </span>companies
      </div>
      <div className="mt-10 lg:mt-16 w-full max-w-7xl">
        <Slider {...settings}>
          {logos.map((logo) => (
            <div key={logo.id}>
              <Image
                src={logo.logo}
                alt={logo.name}
                width={175}
                height={175}
                className="mx-auto object-contain h-20"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientSection;