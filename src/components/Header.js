import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img src={logo} alt="Logo" />
      </LogoWrapper>
      <SubHeader>Freelance</SubHeader>
      <Title>Full Stack</Title>
      <Title>Developer</Title>
      <SubTitle>Design X Technology</SubTitle>
    </Wrapper>
  );
};

const Title = styled.p`
  font-weight: 900;
  color: #888;
  font-size: 100px;
  text-transform: uppercase;
  padding-left: 100px;
  margin: 0;
  line-height: 1;
`;

const SubTitle = Title.extend`
  font-size: 25px;
  margin-top: 10px;
  font-weight: bold;
  color: #444;
`;

const SubHeader = Title.extend`
  font-weight: bold;
  font-size: 40px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 25px 0;
  padding-left: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export default Header;
