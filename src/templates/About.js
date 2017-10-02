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
            tagLine="I Stand on The Sweet Spot where design & code intersect."
            topText="About"
          />
          <InnerSection
            quote={
              "Imagination will often carry us to worlds that never were. But without it we go nowhere."
            }
            author="Carl Sagan"
            contents={paragraphs}
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

export default About;
