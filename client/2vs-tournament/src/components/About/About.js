import React from "react";

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
            <h2>The team</h2>

            <div>
            <h3>Iain Hay</h3>
            </div>
            
            <div>
            <h3>Ken Cheng</h3>
            </div>
            
            <div>
            <h3>Brian Kerr</h3>
            </div>
            
            <div>
            <h3>Alisdair Sit</h3>
            </div>
            
        </section>


        </>
    )
}

export default About