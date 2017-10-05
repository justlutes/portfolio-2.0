import React from "react";
import styled from "styled-components";

import ContactButton from "../atoms/ContactButton";

const ContactBox = ({ anchor, content, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <ButtonContainer>
        <ContactButton anchor={anchor} />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  margin-top: 2rem;
  padding-left: 9rem;
  position: relative;
  width: 60%;
  @media all and (min-width: 50em) {
    padding-left: 11rem;
    width: 46%;
    margin-top: 0;
  }
`;

const Title = styled.h3`
  margin: 0;
  margin-top: 0;
  font-size: 2.8rem;
  @media all and (min-width: 50em) {
    margin-top: 2.5rem;
    font-size: calc(2rem + (2.6 - 2) * (100vw - 32rem)/ (76.8 - 32));
  }
`;

const Content = styled.div`
  line-height: 1.6;
  margin-top: 2rem;
`;

const ButtonContainer = styled.div`
  margin-top: 3rem;
  @media all and (min-width: 50em) {
    margin-top: 2rem;
  }
`;

export default ContactBox;
