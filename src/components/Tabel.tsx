'use client';
import React from 'react';
import { motion } from 'framer-motion';
import happyImage from '../../public/images/1-1.png'; // Replace with your actual image path
import sadImage from '../../public/images/4 (2).png'; // Replace with your actual image path
import Image from 'next/image';

// Define the possible status types
type Status = 'happy' | 'sad';

// Define the row type
interface TableRow {
  feature: string;
  statuses: (Status | string)[];
  n: number[]; // Change n to be an array of numbers for easier SVG rendering
}

// Icons for different statuses
const HappyIcon = () => <Image src={happyImage} alt="Happy Icon" className="text-red-500 w-8 h-8" />;
const SadIcon = () => <Image src={sadImage} alt="Sad Icon" className="text-red-500 w-8 h-8" />;

// A function to select the appropriate icon
const getIcon = (status: Status) => {
  switch (status) {
    case 'happy':
      return <HappyIcon />;
    case 'sad':
      return <SadIcon />;
    default:
      return null;
  }
};

// Type guard to check if a string is a valid Status
const isStatus = (status: string): status is Status => {
  return status === 'happy' || status === 'sad';
};

// A function to render the SVG circle progress
const renderSVG = (percentage: number, color: string) => (
  <svg width="55" height="55" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-90deg)' }}>
    <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e0" strokeWidth="16px" strokeDasharray="565.48px" strokeDashoffset="0"></circle>
    <circle r="90" cx="100" cy="100" stroke={color} strokeWidth="16px" strokeLinecap="round" strokeDasharray="565.48px" strokeDashoffset={565.48 - (percentage / 100) * 565.48}></circle>
    <text x="40px" y="180px" fill={color} fontSize="100px" fontWeight="bold" style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}>{percentage}</text>
  </svg>
);

const Table: React.FC = () => {
  // Define the table data
  const data: TableRow[] = [
    { feature: "On-Demand Content", statuses: ["happy", "sad", "sad", "sad"], n: [] },
    { feature: "Price ($)", statuses: ["10$ per month ", "35$ per month ", "sad", "sad"], n: [] },
    { feature: "Channels TV", statuses: ["15000+", "sad", "sad", "sad"], n: [] },
    { feature: "Movies", statuses: ["80000+", "1300", "sad", "sad"], n: [] },
    { feature: "Anime", statuses: ["5", "sad", "sad", "sad"], n: [] },
    { feature: "Sports Coverage", statuses: ["happy", "sad", "sad", "sad"], n: [] },
    { feature: "4k Quality", statuses: ["happy", "sad", "happy", "happy"], n: [] },
    { feature: "Score", statuses: [], n: [95, 63, 64, 36] }, // Update to numbers
  ];

  return (
    <div>
     
      <motion.div className=" max-w-full text-center p-5 my-52 flex flex-col justify-center">
        <div className='flex flex-row m-auto justify-center items-center text-center mb-3'>
          <h2 className="text-4xl font-bold text-white mb-6 w-[100%] lg:w-[90%]">
            On the occasion of our 5th anniversary, enjoy <span className="sh uppercase">30% discount</span>
          </h2>
        </div>

        <motion.div className='bg-4 mt-8 rounded-md text-white'>
          <div className="overflow-hidden rounded-2xl"> {/* Wrapping the table in a div for border radius */}
            <table className="lg:w-[100%] m-auto"> {/* Add a border to the table */}
              <thead className='bg-5'>
                <tr>
                  <th className="p-5 border-b border-r text-left border-gray-500">FEATURES</th>
                  <th className="p-5 border-b border-r border-gray-500">Movies</th>
                  <th className="p-5 border-b border-r border-gray-500">Netflix</th>
                  <th className="p-5 border-b border-r border-gray-500">Video Prime</th>
                  <th className="p-5 border-b border-gray-500">Apple TV Plus</th>
                </tr>
              </thead>
              <tbody className=''>
                {data.map((row, rowIndex) => (
                  <motion.tr key={rowIndex}>
                    <td className={`p-5 pl-5 text-[17px] text-left border-gray-500 border-r border-b ${rowIndex === data.length - 1 ? 'border-b-0' : ''}`}>{row.feature}</td>
                    {row.statuses.map((status, index) => (
                      <td key={index} className={`text-white border-r border-b border-gray-500 text-center ${index === row.statuses.length - 1 ? 'border-r-0' : ''}`}>
                      <div className='flex justify-center items-center'>
                      {isStatus(status) ? getIcon(status) : status} {/* Display status text if not a valid Status */}
                      </div>
                      </td>
                    ))}
                    {row.n.map((n, index) => {
                      const color = n > 75 ? '#00ff00' : n > 50 ? '#ffff00' : '#ff0000'; // Color based on percentage
                      return (
                        <td key={index} className={`border-gray-500 border-r ${index === row.n.length - 1 ? 'border-r-0' : ''} `}>
                          <div className='text-center flex justify-center items-center'>
                            {renderSVG(n, color)} {/* Centered SVG */}
                          </div>
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Table;
