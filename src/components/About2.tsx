'use client'; // Ensure the component is a Client Component

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AboutProps {
  title: ReactNode;
  suptitle: string; // Subtitle should be a string
  image: string | StaticImageData; // Image should be a string (the path or URL)
 
}

const About2 = ({ title, suptitle, image  }: AboutProps) => {
  return (
    <>
 <div className="flex flex-col lg:flex-row w-full items-center justify-center ">
      {/* Image Section */}
      
      <div className="w-full lg:w-[47%] h-[100%] lg:h-[47%] flex justify-center lg:my-0 my-20 items-center lg:relative">
        <Image
          src={image}// replace with your image path
          alt="Descriptive Alt Text"
      
          layout="responsive"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>
      {/* Text Section */}
      <div className="w-full h-[100%] lg:h-[47%] lg:w-[47%] flex flex-col ">
        <h1 className="text-5xl font-bold mb-0 text-left lg:mb-4">
         {title}
        </h1>
        <p className="text-lg text-gray-600">
          {suptitle}
        </p>
      </div>
   
    </div>
    </>
  );
};

export default About2;
