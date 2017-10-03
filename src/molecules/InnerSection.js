import React from "react";
import styled from "styled-components";

const InnerSection = ({ author, quote, contents }) => {
  return (
    <Container>
      <LeftColumn>
        <Paragraph>
          <Bold>{quote}</Bold>
          <Author>- {author}</Author>
        </Paragraph>
        {contents.map(content => (
          <Paragraph key={content}>{content}</Paragraph>
        ))}
      </LeftColumn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: calc(6rem + (8 - 6) * (100vw - 76.8rem)/ (110 - 76.8));
  @media all and (min-width: 50em) {
    margin-top: 8rem;
  }
`;

const LeftColumn = styled.div`
  order: 2;
  width: 100%;
  @media all and (min-width: 50em) {
    order: 1;
    width: 45%;
  }
`;

const Paragraph = styled.p`
  margin-top: 0;
  line-height: 1.75;
  display: flex;
  flex-direction: column;
`;

const Bold = styled.span`font-weight: 700;`;

const Author = styled.span`
  font-size: 1.6rem;
  text-transform: uppercase;
`;

export default InnerSection;
