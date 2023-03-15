import styled from "styled-components";
export const HeaderBanner = styled.header`
  background-image: url(${(props) => props.movie});
  background-position: top center;
  background-size: cover;
`;

export const BannerContents = styled.div`
  margin-left: 40px;
  padding-top: 140px;
  height: 190px;
  @media (max-width: 768px) {
    width: min-content !important;
    padding-left: 2.3rem;
    margin-left: 0px !important;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.5rem;
`;

export const BannerButtons = styled.div`
  display: flex;
`;

export const BannerButton = styled.button`
  display: flex;

  justify-content: start;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.4rem 1rem;
  margin-right: 1rem;
  background-color: ${(props) => (props.play ? "white" : "")};
  color: ${(props) => (props.play ? "black" : "")};
  &:hover {
    color: #000;
    background-color: rgba(170, 170, 170, 0.9);
    transition: all 0.2s;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem !important;
    border-radius: 4px !important;
  }
`;

export const BannerDescription = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  max-width: 400px;
  height: 80px;
  @media (max-width: 768px) {
    font-size: 0.8rem !important;
    width: auto !important;
  }
`;
export const BannerFadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
  @media (min-width: 1500px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40rem;
  }
`;
