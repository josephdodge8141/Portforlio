import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ModalView from './ModalView';

const Portfolio = () => {

    return (
      <div style={{ padding: '0 0 50px 0' }}>
            <ScrollAnimation animateIn='fadeInUp'>
                <h1>Projects:</h1>
                <p>These are personal projects that I have or am currently working on using various languages including JavaScript, PHP, and Python. I am also utilizing several libraries/frameworks including React.js, Keras and Tensorflow.</p>
                <br />
            </ScrollAnimation>
            <div style={{ display: "grid", gridTemplateColumns: "29% 6.5% 29% 6.5% 29%" }}>
                <ModalView 
                    contentId={3}
                    title='Crypto'
                />
                <div></div>
                <ModalView 
                    contentId={4}
                    title='Lichess Neural Network'
                />
                <div></div>
                <ModalView 
                    contentId={5}
                    title='Mary and Hyrum'
                />
                <ModalView 
                    contentId={6}
                    title='Reinforcement Learning Practice'
                />
                <div></div>
                <ModalView 
                    contentId={7}
                    title='konduit'
                />
                <div></div>
                <ModalView 
                    contentId={8}
                    title='Portfolio'
                />
            </div>
            <ScrollAnimation animateIn='fadeInUp'>
                <h2>
                    In Progress:
                </h2>
                <p>Ideas that will eventually make their way to github</p>
                <ul>
                    <li>A social media platform that is centered around finance. You can follow any exchange or crypto-currency and have any updates be dynamically populated into your feed. As well as comments and discussion boards to enhance conversation about trends. Finally, it will have a "what if" section to see how well you could perform against the world.</li>
                    <br />
                    <li>A webpage that makes creating and storing an opening repertoire easy and intuitive. It will have the ability to reference a massive database of master level games as well as keep track of how well you are learning by pulling game history from Lichess and Chess.com APIs.</li>
                    <br />
                    <li>A chess engine that uses the Alpha-Beta search algorithm. This will be a fullstack application that will have a frontend that allows you to play against it while the logic will be in the backend. It would also eventually become a bot on Lichess to truly assess its skill.</li>
                </ul>
            </ScrollAnimation>
        </div>
    );
}
export default Portfolio;