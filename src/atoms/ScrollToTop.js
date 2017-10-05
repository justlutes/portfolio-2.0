import React from "react";
import styled from "styled-components";
import { animateScroll } from "react-scroll";
import logo from "../assets/logo.png";

const ScrollToTop = ({ visible }) => {
  return (
    <Container active={visible} onClick={() => animateScroll.scrollToTop()}>
      <Img src={logo} alt="Logo" />
    </Container>
  );
};

const Container = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  z-index: 1;
  display: ${props => (props.active === true ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  outline: 0;
  padding: 0;
  cursor: pointer;
  background-color: #000;
  border: none;
  border-radius: 0 0 4px 0;
  @media all and (min-width: 50em) {
    width: 65px;
  }
`;

const Img = styled.img`
  opacity: 0.7;
  transition: opacity 333ms ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export default ScrollToTop;
