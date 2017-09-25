import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
