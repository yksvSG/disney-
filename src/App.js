import Nav from "./components/Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import { GlobalStyle } from "./App.styled";

const Layout = () => {
  return (
    <>
      <Nav />

      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
