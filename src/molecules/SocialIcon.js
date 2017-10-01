import React from "react";
import styled from "styled-components";

const SocialIcon = ({ anchor, icon }) => {
  return (
    <a href={anchor} rel="noopener noreferrer" target="_blank">
      <Icon className={`fa fa-${icon}`} aria-hidden="true" />
    </a>
  );
};

const Icon = styled.i`
  color: #555;
  margin-right: 15px;
  transition: color 333ms ease-in-out;
  &:hover {
    color: #888;
  }
`;

export default SocialIcon;
