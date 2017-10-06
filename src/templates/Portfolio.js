import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import SectionIntro from "../organisms/SectionIntro";
import PortfolioList from "../organisms/PortfolioList";

class Portfolio extends React.Component {
  render() {
    return (
      <CustomElement name="portfolio">
        <Container>
          <SectionIntro
            bottomText="Portfolio"
            sectionNumber="2"
            tagLine="A collection of projects I've had the priviledge to build over the years."
            topText="The"
          />
          <PortfolioList />
        </Container>
      </CustomElement>
    );
  }
}

const CustomElement = styled(Element)`
  background-color: #1c1c1c;
  border-top: 0.1rem solid #333;
  padding-bottom: calc(10rem + (15 - 10) * (100vw - 76.8rem)/ (110 - 76.8));
  padding-top: calc(10rem + (15 - 10) * (100vw - 76.8rem)/ (110 - 76.8));
`;

const Container = styled.div`
  padding: 0 5rem;
  margin: 0 auto;
`;

export default Portfolio;
