import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
	return (
		<div className="p-6">
			<div className="bg-[url('/images/grid.svg'),url('/images/gradient1.avif'),url('/images/gradient2.avif'),url('/images/gradient3.avif'),url('/images/gradient4.avif'),url('/images/gradient5.avif')] bg-[#f5f6f9] bg-cover bg-center 2xl:h-[800px] flex flex-col items-center border border-[#d8d8db] rounded-3xl px-2 pt-48 pb-56 min-h-[calc(100vh-3rem)]">
				<div className="border rounded-full mb-5 px-4 py-1 bg-white text-secondary border-[#d8d8db] flex items-center gap-2 text-sm lg:text-base">
					<Image
						src="/icons/pointer.svg"
						alt="pointer"
						width={15}
						height={15}
					/>
					Innovate, Scale, Succeed in Australia
				</div>
				<div className="text-4xl md:text-6xl md:w-[85%] xl:w-[75%] text-center text-primary leading-14 md:leading-20 lg:leading-24">
					Powering Australian Businesses with <br/>
					<span className="bg-gradient-to-r from-primary to-secondary text-white px-4 md:px-8 py-1 rounded-2xl border border-secondary">
						Code and AI
					</span>
				</div>
				<div className="mt-8 text-base lg:text-lg md:w-3/4 lg:w-1/2 text-center text-secondary">
					We help Australian startups and enterprises transform their ideas into innovative, scalable digital solutions. From AI-driven automation to robust software development, we drive business success.
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
