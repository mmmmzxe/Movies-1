'use client'
import React, { useEffect, useState } from 'react';
import { TVSHow } from '../../../type';


const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YThhMDczNjViOTgyM2I1ODE5MWY5YTY1NDUwYjcwNiIsIm5iZiI6MTcyNzI4OTcyOC45OTEzNzQsInN1YiI6IjY2ZDVjZTZhMGY4OGE0NGJmOWNiNzdjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wO3cviHN17OzLdMsPZE0Vx8dJbSKYO7eN6A4WtgVSI8';

const TVShows: React.FC = () => {
  const [shows, setShows] = useState<TVSHow[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://image.tmdb.org${page}`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: API_KEY,
          },
        });
        const data = await response.json();
        setShows(data.results);
      } catch (error) {
        console.error('Error fetching shows:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, [page]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>TV Shows</h1>
      <div className="tv-show-list">
        {shows.map((show) => (
          <div key={show.id} className="tv-show">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
            />
            <h2>{show.name}</h2>
            <p>Rating: {show.vote_average}</p>
            <p>First Aired: {show.first_air_date}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default TVShows;
