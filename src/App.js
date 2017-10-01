import React from "react";
import Header from "./templates/Header";
import About from "./templates/About";
import Portfolio from "./templates/Portfolio";
import Contact from "./templates/Contact";
import Navigation from "./organisms/Navigation";
import Footer from "./organisms/Footer";

class App extends React.Component {
  render() {
    return [
      <Header key={"header"} />,
      <Navigation key={"nav"} />,
      <About key={"about"} />,
      <Portfolio key={"port"} />,
      <Contact key={"contact"} />,
      <Footer key={"footer"} />
    ];
  }
}

export default App;
