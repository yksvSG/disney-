import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: black;
  height: 100vh;
`;
export const SearchContent = styled.section`
  text-align: center;
  width: 100%;
  background-color: black;
  padding: 5rem 0;

  .movie {
    display: inline-block;
    padding-right: 0.5rem;
    padding-bottom: 7rem;
  }
  .movie__column-poster {
    cursor: pointer;
    transition: transform 0.3s;
    -webkit-transition: transform 0.3s;
  }

  .movie__column-poster:hover {
    transform: scale(1.25);
  }

  .movie__poster {
    border-radius: 5px;
    width: 90%;
  }
`;

export const NoResults = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c5c5c5;

  padding: 8rem;
`;
