import React, { useEffect, useState } from "react";
import { Logo, NavWrapper } from "./Nav.styled";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      /* Nav 컴포넌트를 사용하지 않을 시, 불필요한 이벤트를 제거해줌 */
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
    </NavWrapper>
  );
};

export default Nav;
