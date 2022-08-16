import React from "react";
import './About.css'


const About = () => {
  
    return (
        <>
        <main className="about">
        <h1>Welcome to our App</h1>

        <p>Click on the Start Tournament button in the homepage to begin using the app.</p>

        <p>This app was created as part of our group project in Codeclan Software Development course. The technologies used include Java, Spring, Javascript & React</p>

        <h2>Application Brief</h2>
        <p>The App can create touraments based on a number of given players. All players are saved in the database along with their ratings. Once the tournament app is running, it tracks the results of the tournament and shows the progression until the final.</p>

        </main>

        <section>
            <h2>The Team</h2>
                <div className="socials">
                    <div className="bio">
                        <h3>Iain Hay</h3>
                            <div className="social-icons">
                                <a className="icon" href="https://github.com/iain2" target="_blank"><img src="images/Github.png" alt="Github"></img></a>
                                <a href="https://www.linkedin.com/in/iain-hay" target="_blank"><img src="images/LinkedIn.png" alt="Linkedin"></img></a>
                            </div>
                    </div>
                    <div className="bio">
                        <h3>Ken Cheng</h3>
                            <div className="social-icons">
                                <a className="icon" href="https://github.com/Ckk169" target="_blank"><img src="images/Github.png" alt="Github"></img></a>
                                <a href="https://www.linkedin.com/in/ken-cheng-184444100" target="_blank"><img src="images/LinkedIn.png" alt="Linkedin"></img></a>
                            </div>
                    </div>
                    <div className="bio">
                        <h3>Brian Kerr</h3>
                            <div className="social-icons">
                                <a className="icon" href="https://github.com/SkyeEli" target="_blank"><img src="images/Github.png" alt="Github"></img></a>
                                <a href="https://www.linkedin.com/in/btk91" target="_blank"><img src="images/LinkedIn.png" alt="Linkedin"></img></a>
                            </div>
                    </div>
                    <div className="bio">
                            <h3>Alisdair Sit</h3>
                                <div className="social-icons">
                                    <a className="icon" href="https://github.com/Ally288" target="_blank"><img src="images/Github.png" alt="Github"></img></a>
                                    <a href="https://www.linkedin.com/in/alisdairsit/" target="_blank"><img src="images/LinkedIn.png" alt="Linkedin"></img></a>
                                </div>
                    </div>
                </div>

                <br/>
        </section>
        </>
    )
}

export default About