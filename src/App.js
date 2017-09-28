import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

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
