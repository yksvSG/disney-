import React, { useEffect, useState } from "react";
import { fetchData } from "../api/axios";
import {
  HeaderBanner,
  BannerContents,
  BannerTitle,
  BannerButtons,
  BannerButton,
  BannerDescription,
  BannerFadeBottom,
} from "./Banner.styled";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData(setMovie);
  }, []);

  return (
    <HeaderBanner
      movie={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    >
      <BannerContents>
        <BannerTitle>
          {movie.title || movie.name || movie.original_name}
        </BannerTitle>
        <BannerButtons>
          {movie?.videos?.results[0]?.key && (
            <BannerButton play>Play</BannerButton>
          )}
        </BannerButtons>
        <BannerDescription>{movie.overview}</BannerDescription>
      </BannerContents>
      <BannerFadeBottom />
    </HeaderBanner>
  );
};

export default Banner;
