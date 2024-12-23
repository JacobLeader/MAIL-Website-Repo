import React from 'react';
import teamMembers from '../../data/teamMembers.json';
import Image from 'next/image';
import AnimateOnViewWrapper from '@/components/animateOnViewWrapper';

export default function TeamSection() {
      return (        
        <AnimateOnViewWrapper>
            <a href="/team" className="flex flex-row items-center my-10 cursor-default">
                <div className="flex flex-col justify-center pl-8 w-1/2 cursor-default">
                    <h1 className="font-Inter text-white text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-center cursor-pointer">
                    The<br />Team
                    </h1>
                </div>

                <div className='grid grid-cols-3 grid-rows-3 w-1/3 cursor-default transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                    {teamMembers.slice(0, 9).map((member, index) => (
                        <div 
                            key={index}
                            className="bg-gray-800 rounded-lg p-4 shadow-lg cursor-pointer"
                        >
                            <Image 
                                src={member.image} 
                                className="w-36 h-36 object-cover rounded-md cursor-pointer" 
                                alt={`Photo of ${member.name}`}
                                width={100}
                                height={100}
                                // fill={true}
                            />
                        </div>
                    ))}
                </div>

            </a>
        </AnimateOnViewWrapper>
    );
}
