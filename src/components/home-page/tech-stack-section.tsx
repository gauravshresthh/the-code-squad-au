'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Pills from '../shared/pills';
import Image from 'next/image';

const stack = [
  {
    id: 1,
    title: 'Designs',
    icons: [
      { id: 1, name: 'Figma', logo: '/images/logo-figma.webp' },
      { id: 2, name: 'Sketch', logo: '/images/logo-sketch.webp' },
      { id: 3, name: 'Photoshop', logo: '/images/logo-photoshop.webp' },
      { id: 4, name: 'Illustrator', logo: '/images/logo-illustrator.webp' },
      { id: 5, name: 'Adobe XD', logo: '/images/logo-xd.webp' },
    ],
  },
  {
    id: 2,
    title: 'Front-End',
    icons: [
      { id: 1, name: 'HTML5', logo: '/images/logo-html5.webp' },
      { id: 2, name: 'JavaScript', logo: '/images/logo-js.jpeg' },
      { id: 3, name: 'CSS', logo: '/images/logo-css.webp' },
      { id: 4, name: 'Angular', logo: '/images/logo-angular.webp' },
      { id: 5, name: 'React', logo: '/images/logo-react.webp' },
      { id: 6, name: 'TypeScript', logo: '/images/logo-ts.webp' },
    ],
  },
  {
    id: 3,
    title: 'Back-End & Devops',
    icons: [
      { id: 1, name: 'Node.js', logo: '/images/logo-nodejs.webp' },
      { id: 2, name: 'Python', logo: '/images/logo-python.webp' },
      { id: 3, name: 'PHP', logo: '/images/logo-php.webp' },
      { id: 4, name: 'Amazon Web Services', logo: '/images/aws-logo.png' },
      { id: 5, name: 'Microsoft Azure', logo: '/images/azure-logo.webp' },
      { id: 6, name: 'Google Cloud Services', logo: '/images/gcp-logo.webp' },
    ],
  },
  {
    id: 4,
    title: 'AI',
    icons: [
      { id: 1, name: 'AI', logo: '/images/icon-ai.webp' },
      { id: 2, name: 'ChatGPT', logo: '/images/logo-chatgpt.png' },
      { id: 3, name: 'Gemini', logo: '/images/logo-gemini.png' },
      { id: 4, name: 'Claude', logo: '/images/logo-claude.png' },
    ],
  },
];

const TechStackSection = () => {
  const [positions, setPositions] = useState(
    stack.flatMap((category) => category.icons.map(() => ({ x: 0, y: 0 })))
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(
        stack.flatMap((category) =>
          category.icons.map(() => ({
            x: Math.random() * 30 - 5,
            y: Math.random() * 30 - 5,
          }))
        )
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-12 lg:py-20 xl:py-28">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Pills>Tech Stack We Use </Pills>
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl text-primary text-center">
          The Right <span className="text-tertiary">Stack</span> for Every{' '}
          <span className="text-tertiary">Solution</span>
        </div>
        <div className="text-[#909090] text-sm md:text-base text-center mt-6">
          From frontend to backend, AI to cloud, we use modern, battle-tested
          technologies to create future-ready solutions.
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly gap-6 mt-10 md:mt-14 lg:mt-20">
          {stack.map((stack, stackIndex) => (
            <div
              key={stack.id}
              className="px-5 py-10 md:py-10 bg-[#F5F6F9] border border-[#d8d8db] rounded-2xl w-full md:w-[44%] xl:w-[23%] overflow-hidden"
            >
              <div>
                <div className="mt-2 text-lg md:text-xl lg:text-2xl text-secondary font-semibold text-center">
                  {stack.title}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 ">
                  {stack.icons.map((icon, iconIndex) => (
                    <motion.div
                      key={icon.id}
                      className="mt-4 flex flex-col items-center"
                      animate={{
                        x: positions[
                          stackIndex * stack.icons.length + iconIndex
                        ].x,
                        y: positions[
                          stackIndex * stack.icons.length + iconIndex
                        ].y,
                      }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                      <div className="w-18 h-18 md:w-22 md:h-22 rounded-full bg-white overflow-hidden flex items-center justify-center">
                        <Image
                          src={icon.logo}
                          alt="tech stack icon"
                          width={50}
                          height={50}
                          className="w-2/3 h-2/3 object-contain"
                        />
                      </div>
                      <div className="mt-2 text-sm text-center">
                        {icon.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
