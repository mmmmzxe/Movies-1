"use client";
import { Movie } from "../../type";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { PlayIcon } from "lucide-react";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const router = useRouter();
  const hanldeRoute = () => {
    router.push(`/movie/${movie?.id}`);
  };
  return (
    <div
      onClick={hanldeRoute}
      className="relative cardhover flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg"
    >

      
      <Image
        src={getImagePath(movie?.backdrop_path || movie?.poster_path)}
        alt={movie?.title}
        width={300}
        height={350}
        className="w-[282px] border rounded-2xl border-none h-[330px] object-cover bg-center shadow-md shadow-gray-900 drop-shadow-md"
      />
         <div className="hover">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90"></div>

{/* Movie Details */}
<div className="absolute flex justify-center items-center flex-col bottom-0 mb-9 left-0 right-0 p-4 text-center">
  <h2 className="text-white text-[28px] font-bold">{movie.title}</h2>
  <p className="text-gray-300 text-[28px]">{movie.release_date}</p>

  {/* Movie Details Button */}
  <button onClick={hanldeRoute} className="  my-3 button">
          Movie Details
        </button>

  {/* Watch Now Button */}
  
</div>
      </div>
    </div>
  );
};

export default MovieCard;
