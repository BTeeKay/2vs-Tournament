import React from 'react';
import PlayerContainer from './PlayerContainer';
import Typewriter from "typewriter-effect";

const MainContainer = () => {





    return (
        <>
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('"Big Money,Big Woman,Big Fun" ')
      .callFunction(() => {
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
      })
      .start();
  }}
/>
            
            <PlayerContainer/>
        </>
    )

}

export default MainContainer;