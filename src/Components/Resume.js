import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ModalView from './ModalView'

const Resume = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 50 }}>
            <ScrollAnimation animateIn='fadeInLeft'>
                <div>
                    <ModalView
                        contentId={2}
                        title="Resume" 
                    />
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInRight'>
                <div> 
                    <h1>Experience</h1>
                    <br />
                    <h3>FastTrack (Java, SpringBoot and React Bootcamp):</h3>
                    <ul>
                        <li>
                            <h4>Social Media</h4>
                            <ul>
                                <li>Utilized Spring Boot to write a fully functional REST web service to act as a backend for a simple social media tool.</li>
                                <li>Collaborated with both of my teammates to help them get their first tickets pushed which resulted in a smoother completion of the project.</li>
                                <li>Wrote several REST endpoints to complete many CRUD operations on a PostgreSQL database.</li>
                                <li>Implemented utility functions to make our service more readable and usable while also limiting repetition of code. </li>
                                <li>Worked within an Agile environment using Github projects to manage our Kanban implementation. </li>
                            </ul>
                        </li>
                        <li>
                            <h4>Dev-Duel</h4>
                            <ul>
                                <li>Wrote a simple webpage with a node.js server to return dynamically return data from the GitHub user APIs.</li>
                                <li>Designed custom logic to compare two users given their statistics to determine the "better developer".</li>
                                <li>Utilized jQuery to populate our HTML elements with the appropriate data and push class changes to update the styling.</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Freelance:</h3>
                    <ul>
                        <li>
                            <h4>Robin Egg Demos</h4>
                            <ul>
                                <li>Worked directly with the founder to turn user and business requests into results within our webpage</li>
                                <li>Implemented logic using the CakePHP framework while adjusting the frontend with JavaScript.</li>
                                <li>Queried a MongoDb to interact with our user and client objects</li>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <button className='download-button'>
                        <a href="resume.pdf" download> 
                            <h4 style={{padding: '4px 4px 4px 6px', display: 'inline'}}>Download my Resume</h4>
                        </a>
                    </button>
                </div> 
            </ScrollAnimation>
        </div>

    );
  }
  export default Resume;