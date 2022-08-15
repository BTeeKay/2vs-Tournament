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
        <h1>homepage container</h1>
    
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        
        
        <button className='tourn-btn'onClick={handleTournamentClick}>Start a Tournament</button>
        
        </>
    )

}

export default MainContainer;