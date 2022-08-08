import React from 'react';
import Typewriter from "typewriter-effect";
import VideoBackground from '../assets/BgVid.mp4';
import './LaunchScreen.css';

const Title = () => {

    return (
    <>
    <div className='main'>
        <div className='overlay'></div>
            <video src={VideoBackground} autoPlay loop muted />
            <h1 className='content'> 
                
                <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString(' 2VS Tournament 🏓')
                .callFunction(() => {
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                })
                .start();
                }}
                />
            </h1>
    </div>
        </>
    )

}

export default Title;