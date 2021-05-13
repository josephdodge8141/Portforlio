import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Section
        content = {About()}
        dark={false}
        id="section1"
      />
      <Section
        content = {Resume()}
        dark={true}
        id="section2"
      />
      <Section
        content = {Portfolio()}
        dark={false}
        id="section3"
      />

    </div>
  );
}

export default App;
