import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import SectionIntro from "../organisms/SectionIntro";
import ContactBox from "../molecules/ContactBox";

class Contact extends React.Component {
  render() {
    return (
      <CustomElement name="contact">
        <Container>
          <SectionIntro
            bottomText="Me"
            sectionNumber="3"
            tagLine="I am currently available for select opportunities. Here's how I can assist:"
            topText="Contact"
          />
          <FlexRow>
            <ContactBox
              anchor="kyle@kyle-lutes.com"
              content="Need someone to bring your idea to life? Let me make your ideas a reality either through a web application or mobile application."
              title="Application Development"
            />
            <ContactBox
              anchor="kyle@kyle-lutes.com"
              content="Whether a static website or CMS integration, I specialize in creating great user experiences that bring your brand to life."
              title="Web Development"
            />
          </FlexRow>
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

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: calc(4rem + (6 - 4) * (100vw - 32rem)/ (76.8 - 32));
  @media all and (min-width: 50em) {
    margin-top: 8rem;
    flex-wrap: nowrap;
  }
`;

export default Contact;
