import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/" /* 중복 URL */,
  params: {
    api_key: "a38fa376de46b95eb6b7c9eff2b1116c",
    language: "ko-KR",
  },
});

export default instance;
