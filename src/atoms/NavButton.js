import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavButton = ({
  anchor,
  number,
  handleActive,
  handleInactive,
  section
}) => {
  if (anchor === "welcome") {
    return (
      <Item>
        <Button
          spy={true}
          smooth={true}
          to={anchor}
          duration={500}
          onSetActive={() => handleActive(anchor)}
          onSetInactive={() => handleInactive()}
        >
          <Number active={section === anchor ? true : false}>{number}</Number>
          <Name>{anchor}</Name>
        </Button>
      </Item>
    );
  }
  return (
    <Item>
      <Button
        spy={true}
        smooth={true}
        to={anchor}
        duration={500}
        onSetActive={() => handleActive(anchor)}
      >
        <Number active={section === anchor ? true : false}>{number}</Number>
        <Name>{anchor}</Name>
      </Button>
    </Item>
  );
};

const Item = styled.li`transform: matrix(1, 0, 0, 1, 0, 0);`;

const Button = styled(Link)`
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

export default NavButton;
