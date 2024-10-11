import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import MovieContainer from "./MovieContainer";

const Movieun = async () => {

const upcomingMovies = await getUpcomingMovies();


  return (
    <div className="flex flex-col justify-center max-w-full px-4 sm:px-8 md:px-16 lg:px-20">
      <MovieContainer movies={upcomingMovies} title="Upcoming" />
  
    </div>
  );
};

export default Movieun;
