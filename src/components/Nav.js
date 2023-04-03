import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DropDown,
  Input,
  Login,
  Logo,
  NavWrapper,
  SignOut,
  UserImg,
} from "./Nav.styled";

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Nav = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  // console.log("pathname : ", pathname);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  /*
   initialUserData
   로컬스토리지에 userData KEY가 있다면, userData Value로 초기화 한다.
  */
  const initialUserData = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {};

  const [userData, setUserData] = useState(initialUserData);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("userData", userData);
      if (user) {
        if (pathname === "/") navigate("/main");
      } else {
        navigate("/");
      }
    });
    return () => {};
  }, [auth, navigate, pathname, userData]);

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

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log("signInWithPopup res.user : ", res.user);
        setUserData(res.user);
        localStorage.setItem("userData", JSON.stringify(res.user));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        navigate("/");
      })
      .catch((error) => {
        console.error("로그아웃 에러 발생 : ", error.message);
      });
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
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <Input
            value={searchValue}
            className="nav__input"
            type="text"
            placeholder="검색해주세요"
            onChange={handleChange}
          />

          <SignOut>
            <UserImg src={userData.photoURL} alt="" />
            <DropDown>
              <span onClick={handleSignOut}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </NavWrapper>
  );
};

export default Nav;
