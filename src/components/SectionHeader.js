import React from "react";
import styled from "styled-components";

const Sectionheader = ({ number, top, bottom }) => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`padding: 0 5rem;`;

const TitleContainer = styled.div`
  padding-left: 12rem;
  display: flex;
  flex-direction: row;
`;

const SectionTitle = styled.div`
  font-size: 10rem;
  line-height: 0.85;
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
  padding-right: calc(2rem + (2.5 - 2) * (100vw - 32rem)/ (76.8 - 32));
  overflow: hidden;
`;

const SectionNumber = styled.span`
  font-size: 10rem;
  line-height: 1.2;
  color: #444;
  font-weight: 900;
  display: flex;
`;

const NumberPart = styled.span`
  display: inline-block;
  transform: matrix(1, 0, 0, 1, 0, 0);
`;

const NumberLine = styled.span`
  transform: matrix(1, 0, 0, 1, 0, 0);
  height: 1.5rem;
  background-color: #444;
  display: inline-block;
`;

export default Sectionheader;
