import { Container, GlobalStyle } from "./App.styled.js";
import Banner from "./components/Banner.js";
import Nav from "./components/Nav";
import Category from "./components/Category";
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav />
        <Banner />
        <Category />
      </Container>
    </>
  );
}

export default App;
