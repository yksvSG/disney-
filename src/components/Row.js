import React, { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "../api/axios";
import MovieModal from "./MovieModal/MovieModal";
import { RowPosters, Slider } from "./Row.styled";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const fecthMovieData = useCallback(async () => {
    const axiosReq = await axiosInstance.get(fetchUrl);
    console.log("axiosReq", axiosReq);
    setMovies(axiosReq.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fecthMovieData();
  }, [fecthMovieData]);

  console.log("modalOpen :", modalOpen);
  // 클릭시 모달 오픈
  const ModalhadleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
    console.log("handledMovie", movie);
  };
  console.log("movieSelected", movieSelected);
  return (
    <Slider>
      <h2>{title}</h2>
      <div className="slider__arrow-left">
        <span
          className="arrow"
          onClick={() =>
            (document.getElementById(id).scrollLeft -= window.innerWidth - 80)
          }
        >
          {"<"}
        </span>
      </div>
      <RowPosters id={id}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => ModalhadleClick(movie)}
          />
        ))}
      </RowPosters>
      <div className="slider__arrow-right">
        <span
          className="arrow"
          onClick={() =>
            (document.getElementById(id).scrollLeft += window.innerWidth + 80)
          }
        >
          {">"}
        </span>
      </div>

      {modalOpen && (
        <MovieModal setModalOpen={setModalOpen} {...movieSelected} />
      )}
    </Slider>
  );
};

export default Row;
