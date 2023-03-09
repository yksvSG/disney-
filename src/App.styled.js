import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #040714;
    color: #f9f9f9;
    font-family: Avenir-Roman, sans-serif;
    margin: 0;
    padding: 0;
  }
  a {
    color: #f9f9f9;
    text-decoration: none;
  }
`;

export const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px; /* Nav height : 70px */
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
