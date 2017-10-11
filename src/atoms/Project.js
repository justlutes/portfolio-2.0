import React from "react";
import styled from "styled-components";

import { imageObject } from "../config";

const Project = ({ language, name, url }) => {
  return (
    <Button onClick={() => window.open(url, "_blank")}>
      <Image src={imageObject[language]} />
      <Name>{name}</Name>
      <Language>{language}</Language>
    </Button>
  );
};

const Image = styled.img`
  opacity: 0.5;
  width: 75%;
`;

const Name = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
  color: #bbb;
  white-space: nowrap;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Language = Name.extend`
  font-weight: 400;
  color: #444;
  font-size: 1rem;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 0;
  background: 0 0;
  border: 0;
  cursor: pointer;
  line-height: 1.75;
  padding: 1rem;
  pointer-events: auto;
  background-color: #212121;
  overflow: hidden;
  position: relative;
  transition: background-color 444ms, opacity 444ms;
  @media all and (max-width: 50em) {
    max-width: 130px;
  }
  @media all and (min-width: 50em) {
    padding: 1.5rem;
  }
  &:hover {
    background-color: #111;
    color: #aaa;
  }
  &:nth-child(even) {
    background-color: #282828;
    &:hover {
      background-color: #111;
      color: #aaa;
    }
  }
`;

export default Project;
