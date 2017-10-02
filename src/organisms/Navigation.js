import React from "react";
import styled from "styled-components";
import { scroller } from "react-scroll";

import NavButton from "../atoms/NavButton";
import ScrollToTop from "../atoms/ScrollToTop";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      section: "welcome",
      showScrollTop: false
    };
  }

  scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 500,
      smooth: true
    });
  };

  handleActive = section => {
    if (section === "welcome") {
      this.setState({ section, showScrollTop: false });
    }
    this.setState({ section });
  };

  handleInactive = () => {
    this.setState({ showScrollTop: true });
  };

  render() {
    return [
      <ScrollToTop key="scroll" visible={this.state.showScrollTop} />,
      <Wrapper key="navigation">
        <NavButton
          anchor="welcome"
          number="00"
          handleActive={this.handleActive}
          handleInactive={this.handleInactive}
          section={this.state.section}
        />
        <NavButton
          anchor="about"
          number="01"
          handleActive={this.handleActive}
          section={this.state.section}
        />
        <NavButton
          anchor="portfolio"
          number="02"
          handleActive={this.handleActive}
          section={this.state.section}
        />
        <NavButton
          anchor="contact"
          number="03"
          handleActive={this.handleActive}
          section={this.state.section}
        />
      </Wrapper>
    ];
  }
}

const Wrapper = styled.ul`
  display: none;
  @media all and (min-width: 50em) {
    display: block;
    position: fixed;
    top: 50vh;
    right: 0;
    list-style: none;
    transform: translateY(-50%);
  }
`;

export default Navigation;
