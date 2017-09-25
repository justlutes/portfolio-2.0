import React from "react";
import styled from "styled-components";

class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <TitleContainer>
            <NumberContainer>
              <SectionNumber>
                <NumberPart>0</NumberPart>
                <NumberPart>1</NumberPart>
                <NumberPart>.</NumberPart>
              </SectionNumber>
              <NumberLine />
            </NumberContainer>
            <SectionTitle>
              <Title>About</Title>
              <Title>Kyle Lutes</Title>
            </SectionTitle>
          </TitleContainer>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  background-color: #1c1c1c;
  border-top: 0.1rem solid #333;
  padding-bottom: calc(10rem + (15 - 10) * (100vw - 76.8rem)/ (110 - 76.8));
  padding-top: calc(10rem + (15 - 10) * (100vw - 76.8rem)/ (110 - 76.8));
`;

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
  display: block;
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

export default About;
