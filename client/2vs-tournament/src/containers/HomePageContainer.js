import React from 'react';
import './HomePageContainer.css';
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";

const MainContainer = () => {

    let navTournament = useNavigate();
    function handleTournamentClick() {
        navTournament('./tournament');
    }

    let navAbout = useNavigate();
    function handleAboutClick() {
        navAbout('./about');
    }



    return (
        <>
        <h1></h1>
        
        <div className='page-btns'>
        <button className='tourn-btn'onClick={handleTournamentClick}>Start a Tournament</button>
        
        <button className='about-btn'onClick={handleAboutClick}>About App</button>
        </div>
        </>
    )

}

export default MainContainer;