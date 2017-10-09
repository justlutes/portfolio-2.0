import React from "react";
import styled from "styled-components";
import { animateScroll } from "react-scroll";

import Logo from "./Logo";

const ScrollToTop = ({ visible }) => {
  return (
    <Container active={visible} onClick={() => animateScroll.scrollToTop()}>
      <Logo fill="bbb" height="30" width="35" />
    </Container>
  );
};

const Container = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  padding: 0;
  cursor: pointer;
  background-color: #000;
  border: none;
  border-radius: 0 0 4px 0;
  transform: ${props =>
    props.active === true ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 666ms ease-in-out;
  @media all and (min-width: 50em) {
    width: 65px;
    transform: ${props =>
      props.active === true ? "translateX(0)" : "translateX(-100%)"};
  }
`;

export default ScrollToTop;
