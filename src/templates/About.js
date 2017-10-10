import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import SectionIntro from "../organisms/SectionIntro";
import InnerSection from "../molecules/InnerSection";

const paragraphs = [
  "I'm a creative developer with a passion for all things visual and technical. I build interactive web experiences that bring brands to life and add depth to their stories. I’ve used my design and development skills to create award-winning digital experiences for some of the world's most respected agencies and brands.",
  "My mission is to revolutionize the way brands are experienced by making online interactions meaningful and memorable. I use cutting edge web technology combined with pleasing and purposeful visuals to tell stories and invoke a feeling of connectedness.",
  "I selectively work with brands who are passionate about their vision and ambitious about their impact.",
  "I look forward to sharing my creativity and dedication to quality.",
  "Let’s build something great together."
];

class About extends React.Component {
  render() {
    return (
      <CustomElement name="about">
        <Container>
          <SectionIntro
            bottomText="Kyle Lutes"
            sectionNumber="1"
            tagLine="I stand on the sweet spot where design and code intersect."
            topText="About"
          />
          <InnerSection
            quote={
              "Imagination will often carry us to worlds that never were. But without it we go nowhere."
            }
            author="Carl Sagan"
            contents={paragraphs}
            alt="Kyle Lutes Freelance Developer"
            srcset="https://res.cloudinary.com/kyle-lutes/image/upload/f_auto,e_grayscale,w_350/v1507300835/slopes_a9aywp.jpg 375w, https://res.cloudinary.com/kyle-lutes/image/upload/f_auto,e_grayscale,w_450/v1507300835/slopes_a9aywp.jpg 1280w"
            image="https://res.cloudinary.com/kyle-lutes/image/upload/f_auto,e_grayscale,w_350/v1507300835/slopes_a9aywp.jpg"
          />
        </Container>
      </CustomElement>
    );
  }
}

const CustomElement = styled(Element)`
  background-color: #1c1c1c;
  border-top: 0.1rem solid #333;
  padding-bottom: calc(6rem + (10 - 6) * (100vw - 32rem)/ (76.8 - 32));
  padding-top: calc(6rem + (10 - 6) * (100vw - 32rem)/ (76.8 - 32));
`;

const Container = styled.div`
  padding: 0 2.5rem;
  margin: 0 auto;
  @media all and (min-width: 50em) {
    padding: 0 5rem;
  }
`;

export default About;
