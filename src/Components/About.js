import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ModalView from './ModalView';
import '../App.css';

const About = () => {

  return (
    <div className="about-section" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 40 }}>
      <ScrollAnimation animateIn='fadeInLeft' animateOut="fadeOut">
        <div>
          <h1>Joseph Dodge</h1>
          <p>I have been infatuated with software since I was in middle school and heard about javascript. That eventually translated into some freelance gigs for local shops in the SLC area. What turned my infatuation into a full blown passion was when I got to see the true power of engineering as deepmind released a neural network to play chess. After being given only the rules and four hours of training this hyper tuned model obliterated the top level engine at the time. As a fan of the game and future focused software I was hooked. </p>
          <p>After high school I was able to land an internship at Willis Towers Watson as a software engineer. I was on the account management team at a company that sold medicare. With the industry being heavily regulated and our audience being quite old, turning business requests into a functional UX became my responsibility and eventually something I really enjoyed. Watching our user retention go up as a direct result of my small changes in our React.js MFE really changed my outlook on the importance of understanding the goals and audience of any project. This eventually transitioned into a full time role where I was on the enrollment team as a software developer. Because I excelled at fixing UXs I was put on a team that needed a completely new webpage. I spearheaded a large portion of the frontend work as we built and released our new MFE. One particular page was the cause of 30% of all abandonments. After our release this number was nullified and had a direct impact on our percentage of enrollments that year. WTW is a 50,000 person company and being young I decided to try out the world of startups and met with an entrepreneur from NOLA where he presented his solution for the aggregation of ride sharing services. This piqued my interest and we started working on an MVP. Then we hired a CTO and tech lead with whom I worked to create our first of three apps in React Native. I’ve really enjoyed the work I have done. I am just looking for something more consistent. </p>
          <p>Which right now is mostly music, I play several instruments and have written music for a few years, and of course still playing way too much chess. </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeInRight' animateOut="fadeOut">  
        <ModalView
          contentId={1} 
          title="Portrait"
        />
      </ScrollAnimation>
    </div>
  );
}
export default About;