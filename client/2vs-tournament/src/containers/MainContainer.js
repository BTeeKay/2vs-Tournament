import React from 'react';
import './MainContainer.css';
import LaunchScreen from '../components/LaunchScreen';
import HomePageContainer from './HomePageContainer';
import TournamentContainer from './TournamentContainer';
import AddPlayerContainer from './AddPlayerContainer';
import PlayerContainer from './PlayerContainer';
import AboutContainer from './AboutContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainContainer = () => {

    return (
      <>
      <Router>
        {/* <LaunchScreen path="/" element={ <LaunchScreen/> } /> */}
          <Routes>
            <Route path="/" element={ <HomePageContainer />} />
            <Route path="/tournament" element={ <TournamentContainer/> } />
            <Route path="/addplayer" element={ <AddPlayerContainer/> } />
            <Route path="/players" element={ <PlayerContainer/>} />
            <Route path="/about" element={ <AboutContainer/> } />
          </Routes>
      </Router>
        </>
    )

}

export default MainContainer;