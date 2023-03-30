import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchSearchMovie } from "../../api/axios";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchContent, SearchContainer, NoResults } from "./SearchPage.styled";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  // url param을 얻기 위한 커스텀 훅
  const useQuery = () => {
    // searchParam 인스턴스 리턴
    return new URLSearchParams(useLocation().search);
  };

  // searchParam 인스턴스 생성
  const query = useQuery();

  // searchTerm 가져오기 -> 가져온 searchTerm을 API와 연결
  const searchTerm = query.get("q");
  console.log("searchTerm : ", searchTerm);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  console.log("debouncedSearchTerm", debouncedSearchTerm);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm, setSearchResults);
      //   console.log("searchResults :", searchResults);
    }
  }, [debouncedSearchTerm]);

  if (searchResults.length > 0) {
    return (
      <SearchContainer>
        <SearchContent>
          {searchResults.map((movie) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImgUrl =
                "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className="movie" key={movie.id}>
                  <div
                    className="movie__column-poster"
                    onClick={() => navigate(`/${movie.id}`)}
                  >
                    <img
                      className="movie__poster"
                      src={movieImgUrl}
                      alt="movie_poster"
                    />
                  </div>
                </div>
              );
            }
          })}
        </SearchContent>
      </SearchContainer>
    );
  } else {
    return (
      <SearchContainer>
        <NoResults>
          <div>
            <p>찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.</p>
          </div>
        </NoResults>
      </SearchContainer>
    );
  }
};

export default SearchPage;
