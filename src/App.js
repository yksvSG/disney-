import { Container, GlobalStyle } from "./App.styled.js";
import Banner from "./components/Banner.js";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav />
        <Banner />
      </Container>
    </>
  );
}

export default App;
