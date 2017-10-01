import React from "react";
import styled from "styled-components";
import FooterLink from "../atoms/FooterLink";
import SocialIcon from "../molecules/SocialIcon";

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <List>
          <FooterLink target="welcome" />
          <FooterLink target="about" />
          <FooterLink target="portfolio" />
          <FooterLink target="contact" />
        </List>
        <IconWrapper>
          <SocialIcon anchor="https://github.com/klutes90" icon="github" />
          <SocialIcon
            anchor="https://www.linkedin.com/in/kylelutes"
            icon="linkedin-square"
          />
          <SocialIcon
            anchor="https://www.facebook.com/KyleLutesFreelance/"
            icon="facebook"
          />
        </IconWrapper>
      </Wrapper>
    );
  }
}

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  border-top: 0.1rem solid #333;
  padding-top: calc(6rem + (10 - 6) * (100vw - 32rem) / (76.8 -32));
  padding-bottom: calc(6rem + (10 - 6) * (100vw - 32rem)/ (76.8 - 32));
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 50%;
  padding: 0;
`;

export default Footer;
