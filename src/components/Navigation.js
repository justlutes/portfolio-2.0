import React from "react";
import styled from "styled-components";
import { animateScroll, scroller } from "react-scroll";

class Navigation extends React.Component {
  scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 500,
      smooth: true
    });
  };
  render() {
    return (
      <Wrapper>
        <Item>
          <Button onClick={() => animateScroll.scrollToTop()}>
            <Number active={this.props.section === "welcome" ? true : false}>
              00
            </Number>
            <Name>Welcome</Name>
          </Button>
        </Item>
        <Item>
          <Button onClick={() => this.scrollToElement("aboutSection")}>
            <Number active={this.props.section === "about" ? true : false}>
              01
            </Number>
            <Name>About</Name>
          </Button>
        </Item>
        <Item>
          <Button onClick={() => this.scrollToElement("portfolioSection")}>
            <Number active={this.props.section === "portfolio" ? true : false}>
              02
            </Number>
            <Name>Portfolio</Name>
          </Button>
        </Item>
        <Item>
          <Button onClick={() => this.scrollToElement("contactSection")}>
            <Number active={this.props.section === "contact" ? true : false}>
              03
            </Number>
            <Name>Contact</Name>
          </Button>
        </Item>
      </Wrapper>
    );
  }
}

const Wrapper = styled.ul`
  display: block;
  position: fixed;
  top: 50vh;
  right: 0;
  list-style: none;
  transform: translateY(-50%);
`;

const Item = styled.li`transform: matrix(1, 0, 0, 1, 0, 0);`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  transform: translateX(12.5rem);
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  width: 16rem;
  background: 0 0;
  border: 0;
  cursor: pointer;
  line-height: 1.75;
  outline: 0;
  &:hover {
    transform: translateX(0);
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

const Number = styled.span`
  color: ${props => (props.active === true ? "#888" : "#555")};
  transtion: color 444ms;
  font-size: 1.4rem;
  height: 3rem;
  font-weight: 700;
  position: relative;
  text-align: center;
  width: 3rem;
  &::after {
    border-bottom: 0.4rem solid
      ${props => (props.active === true ? "#888" : "#444")};
    bottom: -0.1rem;
    content: "";
    left: 0;
    position: absolute;
    transition: border-color 444ms;
    width: 100%;
  }
  ${Button}:hover & {
    color: #888;
    &::after {
      border-color: #888;
    }
  }
`;

const Name = styled.span`
  color: #555;
  flex: 1;
  font-size: 1.2rem;
  font-weight: 700;
  height: 3rem;
  overflow: hidden;
  padding: 0.3rem 2rem 0;
  position: relative;
  text-transform: uppercase;
  transition: color 444ms;
  ${Button}:hover & {
    color: #888;
  }
  &::after {
    border-bottom: 0.1rem solid #444;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

export default Navigation;
