import React from 'react';
import Image from 'next/image';

interface TeamCardProps {
  image: string;
  name: string;
  position: string;
  altText: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, position, altText }) => {
  return (
    <div className="flex flex-col items-center bg-[#fafafa] px-8 py-6 max-w-[400px] rounded-lg">
      <Image
        src={image}
        alt={altText}
        className=""
        width={300}
        height={300}
        objectFit="contain"
        style={{ background: 'linear-gradient(135deg, #6EE7B7, #3B82F6)' , borderRadius: '50%' }}
      />
      <h1 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold mt-4">{name}</h1>
      <p className="text-base md:text-lg text-secondary mt-2">{position}</p>
    </div>
  );
};

export default TeamCard;
