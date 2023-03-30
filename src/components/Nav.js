import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Input, Login, Logo, NavWrapper } from "./Nav.styled";

const Nav = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  // console.log("pathname : ", pathname);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      /* Nav 컴포넌트를 사용하지 않을 시, 불필요한 이벤트를 제거해줌 */
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>

      {pathname === "/" ? (
        <Login>Login</Login>
      ) : (
        <Input
          value={searchValue}
          className="nav__input"
          type="text"
          placeholder="검색해주세요"
          onChange={handleChange}
        />
      )}
    </NavWrapper>
  );
};

export default Nav;
