import { Container, GlobalStyle } from "./App.styled.js";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav />
      </Container>
    </>
  );
}

export default App;
