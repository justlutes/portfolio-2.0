import React from "react";
import styled from "styled-components";
import FooterLink from "../atoms/FooterLink";
import SocialIcon from "../molecules/SocialIcon";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: 2017
    };
  }
  componentDidMount() {
    const current = new Date();
    this.setState({ date: current.getFullYear() });
  }

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
        <FooterTextContainer>
          <FooterText>
            &copy; {this.state.date} Kyle Lutes All Rights Reserved.
          </FooterText>
          <FooterText>Designed and Developed by Kyle Lutes.</FooterText>
          <FooterText>Orlando, Florida.</FooterText>
        </FooterTextContainer>
      </Wrapper>
    );
  }
}

const FooterText = styled.p`margin: 0;`;

const FooterTextContainer = styled.div`
  font-size: 1.2rem;
  margin-top: 3rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
  @media all and (min-width: 50em) {
    font-size: 1.4rem;
    margin-top: 4rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  @media all and (min-width: 50em) {
    font-size: 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  border-top: 0.1rem solid #333;
  padding-top: calc(6rem + (10 - 6) * (100vw - 32rem) / (76.8 -32));
  padding-bottom: calc(4rem + (10 - 6) * (100vw - 32rem)/ (76.8 - 32));
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 90%;
  padding: 0;
  @media all and (min-width: 50em) {
    width: 50%;
  }
`;

export default Footer;
