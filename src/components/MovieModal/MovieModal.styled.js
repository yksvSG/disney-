import styled from "styled-components";

export const Presentation = styled.div`
  z-index: 1200;
  position: absolute;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(0, 0, 0 / 71%);
  display: flex;
  justify-content: center;

  .modal {
    position: relative;
    max-width: 800px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    background: #111;
    overflow: hidden;
    border-radius: 8px;
    transition: all 400ms ease-in-out;
    animation: fadeIn 400ms;

    .modal__close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      z-index: 1000;
      color: white;
    }
    .modal__poster-img {
      width: 100%;
      height: auto;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.5);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  @media (max-height: 768px) {
    align-items: unset;
    padding-top: 2rem;
    .modal {
      overflow-y: scroll;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    .modal {
      overflow-y: scroll !important;
    }
  }
`;

export const ModalClose = styled.span``;

export const ModalContent = styled.div`
  padding: 40px;
  color: white;

  .modal__details {
    font-weight: 600;
    font-size: 18px;
  }
  .modal__title {
    padding: 0px;
    font-size: 40px;
    margin: 16px 0;
  }
  .modal__overview {
    font-size: 20px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .modal__overview {
      padding: 0px;
    }
    .modal__details {
      font-size: 16px;
    }
  }
`;
