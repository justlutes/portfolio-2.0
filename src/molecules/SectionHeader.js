import React from "react";
import styled from "styled-components";

const Sectionheader = ({ number, top, bottom }) => {
  return (
    <TitleContainer>
      <NumberContainer>
        <SectionNumber>
          <NumberPart>0</NumberPart>
          <NumberPart>{number}</NumberPart>
          <NumberPart>.</NumberPart>
        </SectionNumber>
        <NumberLine />
      </NumberContainer>
      <SectionTitle>
        <Title>{top}</Title>
        <Title>{bottom}</Title>
      </SectionTitle>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  padding-left: 0;
  display: flex;
  flex-direction: row;
  @media all and (min-width: 50em) {
    padding-left: 12rem;
  }
`;

const SectionTitle = styled.div`
  font-size: calc(3.4rem + (6 - 3.4) * (100vw - 32rem)/ (76.8 - 32));
  line-height: 0.9;
  color: #888;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

const Title = styled.span`
  display: inline-block;
  transform: matrix(1, 0, 0, 1, 0, 0);
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
  overflow: hidden;
  @media all and (min-width: 50em) {
    padding-right: calc(2rem + (2.5 - 2) * (100vw - 32rem)/ (76.8 - 32));
  }
`;

const SectionNumber = styled.span`
  font-size: calc(3.2rem + (6 - 3.2) * (100vw - 32rem)/ (76.8 - 32));
  line-height: 1.2;
  color: #444;
  font-weight: 900;
  display: flex;
  @media all and (min-width: 50em) {
    font-size: 10rem;
  }
`;

const NumberPart = styled.span`
  display: inline-block;
  transform: matrix(1, 0, 0, 1, 0, 0);
`;

const NumberLine = styled.span`
  transform: matrix(1, 0, 0, 1, 0, 0);
  height: calc(.5rem + (1 - .5) * (100vw - 32rem)/ (76.8 - 32));;
  background-color: #444;
  display: inline-block;
`;

export default Sectionheader;
