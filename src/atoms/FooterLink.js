import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const FooterLink = ({ target }) => {
  return (
    <CustomLink smooth={true} to={target} duration={500}>
      {target}
    </CustomLink>
  );
};

const CustomLink = styled(Link)`
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

export default FooterLink;
