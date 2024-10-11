import Image, { StaticImageData } from 'next/image';

interface BanarCardProps {

  title: string;
  image: string | StaticImageData;   // Image should be a string (the path or URL)
  duration: string;


}
const Banner = ({title , image , duration}:BanarCardProps) => {
  return (
    <div className='flex flex-col text-start lg:flex-row items-center my-20 max-h-full m-auto justify-between max-w-full '>
     <div className="hidden w-[320px] h-[400px]  absolute  lg:block ">
      <Image
          src={image} // Static import
          alt="Character"
          className=" relative  bottom-[-43px] right-[-15px] "
          layout="responsive" // To make it responsive
          width={100}
          height={100}
        />
      </div>
    <div className="bg text-white  p-8 rounded-xl justify-end items-end lg:ml-4 ml-0  flex  max-w-full  ">
      {/* Image Section */}
     

      {/* Text Section */}
      <div className=" flex lg:w-[85%] w-full flex-col text-start justify-start items-center lg:px-8">
        <h2 className="text-4xl font-bold mb-4 lg:w-1/2 w-full">
        {title}
        </h2>
        <p className="text-lg mb-6 w-full lg:w-1/2">
     {duration}
        </p>
   <div className='flex justify-start items-start w-full lg:w-[50%]'>
   <button className="bg-white text-dark-indigo  py-2 px-6 rounded-md hover:bg-gray-300">
          Order Now
        </button>
   </div>
      </div>
    </div></div>
  );
};

export default Banner;
