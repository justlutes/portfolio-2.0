import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import SectionIntro from "../organisms/SectionIntro";

class Contact extends React.Component {
  render() {
    return (
      <CustomElement name="contact">
        <Container>
          <SectionIntro
            bottomText="Me"
            sectionNumber="3"
            tagLine="Testing some filler text here"
            topText="Contact"
          />
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

export default Contact;
