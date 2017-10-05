import React from "react";
import styled from "styled-components";

const ContactButton = ({ anchor }) => {
  return (
    <Button href={`mailto:${anchor}?subject=Let%27s Work`}>
      <Text>Contact Me</Text>
      <LineRight />
      <LineTop />
      <LineLeft />
      <LineBot />
    </Button>
  );
};

const Button = styled.a`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  transform: translate3d(-11%, -20%, 0);
  padding: 0.7em calc(0.7em * 1.2);
  display: inline-block;
  font-size: 1.6rem;
  letter-spacing: 0.07em;
  &:hover {
    &::after {
      transform: scale3d(0, 1, 1);
      right: -3px;
      left: -3px;
      transform-origin: right;
      transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s,
        right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
    }
  }
  &::after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: calc(0.7em * 1.2);
    right: calc(0.7em * 1.2);
    height: 3px;
    background: #bbb;
    z-index: -1;
    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s,
      right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s,
      left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
    transform-origin: left;
  }
  @media all and (min-width: 50em) {
    font-size: 1.8rem;
  }
`;

const Text = styled.span`
  transform: translate3d(0, 0.7em, 0);
  display: block;
  color: #888;
  font-weight: 700;
  text-transform: uppercase;
  transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s,
    color 0.4s cubic-bezier(0.2, 0, 0, 1);
  ${Button}:hover & {
    color: #bbb;
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    &::after {
      transform: scale3d(0, 1, 1);
      right: -$thick;
      left: -$thick;
      transform-origin: right;
      transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s,
        right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
    }
  }
`;

const Line = styled.span`
  position: absolute;
  background: #bbb;
  ${Button}:hover & {
    transform: scale3d(1, 1, 1);
  }
`;

const LineRight = Line.extend`
  width: 3px;
  bottom: -3px;
  top: -3px;
  right: -3px;
  transform: scale3d(1, 0, 1);
  transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
  transform-origin: top;
  ${Button}:hover & {
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
    transform-origin: bottom;
  }
`;

const LineLeft = Line.extend`
  width: 3px;
  bottom: -3px;
  top: -3px;
  left: -3px;
  transform: scale3d(1, 0, 1);
  transition: transform 0.08s linear 0.51s;
  transform-origin: bottom;
  ${Button}:hover & {
    transition: transform 0.08s linear 0.48s;
    transform-origin: top;
  }
`;

const LineTop = Line.extend`
  height: 3px;
  left: -3px;
  right: -3px;
  top: -3px;
  transform: scale3d(0, 1, 1);
  transition: transform 0.08s linear 0.43s;
  transform-origin: left;
  ${Button}:hover & {
    transition: transform 0.08s linear 0.4s;
    transform-origin: right;
  }
`;

const LineBot = Line.extend`
  height: 3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  transform: scale3d(0, 1, 1);
  transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
  transform-origin: right;
  ${Button}:hover & {
    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
    transform-origin: left;
  }
`;

export default ContactButton;
