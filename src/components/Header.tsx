import Image from "next/image";
import Link from "next/link";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";
import m from '../../public/images/logo.png';
import Nav from "./Nav";
import HeroCarousel from "./HeroCarousel"; // Ensure to use this if necessary
import CaroselBanner from "./CaroselBanner"; // Ensure to use this if necessary
import Notification from "./Notification";

const Header = () => {
  return (
    <div className="flex flex-col">
      {/* Header Navigation */}
      <div className="flex items-center backdrop-blur-xl justify-between p-5 fixed z-30 w-full ">
      
       <div className="lg:ml-[100px] ml-[30px] ">
       <Link href="/" className="flex items-center">
          <Image
            src={m}
            alt="Logo"
            width={60}
            height={60}
            priority={true}
            className="cursor-pointer lg:w-12 w-9 h-auto"
          />
          <h1 className="lg:text-[1.1rem] text-[20px] ml-3">Movies</h1>
        </Link>

       </div>
        {/* Navigation and Search Components */}
        <div className="hidden lg:flex lg:flex-row justify-between items-center ">
          <GenreDropDown />
          <SearchInput />
          
        </div>
        <div className="mr-[100px] ">
        <Nav />
        </div>
          
      </div>
<div className="flex items-end justify-end p-5 ml-[-100px] fixed z-30 w-full mt-24">
<Notification />
</div>
      {/* Carousel Banner */}
      <div>
        <CaroselBanner />
      </div>
    </div>
  );
};

export default Header;
