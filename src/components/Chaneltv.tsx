'use client'
import React from "react";

import Image from "next/image";
import { motion } from 'framer-motion'; 
import Link from "next/link";

const Data = [
  {
    id: 1,
    imag: "/images/cnn.png",
  },
  { id: 2, imag: "/images/espn.png" },
  { id: 3, imag: "/images/usa.png" },
  {
    id: 4,
    imag: "/images/beinsport.png",
  },
  {
    id: 5,
    imag: "/images/foxnews.png",
  },
];
function Chanaltv() {
  return (
    <div className="flex flex-wrap gap-3 w-full   justify-around items-center p-3 ">
     
      <div className="svg2"></div>
      {Data.map((data) => {
        return (
          <motion.div
            key={data.id}
          
            className="flex flex-col  items-center justify-center pb-8   "
          >
<div className="bg-2 p-5 rounded-lg ">
<Image
             
             src={data.imag}
             className=""
             alt="no"
             width={150}
             height={100}
           ></Image>
</div>
           
          </motion.div>
        );
      })}
    </div>
  );
}

export default Chanaltv;
