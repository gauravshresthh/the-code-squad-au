'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Pills from '../shared/pills';

const testimonials = [
  {
    name: 'Richa Banners',
    username: '@richabanners',
    text: 'TheCodeSquad took our vision and turned it into reality! They built a powerful AI-driven chatbot for our customer support, reducing response time by 70%. Exceptional execution and seamless integration into our existing system.',
    avatar: '/images/client1.png',
    featured: true,
  },
  {
    name: 'Gerald Reynolds',
    username: '@geraldreynolds',
    text: 'We needed an AI-powered analytics dashboard to track user behavior. TheCodeSquad not only delivered a stunning web app but also optimized our internal processes with AI automation. Highly recommend!',
    avatar: '/images/client2.png',
  },
  {
    name: 'Jennifer Anderson',
    username: '@jenniferanderson',
    text: 'We approached TheCodeSquad to build a web app with AI-powered recommendations. Their expertise in AI and mobile development transformed our e-commerce business, increasing conversions by 40%.',
    avatar: '/images/client3.png',
  },
  {
    name: 'Rahul Mehta',
    username: '@rahulmehta',
    text: 'Our outdated CRM needed an AI upgrade, and TheCodeSquad delivered beyond expectations. The automation they built has saved us hundreds of hours in manual data entry and customer management.',
    avatar: '/images/client4.png',
    featured: true,
  },
  {
    name: 'Olivia Bennett',
    username: '@oliviabennett',
    text: 'TheCodeSquad transformed our healthcare platform with AI-powered automation. From patient data processing to real-time diagnosis assistance, they delivered exactly what we needed.',
    avatar: '/images/client6.png',
  },
  {
    name: 'Daniel Martinez',
    username: '@danielmartinez',
    text: 'We wanted to integrate AI-driven fraud detection into our fintech platform. TheCodeSquad’s team built a robust solution that significantly reduced fraudulent transactions. A game-changer for our business!',
    avatar: '/images/client7.png',
  },
];

const Testimonials = () => {
  const [positions, setPositions] = useState(
    testimonials.map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth >= 1024) {
        const interval = setInterval(() => {
          setPositions(
            testimonials.map(() => ({
              x: Math.random() * 20 - 10, // Random movement in X direction
              y: Math.random() * 20 - 10, // Random movement in Y direction
            }))
          );
        }, 3000);
        return () => clearInterval(interval);
      // } else {
      //   setPositions(testimonials.map(() => ({ x: 0, y: 0 })));
      // }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-6">
      <div className="bg-[url('/images/grid.svg'),url('/images/gradient1.avif'),url('/images/gradient2.avif')] bg-[#f5f6f9] bg-cover bg-center min-h-screen flex flex-col items-center border border-[#d8d8db] rounded-3xl px-10 py-25">
        <Pills>Testimonials</Pills>
        <h1 className="text-4xl md:text-5xl text-center text-primary font-semibold md:w-2/3 mx-auto">
          We have worked with hundreds of amazing people
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-auto pt-12 relative">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ x: 0, y: 0 }}
              animate={{ x: positions[index].x, y: positions[index].y }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={`group bg-white p-6 rounded-2xl shadow-md relative ${
                testimonial.featured
                  ? 'lg:col-span-2 lg:row-span-2 px-12 my-auto mx-auto'
                  : 'lg:row-span-1'  
              } hover:bg-tertiary hover:text-white cursor-pointer`}
              
            >
              <p
                className={`text-gray-500 group-hover:text-white ${
                  testimonial.featured ? 'font-semibold text-gray-700' : ''
                }`}
              >
                “{testimonial.text}”
              </p>
              <div className="flex items-center mt-4 space-x-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  objectFit="cover"
                  style={{
                    borderRadius: '50%',
                    height: '50px',
                    width: '50px',
                  }}
                />
                <div>
                  <p className="font-semibold">- &nbsp; {testimonial.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;