import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import SocialIcon from "../molecules/SocialIcon";
import Logo from "../atoms/Logo";

const Header = ({ currentSection }) => {
  return (
    <Element name="welcome">
      <Wrapper>
        <LogoWrapper>
          <Logo fill="444" height="75" width="88" />
        </LogoWrapper>
        <SubHeader>Freelance</SubHeader>
        <Title>Full Stack</Title>
        <Title>Developer</Title>
        <SubTitle>Design X Technology</SubTitle>
        <IconWrapper>
          <SocialIcon
            anchor="https://github.com/klutes90"
            icon="github"
            aria="Check My Github"
          />
          <SocialIcon
            anchor="https://www.linkedin.com/in/kylelutes"
            icon="linkedin"
            aria="Add Me On LinkedIn"
          />
          <SocialIcon
            anchor="https://www.facebook.com/KyleLutesFreelance/"
            icon="facebook"
            aria="Add Me On Facebook"
          />
          <SocialIcon
            anchor="https://twitter.com/KyleLutes2"
            icon="twitter"
            aria="Follow Me On Twitter"
          />
          <SocialIcon
            anchor="mailto:kyle@kyle-lutes.com"
            icon="paper-plane"
            aria="Email Me"
          />
        </IconWrapper>
      </Wrapper>
    </Element>
  );
};

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4.5rem;
  margin-top: 1.5rem;
  font-size: 20px;
  @media all and (min-width: 50em) {
    padding-left: 12rem;
    font-size: 30px;
  }
`;

const Title = styled.p`
  font-weight: 900;
  color: #888;
  font-size: 12rem;
  text-transform: uppercase;
  padding-left: 3.5rem;
  margin: 0;
  line-height: 1;
  @media all and (min-width: 50em) {
    padding-left: 12rem;
  }
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
  margin: 15px 0;
  padding-left: 3.5rem;
  @media all and (min-width: 50em) {
    margin: 25px 0;
    padding-left: 12rem;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 101vh;
  width: 100%;
`;

export default Header;
