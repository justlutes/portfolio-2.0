import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      section: "welcome"
    };
  }

  currentSection = section => {
    this.setState({ section });
    console.log(section);
  };

  render() {
    return (
      <div>
        <Header currentSection={this.currentSection} />
        <Navigation section={this.state.section} />
        <About currentSection={this.currentSection} />
        <Portfolio currentSection={this.currentSection} />
        <Contact currentSection={this.currentSection} />
        <Footer />
      </div>
    );
  }
}

export default App;
