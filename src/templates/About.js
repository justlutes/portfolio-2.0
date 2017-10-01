import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import SectionHeader from "../molecules/SectionHeader";
import SectionTagLine from "../atoms/SectionTagLine";

class About extends React.Component {
  render() {
    return (
      <Element name="about">
        <Wrapper>
          <SectionHeader number="1" top="About" bottom="Kyle Lutes" />
          <SectionTagLine text="Testing some filler test here" />
        </Wrapper>
      </Element>
    );
  }
}

const Wrapper = styled.section`
  background-color: #1c1c1c;
  border-top: 0.1rem solid #333;
  padding-bottom: calc(10rem + (15 - 10) * (100vw - 76.8rem)/ (110 - 76.8));
  padding-top: calc(10rem + (15 - 10) * (100vw - 76.8rem)/ (110 - 76.8));
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

export default About;
