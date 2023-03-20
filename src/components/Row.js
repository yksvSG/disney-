import React, { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "../api/axios";
import requests from "../api/requests";
const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const fecthMovieData = useCallback(async () => {
    const axiosReq = await axiosInstance.get(fetchUrl);
    console.log("axiosReq", axiosReq);
    setMovies(axiosReq.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fecthMovieData();
  }, []);

  return <div>Row</div>;
};

export default Row;
