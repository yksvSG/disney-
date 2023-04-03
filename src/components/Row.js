import React, { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "../api/axios";
import MovieModal from "./MovieModal/MovieModal";
import { Container, Content, Wrap } from "./Row.styled";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

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
    <Container>
      <h2>{title}</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true} // loop 기능 사용 유무
        navigation // arrow 버튼 사용 유무
        pagination={{ clickable: true }} // 페이지 버튼 노출 유무
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {/* 영화 나열 구간 */}
        <Content id={id}>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Wrap>
                <img
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.name}
                  onClick={() => ModalhadleClick(movie)}
                />
              </Wrap>
            </SwiperSlide>
          ))}
        </Content>
      </Swiper>
      {/* 모달 구간 */}
      {modalOpen && (
        <MovieModal setModalOpen={setModalOpen} {...movieSelected} />
      )}
    </Container>
  );
};

export default Row;
