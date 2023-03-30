import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataMovieId } from "../../api/axios";

const DetailPage = () => {
  let { movieId } = useParams();
  console.log("movieId: ", movieId);
  const [movie, setMovie] = useState({});
  console.log("movie", movie);
  useEffect(() => {
    fetchDataMovieId(movieId, setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <section>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
    </section>
  );
};

export default DetailPage;
