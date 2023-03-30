import React from "react";
import requests from "../../api/requests";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import Nav from "../../components/Nav";
import Row from "../../components/Row";
import { Container, GlobalStyle } from "./MainPage.styled";

const MainPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav />
        <Banner />
        <Category />
        <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
        <Row
          title="Action Movies"
          id="AM"
          fetchUrl={requests.fetchActionMovies}
        />
        <Row
          title="Comedy Movies"
          id="CM"
          fetchUrl={requests.fetchComedyMovies}
        />
      </Container>
    </>
  );
};

export default MainPage;
