import styled from "styled-components";
import { Pagination } from "swiper";

// export const Slider = styled.div`
//   position: relative;

//   h2 {
//     height: 33px;
//   }
//   .slider__arrow-left,
//   .slider__arrow-right {
//     background-clip: content-box;
//     padding: 20px 0;
//     box-sizing: border-box;
//     transform: 400ms all ease-in-out;
//     cursor: pointer;
//     width: 80px;
//     z-index: 1000;
//     position: absolute;
//     top: 0;
//     height: calc(100% + 33px);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     visibility: hidden;
//   }

//   .slider__arrow-left {
//     left: 0;
//   }
//   .slider__arrow-right {
//     right: 0;
//   }

//   .arrow {
//     transition: 400ms all ease-in-out;
//   }

//   .arrow:hover {
//     transition: 400ms all ease-in-out;
//     transform: scale(1.5);
//   }

//   &:hover .slider__arrow-left,
//   &:hover .slider__arrow-right {
//     transition: 400ms all ease-in-out;
//     visibility: visible;
//   }

//   .slider__arrow-left:hover,
//   .slider__arrow-right:hover {
//     background-image: rgba(20, 20, 20, 0.5);
//     transition: 400ms all ease-in-out;
//   }
// `;

// export const RowPosters = styled.div`
//   display: flex;
//   overflow-y: hidden;
//   /* overflow-x: scroll; */
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   padding: 20px 0 20px 20px;
//   scroll-behavior: smooth;

//   .row__poster {
//     object-fit: contain; /* 오브젝트 비율 유지, 정의된 공간의 최대 확대 */
//     width: 100%;
//     max-height: 144px;
//     margin-right: 10px; /* poster 우측으로 10px 짤림 해결 */
//     transform: transform 450ms;
//     border-radius: 4px;
//   }

//   .row__poster:hover {
//     transform: scale(1.08);
//   }

//   @media (min-width: 1200px) {
//     .row__poster {
//       max-height: 160px;
//     }
//   }

//   @media (max-width: 768px) {
//     .row__poster {
//       max-height: 280px;
//     }
//   }
// `;

export const Container = styled.div`
  padding: 0 0 26px;
  .swiper-pagination {
    text-align: right !important;
  }

  .swiper-pagination-bullet {
    background: gray !important;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet-active {
    background-color: white !important;
  }
  .swiper-button-prev {
    color: white !important;
  }
  .swiper-button-next {
    color: white !important;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1.3rem !important;
    font-weight: 600 !important;
  }
`;

export const Content = styled.div``;

export const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    object-fit: cover;
    height: 100%;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0/80%) 0px 40px 58px -16px rgb(0 0 0 / 72%) 0px 30px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
