import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

import Project from "../atoms/Project";

const ProjectColumn = ({ projects }) => {
  return (
    <Container>
      {projects.map((project, index) => (
        <Fade
          up
          delay={Math.floor(Math.random() * 1000 + 1)}
          key={project.name}
        >
          <Project
            key={index}
            url={project.url}
            name={project.name}
            language={project.primaryLanguage.name}
          />
        </Fade>
      ))}
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
