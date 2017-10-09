import React from "react";
import styled from "styled-components";

import ProjectColumn from "../molecules/ProjectColumn";

class PortfolioList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      groups: []
    };
  }
  componentDidMount() {
    let groups = this.props.repos
      .map((val, index) => {
        return index % 2 === 0
          ? this.props.repos.slice(index, index + 2)
          : null;
      })
      .filter(item => item);
    this.setState({ groups });
  }
  render() {
    return (
      <Container>
        {this.state.groups.map((group, index) => (
          <ProjectColumn key={index} projects={group} />
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  margin-left: -2.5rem;
  margin-right: -2.5rem;
  margin-top: calc(4rem + (6 - 4) * (100vw - 32rem)/ (76.8 - 32));
  display: flex;
  @media all and (min-width: 50em) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 8rem;
  }
`;

export default PortfolioList;
