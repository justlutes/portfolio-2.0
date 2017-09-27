import React from "react";
import styled from "styled-components";
import Waypoint from "react-waypoint";
import logo from "../assets/logo.png";

const Header = ({ currentSection }) => {
  return (
    <Waypoint onEnter={() => currentSection("welcome")}>
      <Wrapper>
        <LogoWrapper>
          <img src={logo} alt="Logo" />
        </LogoWrapper>
        <SubHeader>Freelance</SubHeader>
        <Title>Full Stack</Title>
        <Title>Developer</Title>
        <SubTitle>Design X Technology</SubTitle>
        <IconWrapper>
          <a
            href="https://github.com/klutes90"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="fa fa-github" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/kylelutes"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/KyleLutesFreelance/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="fa fa-facebook" aria-hidden="true" />
          </a>
        </IconWrapper>
      </Wrapper>
    </Waypoint>
  );
};

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12rem;
  margin-top: 1.5rem;
  font-size: 30px;
`;

const Icon = styled.i`
  color: #555;
  margin-right: 15px;
  transition: color 333ms ease-in-out;
  &:hover {
    color: #888;
  }
`;

const Title = styled.p`
  font-weight: 900;
  color: #888;
  font-size: 100px;
  text-transform: uppercase;
  padding-left: 12rem;
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
  padding-left: 9rem;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 101vh;
  width: 100%;
`;

export default Header;
