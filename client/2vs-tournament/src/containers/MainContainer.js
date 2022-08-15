import React, { useEffect, useState } from 'react';
import './MainContainer.css';
import HomePageContainer from './HomePageContainer';
import TournamentContainer from './TournamentContainer'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import PlayerDetail from '../components/players/PlayerDetail';
import Request from "../helpers/request";
import ShowTournamentContainer from './ShowTournament';
import About from '../components/About/About';



const MainContainer = () => {

  const [players, setPlayers] = useState([{ name: "Player 1" }, { name: "Player2" }, { name: "Player 3" }, { name: "Player 4" }, { name: "Player 5" }, { name: "Player 6" }, { name: "Player 7" }, { name: "Player 8" }])
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


  const findPlayerById = (id) => {
      return players.find((player) => {
        return player.id === parseInt(id);
      })
  }

  const PlayerDetailWrapper = () => {
    const {id} = useParams();
    let foundPlayer = findPlayerById(id)
    return <PlayerDetail player={foundPlayer} handleDelete={handleDelete} />;
  }




  return (
    <>

      <Router>
        <Routes>
          {/*  ___________________________________________HOME______________________________________________________ */}
          <Route path="/" element={
            <HomePageContainer/>} />

          {/*  ___________________________________________TOURNAMENT_________________________________________________*/}

          <Route path='/tournament' element={
            <TournamentContainer 
              players={players} 
              onCreate={createPlayer} />} />
          
          <Route path="/tournament/show" element={<ShowTournamentContainer players={players} noOfPlayers={noOfPlayers} />} />

          {/*  ___________________________________________PLAYER_________________________________________________*/}

          <Route path="/players/:id" element={
            <PlayerDetailWrapper/> } />
          
          {/*  ___________________________________________ABOUT_________________________________________________*/}

          <Route path="/about" element={
            <About />} />
          
          
        </Routes>
      </Router>
    </>
  )

}

export default MainContainer;