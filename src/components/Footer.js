import React from "react";
import styled from "styled-components";

class Footer extends React.Component {
  scrollToLink = event => {
    console.log(event.target.name);
  };
  render() {
    return (
      <Wrapper>
        <List>
          <Link name="welcome" onClick={this.scrollToLink}>
            Welcome
          </Link>
          <Link name="about" onClick={this.scrollToLink}>
            About
          </Link>
          <Link name="portfolio" onClick={this.scrollToLink}>
            Portfolio
          </Link>
          <Link name="contact" onClick={this.scrollToLink}>
            Contact
          </Link>
        </List>
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
    );
  }
}

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
`;

const Link = styled.button`
  background: 0 0;
  border: 0;
  cursor: pointer;
  line-height: 1.75;
  outline: 0;
  text-decoration: none;
  color: #444;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  &:hover {
    color: #888;
  }
`;

export default Footer;
