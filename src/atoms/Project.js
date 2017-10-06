import React from "react";
import styled from "styled-components";

const Project = ({ language, name, url }) => {
  return (
    <Button>
      <Image src={`http://identicon.org?t=${name}`} />
    </Button>
  );
};

const Image = styled.img`width: 100%;`;

const Button = styled.button`
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
