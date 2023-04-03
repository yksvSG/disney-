import React from "react";
import {
  BgImage,
  Center,
  Container,
  Content,
  Description,
  LogoOne,
  LogoTwo,
  SignUpLink,
} from "./LoginPage.style";

const LoginPage = () => {
  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src="/images/cta-logo-one.svg" alt="logo-one" />
          <SignUpLink>지금 가입하기</SignUpLink>
          <Description>
            영화에 대한 프리미어 액세스를 얻으십시오. 디즈니 플러스 가격은 다음
            주부터 1000원 인상됩니다.
          </Description>
          <LogoTwo src="/images/cta-logo-two.png" alt="logo-two" />
        </Center>
        <BgImage />
      </Content>
    </Container>
  );
};

export default LoginPage;
