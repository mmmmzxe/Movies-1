import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import MovieContainer from "./MovieContainer";

const Movie = async () => {
  const nowPlayingMovies = await getNowPlayingMovies();

  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <div className="flex flex-col justify-center max-w-full  px-10">
      <MovieContainer movies={nowPlayingMovies} title="Now Playing" />
      <MovieContainer movies={topRatedMovies} title="Top Rated" />
      <MovieContainer movies={popularMovies} title="Popular" />
    </div>
  );
};

export default Movie;
