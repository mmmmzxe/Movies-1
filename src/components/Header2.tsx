import Image from "next/image";
import Link from "next/link";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";
import m from '../../public/images/logo.png';
import Nav from "./Nav";
import HeroCarousel from "./HeroCarousel"; // Ensure to use this if necessary
import CaroselBanner from "./CaroselBanner"; // Ensure to use this if necessary

const Header2 = () => {
  return (
    <div className="">
      {/* Header Navigation */}
      <div className="flex items-center  backdrop-blur-xl justify-between p-5  z-30 w-full ">
      
       <div className="lg:ml-[200px]  md:ml-[50px]  sm:ml-[20px]">
       <Link href="/" className="flex items-center">
          <Image
            src={m}
            alt="Logo"
            width={50}
            height={50}
            priority={true}
            className="cursor-pointer lg:w-8 w-4 h-auto"
          />
          <h1 className="lg:text-[1.1rem] text-[20px] ml-3">Movies</h1>
        </Link>

       </div>
        {/* Navigation and Search Components */}
        <div className="hidden lg:flex lg:flex-row justify-between items-center space-x-5">
          <GenreDropDown />
          <SearchInput />
          
        </div>
        <div className="lg:mr-[200px]  md:mr-[50px]  sm:mr-[20px]">
        <Nav />
        </div>
      </div>

      {/* Carousel Banner */}
    
    </div>
  );
};

export default Header2;
