"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { Movie } from "../../type";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";
import { PlayIcon } from "lucide-react";

interface Props {
  movies: Movie[];
}

const HeroCarousel = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [AutoPlay()]);
  return (
    <div className="overflow-hidden h-full cursor-pointer relative" ref={emblaRef}>
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie?.id} className="flex-full min-w-0 relative">
            

            <Image
              src={getImagePath(movie?.backdrop_path, true)}
              alt={movie?.title}
              width={1920}
              height={1080} className=""
            />
            
            <div className=" absolute top-0 left-0 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
           <div className=" flex flex-col justify-start items-start w-[50%] mt-16 sm:mt-24 lg:mt-48 ml-[80px] p-2">
           <h2 className="lg:text-[4rem] text-[1rem] sm:text-[2rem]   font-bold max-w-xl ">{movie?.title}</h2>
              <p className="max-w-xl lg:text-[1rem] mt-5 text-[.2rem] sm:text-[.5rem] line-clamp-3">{movie?.overview}</p>
              <button className="flex button mt-10">  <PlayIcon/>Play Video</button>
           </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/10 to-[#181616d7]" />
    </div>
  );
};

export default HeroCarousel;
