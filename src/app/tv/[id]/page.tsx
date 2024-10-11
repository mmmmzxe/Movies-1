import Header from "@/components/Header";
import Header2 from "@/components/Header2";
import MovieContainer from "@/components/MovieContainer";

import VideoPlayer from "@/components/VideoPlayer";
import { getImagePath, getImagePath2 } from "@/lib/getImagePath";
import {
  getMovieDetails,
  getDiscoverTv,
  getTvDetails,
} from "@/lib/getMovies";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link"; // Import Link
import React from "react";

export const metadata: Metadata = {
  title: "Movie Studio Clone || Movie Details page",
};

interface Props {
  params: {
    id: string;
  };
}

const TvDetails = async ({ params: { id } }: Props) => {


  const popularTv = await getDiscoverTv();
  const getTvDetail : any = await getTvDetails(id)

  return (
    <div>
      <Header2/>
      <div className="px-10">
        <div className="py-10 flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full lg:w-1/2 min-h-96 rounded-md overflow-hidden group">
            <Image
              src={getImagePath2(getTvDetail?.backdrop_path || getTvDetail?.poster_path)}
              alt={getTvDetail?.name}
              width={1920}
              height={1080}
              className="w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold underline decoration-[1px]">
              {getTvDetail?.name}
            </h2>
            <p className="text-sm leading-6 tracking-wide mt-2">
              {getTvDetail?.overview}
            </p>
            <p className="text-gray-200 text-sm">
              IMDB:{" "}
              <span className="text-white font-medium">
                {getTvDetail.vote_average}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Votes:{" "}
              <span className="text-white font-medium">
                {getTvDetail.popularity}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Release Date:{" "}
              <span className="text-white font-medium">
                {getTvDetail.first_air_date}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Genres:{" "}
              {getTvDetail?.origin_country.map((item: any) => (
                <span key={item?.id} className="text-white font-medium mr-1">
                  {item?.name},
                </span>
              ))}
            </p>
           
           
              {/* Button to navigate back to Payment component */}
        <Link href="/#payment">
          <button className="">
            Go to Payment
          </button>
        </Link>
          </div>
        </div>
        
      
        
      
      </div>
      
    </div>
  );
};

export default TvDetails;
