import React from "react";
import styled from "styled-components";

const SocialIcon = ({ anchor, aria, icon }) => {
  return (
    <Anchor
      href={anchor}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={aria}
    >
      <Icon className={`fa fa-${icon}`} aria-hidden="true" />
    </Anchor>
  );
};

const Icon = styled.i`
  color: #555;
  transition: color 333ms ease-in-out;
  &:hover {
    color: #888;
  }
`;

const Anchor = styled.a`margin-right: 25px;`;

export default SocialIcon;
