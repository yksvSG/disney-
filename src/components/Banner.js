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
  Iframe,
  HomeContainer,
  Container,
} from "./Banner.styled";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setClicked] = useState(false);
  useEffect(() => {
    fetchData(setMovie);
  }, []);

  // Description 컴포넌트 내
  // 설명글이 100자 이상이면, 100자 이전 까지 자른 후, 100자부터 "..."로 마무리한다.
  const truncatOverview = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };

  const playHandle = (e) => setClicked(true);

  if (isClicked) {
    console.log(isClicked);
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setClicked(false)}>X</button>
      </>
    );
  }

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
            <BannerButton play onClick={playHandle}>
              Play
            </BannerButton>
          )}
        </BannerButtons>
        <BannerDescription>
          {truncatOverview(movie?.overview, 100)}
        </BannerDescription>
      </BannerContents>
      <BannerFadeBottom />
    </HeaderBanner>
  );
};

export default Banner;
