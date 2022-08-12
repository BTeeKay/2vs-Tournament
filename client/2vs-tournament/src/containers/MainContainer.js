import React, { useEffect, useState } from 'react';
import './MainContainer.css';
import HomePageContainer from './HomePageContainer';
import TournamentContainer from './TournamentContainer'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
const MainContainer = () => {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    getPlayers()
  }, [])

  const getPlayers = () => {
    fetch("http:///localhost:8080/api/players")
      .then(res => res.json())
      .then(playersData => setPlayers(playersData))
  }

  const createPlayer = (player) => {
    console.log("create player called", player);
    const request = new Request();
    request.post("http://localhost:8080/api/players", player)
      .then(() => window.location = '/players')
  }


  return (
    <>

      <Router>
        <Routes>
          {/*  ___________________________________________HOME______________________________________________________ */}

          <Route path="/" element={<HomePageContainer/>} />

          {/*  ___________________________________________HOME_______________________________________________________*/}

          {/*  ___________________________________________TOURNAMENT_________________________________________________*/}

          <Route path='/tournament' element={<TournamentContainer players={players} onCreate={createPlayer} />} />

          {/*  ___________________________________________TOURNAMENT_________________________________________________*/}

        </Routes>
      </Router>
    </>
  )

}

export default MainContainer;