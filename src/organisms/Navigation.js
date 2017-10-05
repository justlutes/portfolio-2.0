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
      scrollY: 0,
      currentScrollY: 0,
      showScrollTop: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { scrollY } = this.state;
    scrollY > window.scrollY
      ? this.setState({ showScrollTop: false, scrollY: window.scrollY })
      : this.setState({ showScrollTop: true, scrollY: window.scrollY });
  };

  scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 500,
      smooth: true
    });
  };

  handleActive = section => {
    this.setState({ section });
  };

  render() {
    return [
      <ScrollToTop key="scroll" visible={this.state.showScrollTop} />,
      <Wrapper key="navigation">
        <NavButton
          anchor="welcome"
          number="00"
          handleActive={this.handleActive}
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
