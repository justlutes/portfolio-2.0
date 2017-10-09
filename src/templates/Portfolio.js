import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { graphql, gql } from "react-apollo";

import SectionIntro from "../organisms/SectionIntro";
import PortfolioList from "../organisms/PortfolioList";

class Portfolio extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <div />;
    }

    return (
      <CustomElement name="portfolio">
        <Container>
          <SectionIntro
            bottomText="Portfolio"
            sectionNumber="2"
            tagLine="A collection of projects I've had the priviledge to build over the years."
            topText="The"
          />
          <PortfolioList repos={this.props.data.user.repositories.nodes} />
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

const repositoryQuery = gql`
  query repositoryQuery($login: String!) {
    user(login: $login) {
      repositories(
        first: 12
        privacy: PUBLIC
        orderBy: { direction: DESC, field: UPDATED_AT }
      ) {
        nodes {
          name
          description
          primaryLanguage {
            name
          }
          url
        }
      }
    }
  }
`;

export default graphql(repositoryQuery, {
  options: props => {
    return { variables: { login: props.user } };
  }
})(Portfolio);
