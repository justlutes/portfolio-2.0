import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import SectionIntro from "../organisms/SectionIntro";

class Blog extends React.Component {
  constructor(props) {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    let dataURL = "http://blog.dev/wp-json/wp/v2/posts/?per_page=2&_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res });
      })
      .catch(e => console.error(e));
  }
  render() {
    let posts = this.state.posts.map((post, index) => {
      return (
        <PostContainer key={index}>
          <Title>{post.title.rendered}</Title>
          <Topic>{post.acf.topic}</Topic>
          <Content
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </PostContainer>
      );
    });
    return (
      <CustomElement name="blog">
        <Container>
          <SectionIntro
            bottomText="Blog"
            sectionNumber="3"
            tagLine="Where I gather my random thoughts."
            topText="The"
          />
          <FlexRow>{posts}</FlexRow>
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

const PostContainer = styled.div`
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

const Topic = Title.extend`
  font-size: 2.3rem;
  font-weight: 400;
  margin: 0;
  @media all and (min-width: 50em) {
    margin: 0;
    font-size: calc(1rem + (2.6 - 2) * (100vw - 32rem)/ (76.8 - 32));
  }
`;

const Content = styled.div`
  line-height: 1.6;
  margin-top: 2rem;
`;

export default Blog;
