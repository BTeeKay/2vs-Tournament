import React, { useEffect, useState } from 'react';
import './MainContainer.css';
import HomePageContainer from './HomePageContainer';
import TournamentContainer from './TournamentContainer'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import PlayerSelection from '../components/players/PlayerSelection';
import Request from "../helpers/request";
import ShowTournamentContainer from './ShowTournament';



const MainContainer = () => {

  const [players, setPlayers] = useState([])
  const [noOfPlayers, setNoOfPlayers] = useState(4)


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
      .then(() => window.location = '/tournament')
  }

  const handleDelete = (id) => {
    const request = new Request();
    const url = "http://localhost:8080/api/players/" + id;
    request.delete(url).then(() => {
      window.location = '/tournament';
    });
  }
















  // const findPlayerById = (id) => {
  //     return players.find((player) => {
  //       return player.id === parseInt(id);
  //     })
  // }

  // const PlayerDetailWrapper = () => {
  //   const {id} = useParams();
  //   let foundPlayer = findPlayerById(id)
  //   return <PlayerSelection foundPlayer={foundPlayer} handleDelete={handleDelete} />;
  // }




  return (
    <>

      <Router>
        <Routes>
          {/*  ___________________________________________HOME______________________________________________________ */}

          <Route path="/" element={<HomePageContainer />} />

          {/*  ___________________________________________HOME_______________________________________________________*/}

          {/*  ___________________________________________TOURNAMENT_________________________________________________*/}

          <Route path='/tournament' element={<TournamentContainer players={players} onCreate={createPlayer} />} />

          {/*  ___________________________________________TOURNAMENT_________________________________________________*/}

          <Route path="/tournament/show" element={<ShowTournamentContainer players={players} noOfPlayers={noOfPlayers} />} />
        </Routes>
      </Router>
    </>
  )

}

export default MainContainer;