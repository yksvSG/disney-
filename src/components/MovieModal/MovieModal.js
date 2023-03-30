import React, { useRef } from "react";
import useOnclickOutside from "../../hooks/useOnclickOutside";
import { ModalContent, ModalWrapper, Presentation } from "./MovieModal.styled";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  // DOM selector
  const ref = useRef();

  useOnclickOutside(ref, () => {
    setModalOpen(false);
  });

  return (
    <Presentation role="presentation">
      <ModalWrapper>
        {/* .modal을 ref 의 범위로 지정 */}
        <div className="modal" ref={ref}>
          <span className="modal__close" onClick={() => setModalOpen(false)}>
            X
          </span>

          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal-img"
          />

          <ModalContent>
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>{" "}
              {/* 개봉일자 혹은 첫 상영일자 */}
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">평점: {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </ModalContent>
        </div>
      </ModalWrapper>
    </Presentation>
  );
};

export default MovieModal;
