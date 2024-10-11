'use client'
import Image from "next/image";
import image from '../../public/images/20386 1.png';
import image2 from '../../public/images/Frame 1413372275.png';
import { motion } from 'framer-motion'; // Importing Framer Motion

const ContactForm = () => {
  return (
    <motion.div
    
      className="flex flex-col lg:flex-row items-center justify-around max-h-full p-5 m-5 space-y-8 lg:space-y-0 max-w-full"
    >
      {/* Text Content */}
      <motion.div
    
        className="flex flex-col p-5 justify-around spa items-center rounded-xl border border-none text-center lg:w-[40%] w-full lg:h-[550px]"
      >
        <h1 className="text-[30px]">Say Hello!</h1>
        <p>Completely synergize resource taxing relationships via premier niche</p>
        <Image alt="" className="w-1/2" src={image} />
        <Image alt="" className="lg:w-1/3 w-1/4 mt-5" src={image2} />
      </motion.div>

      <motion.div

        className="relative lg:w-[90%] w-full flex justify-start items-start lg:pb-10 pb-0 overflow-hidden "
      >
        <div className="w-full m-5">
          <div className="lg:mx-10 mx-0">
            <span className="text-[15px] text-white">CONTACT WITH US</span>
            <h1 className="text-3xl">Feel Free to Ask Something, We’re Here</h1>
          </div>

          <form className="w-full flex flex-col justify-start items-start">
            <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="px-7 m-3 w-full text-white py-4 rounded-lg focus:outline-none bg-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-7 m-3 w-full text-white py-4 rounded-lg focus:outline-none bg-2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="px-7 m-3 w-full text-white py-4 rounded-lg focus:outline-none bg-2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="px-7 m-3 w-full text-white py-4 rounded-lg focus:outline-none bg-2"
              />
            </div>

            <div className="w-full flex flex-col justify-start items-start">
              <textarea
                cols={78}
                rows={5}
                placeholder="Message"
                className="text-white p-5 ml-8 rounded-lg focus:outline-none bg-2"
              ></textarea>
              <button type="submit" className="button ml-8 w-1/3 mt-9">
                Send
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
