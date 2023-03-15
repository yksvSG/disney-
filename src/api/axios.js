import axios from "axios";
import requests from "./requests";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/" /* 중복 URL */,
  params: {
    api_key: "a38fa376de46b95eb6b7c9eff2b1116c",
    language: "ko-KR",
  },
});

export const fetchData = async (setState) => {
  // 현재 상영 중인 영화 정보 가져오기
  const requestMovieData = await axiosInstance.get(requests.fetchNowPlaying);
  // request 확인하기
  console.log("requestMovieData :", requestMovieData);
  const movieId =
    requestMovieData.data.results[
      Math.floor(Math.random() * requestMovieData.data.results.length)
    ].id;
  console.log("movieId :", movieId);

  const { data: movieDetail } = await axiosInstance.get(`movie/${movieId}`, {
    params: { append_to_response: "videos" },
  });
  setState(movieDetail);
};
