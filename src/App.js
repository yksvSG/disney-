import { Container, GlobalStyle } from "./App.styled.js";
import Banner from "./components/Banner.js";
import Nav from "./components/Nav";
import Category from "./components/Category";
import Row from "./components/Row";
import requests from "./api/requests";
function App() {
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
}

export default App;
