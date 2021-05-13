import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ModalView from './ModalView';
import '../App.css';

const Portfolio = () => {

  return (
    <div className="about-section" style={{ display: "grid", gridTemplateColumns: "auto auto auto", gridGap: 20 }}>
        <div>
            Crypto
        </div>
        <div>
            Lichess Neural Network
        </div>
        <div>
            Mary and Hyrum
        </div>
        <div>
            Reinforcement Learning Practice
        </div>
        <div>
            konduit
        </div>
        <div>
            Portfolio
        </div>
    </div>
  );
}
export default Portfolio;