'use client'
import Link from "next/link";
import { Movie } from "../../type";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

const MovieContainer = ({ title, movies, isVertical }: Props) => {
  return (
    <motion.div     >
      <div  className=" m-6 p-2 flex items-center justify-between border-b border-b-gray-500 relative ">
        <h2 className="text-[30px] uppercase font-bold tracking-wider">{title}</h2>
        <Link
          href={{ pathname: "/viewmore", query: { title: title } }}
          className=" text-xs text-white uppercase  py-1 rounded-md font-semibold hover:bg-black duration-300"
        >
          View more
        </Link>
      
      </div>
      <div    className={cn(
                    "flex space-x-4 overflow-scroll p-5 scrollbar-hide",
                    isVertical && "flex-col space-x-0 space-y-12"
                  )}
      >
        {isVertical
          ? movies?.map((movie) => (
              <motion.div 
                 
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-md">
                  <p className="font-bold">
                    {movie?.title} ({movie?.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p>{movie?.overview}</p>
                </div>
              </motion.div>
            ))
          : movies.map((movie) => <MovieCard key={movie?.id} movie={movie} />)}
      </div>
    </motion.div>
  );
};

export default MovieContainer;
