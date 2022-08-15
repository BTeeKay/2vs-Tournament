import React from 'react';
import './HomePageContainer.css';
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";

const MainContainer = () => {

    let navTournament = useNavigate();
    function handleTournamentClick() {
        navTournament('./tournament');
    }

    return (
        <>
    
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        
        
        <button className='tourn-btn'onClick={handleTournamentClick}>Create a Tournament</button>
        
        </>
    )

}

export default MainContainer;