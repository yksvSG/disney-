import styled from "styled-components";
export const NavWrapper = styled.nav`
  position: fixed;
  z-index: 3;
  top: 0; /* top,left,right => Nav Component 위치 지정  */
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${(props) => (props.show ? "#090b13" : "transparent")};
  display: flex; /* flex item 고유 width 만큼 가로로 배치 */
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
`;

export const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block; /* 이웃한 flex item과 한 줄에 위치 + width,height 사용 */

  img {
    display: block;
    width: 100%; /* img와 Logo 컴포넌트 크기 일치 */
  }
`;
