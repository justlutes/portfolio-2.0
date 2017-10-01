import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import SectionHeader from "../molecules/SectionHeader";

class Portfolio extends React.Component {
  render() {
    return (
      <Element name="portfolio">
        <Wrapper>
          <SectionHeader number="2" top="The" bottom="Portfolio" />
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

export default Portfolio;
