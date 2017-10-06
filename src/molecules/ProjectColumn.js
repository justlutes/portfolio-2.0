import React from "react";
import styled from "styled-components";

import Project from "../atoms/Project";

const ProjectColumn = () => {
  return (
    <Container>
      <Project key="1" />
      <Project key="2" />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  &:nth-child(1) {
    margin-top: 3rem;
    @media all and (min-width: 50em) {
      margin-top: 5rem;
    }
  }
  &:nth-child(2) {
    margin-top: 0;
  }
  &:nth-child(3) {
    margin-top: 5rem;
    @media all and (min-width: 50em) {
      margin-top: 10rem;
    }
  }
  &:nth-child(4) {
    display: none;
    margin-top: 4rem;
    @media all and (min-width: 50em) {
      display: block;
      margin-top: 5rem;
    }
  }
  &:nth-child(5) {
    display: none;
    @media all and (min-width: 50em) {
      display: block;
      margin-top: 15rem;
    }
  }
  &:nth-child(6) {
    display: none;
    @media all and (min-width: 50em) {
      display: block;
    }
  }
`;

export default ProjectColumn;
