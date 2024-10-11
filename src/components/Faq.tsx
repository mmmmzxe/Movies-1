"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import characterImage from '../../public/images/image 23.png';
import { MoveDownRightIcon, MoveUpRightIcon } from 'lucide-react'; // Removed unused icon

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex items-center m-10 icon flex-col lg:flex-row sm:flex-col  justify-around h-full p-10 space-y-8 md:space-y-0'>
        {/* Image Section */}
        <div className='lg:w-[48%] w-full'>
          <Image
            src={characterImage}
            alt="Character"
            className=""
            layout="responsive"
            width={500}
            height={500}
          />
        </div>

        {/* FAQ Section */}
        <motion.div
     
          className="lg:w-[80%] w-full m-5 text-white mt-8 p-6"
        >
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "What is IPTV?",
                answer:
                  "IPTV is a cutting-edge streaming service that delivers a diverse range of top-notch TV channels, movies, shows, anime, sports, and more to numerous internet-connected devices. We allow you to indulge in unlimited streaming at your convenience – all at an affordable monthly rate."
              },
              {
                question: "How much does IPTV cost?",
                answer:
                  "The cost of IPTV depends on the subscription plan you choose. Please visit our pricing page for detailed information."
              },
              {
                question: "Where can I watch IPTV?",
                answer:
                  "You can watch IPTV on any internet-connected device, including smartphones, tablets, smart TVs, and computers."
              },
              {
                question: "How do I cancel my subscription?",
                answer:
                  "Since we do not require subscribers to sign a contract, you can cancel quickly and easily online at any time. Simply log into your account for cancellation instructions. There are absolutely no cancellation fees."
              },
              {
                question: "What can I watch on IPTV?",
                answer:
                  "You can watch a wide variety of content, including TV channels, movies, shows, anime, and sports."
              },
            ].map((item, index) => (
              <div key={index}>
                {/* Accordion Button */}
                <button
                  className="flex justify-between w-full p-4 text-left rounded-md focus:outline-none transition-all duration-300 bg-2 
                  sm:text-sm sm:p-2 md:text-md md:p-3 lg:text-lg lg:p-4"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className='text-[15px] font-thin'>{item.question}</span>
                  <span className='bg-white rounded-full p-1'>
                    {activeIndex === index ? (
                      <MoveUpRightIcon className='text-blue-500' />
                    ) : (
                      <MoveDownRightIcon className='text-blue-500' />
                    )}
                  </span>
                </button>

                {/* Accordion Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={activeIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 rounded-md">
                    <p className='text-[10px]'>{item.answer}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
