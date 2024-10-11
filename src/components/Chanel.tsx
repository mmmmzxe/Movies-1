'use client';  // Ensure this is a Client Component for Framer Motion to work

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';  // Import motion from Framer Motion
import Link from 'next/link';

const Data = [
    {
        id: 1,
        imag: '/images/1.png'
    },
    {
        id: 2,
        imag: '/images/2.png'
    },
    {
        id: 3,
        imag: '/images/3.png'
    },
    {
        id: 4,
        imag: '/images/4.png'
    },
    {
        id: 5,
        imag: '/images/8.png'
    },
    {
        id: 6,
        imag: '/images/9.png'
    },
    {
        id: 7,
        imag: '/images/10.png'
    }
];

function ChanalHome() {
    return (
        <div className='flex flex-wrap gap-4 w-full  mb-32 mt-32 mx-auto max-w-full justify-around items-center p-3'>
        
            {Data.map((data) => {
                return (
                    <motion.div
                        key={data.id}
                        className='flex flex-col items-center justify-center pb-8'
                       // Trigger animation when 50% in view
                    >
                        <Image 
                            src={data.imag} 
                            alt='Image' 
                            width={150} 
                            height={100}
                            className="transition-all duration-300 ease-in-out hover:scale-105"  // Hover effect for images
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}

export default ChanalHome;
