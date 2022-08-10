import React, { useEffect, useState } from 'react';
import './MainContainer.css';
import LaunchScreen from '../components/LaunchScreen';
import PlayerDetail from '../components/players/PlayerDetail';
import PlayerForm from '../components/players/PlayerForm';
import HomePageContainer from './HomePageContainer';
import TournamentContainer from './TournamentContainer';
import TournamentForm from '../components/tournaments/TournamentForm';
import TournamentDetail from '../components/tournaments/TournamentDetail';
import AddPlayerContainer from './AddPlayerContainer';
import PlayerContainer from './PlayerContainer';
import AboutContainer from './AboutContainer';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Request from "../helpers/request"
import Tournament from '../components/tournaments/Tournament';

const MainContainer = () => {

  const [players, setPlayers] = useState([])
  const [tournaments, setTournament] = useState([])

  useEffect(() => {
    getPlayers()
  }, [])

  useEffect(() => {
    getTournaments()

  }, [])

  const getPlayers = () => {
    fetch("http:///localhost:8080/api/players")
      .then(res => res.json())
      .then(playersData => setPlayers(playersData))
  }

  const getTournaments = () => {
    fetch("http://localhost:8080/api/tournament")
      .then(res => res.json())
      .then(tournamentData => setTournament(tournamentData))
  }

  const createTournament = (tournament) => {
    const request = new Request();
    request.post('http://localhost:8080/api/tournament', tournament)
      .then(() => window.location = "/tournament")
  }
  
  const createPlayer = (player) => {
    console.log("create player called", player);
    const request = new Request();
    request.post("http://localhost:8080/api/players", player)
      .then(() => window.location = '/players')
  }

 
  const findPlayerById = (id) => {
    return players.find((player) => {
      return player.id === parseInt(id);
    })
  }

  const findTournamentById = (id)=>{
    return tournaments.find((tournament)=>{
      return tournament.id === parseInt(id);
    })
  }

  const handleDelete = (id) => {
    const request = new Request();
    const url = "http://localhost:8080/api/players/" + id;
    request.delete(url).then(() => {
      window.location = '/players';
    });
  }

  const PlayerDetailWrapper = () => {
    const { id } = useParams();
    let foundPlayer = findPlayerById(id)
    return <PlayerDetail player={foundPlayer} handleDelete={handleDelete} />;
  };

  const TournamentDetailWrapper = () => {
    const {id} = useParams();
    let foundTournament = findTournamentById(id)
    return <TournamentDetail tournament = {foundTournament}/>
  }


  return (
    <>
      <Router>
        <Routes>
{/*  ___________________________________________HOME______________________________________________________ */}

          <Route path="/" element={<HomePageContainer />} />
{/*  ___________________________________________HOME_______________________________________________________*/}

{/*  ___________________________________________TOURNAMENT_________________________________________________*/}

          <Route path="/tournament/show" element={ <TournamentContainer tournaments ={tournaments}/>} />
          <Route path="/tournament/new" element={
            <TournamentForm players={players} onCreate={createTournament} />}/>
          <Route path="/tournament/:id" element={<TournamentDetailWrapper/>}/>
          
{/*  ___________________________________________TOURNAMENT_________________________________________________*/}

{/*  ___________________________________________PLAYER_____________________________________________________*/}

          <Route path="/players" element={<PlayerContainer players={players} />} />
          <Route path="/players/:id" element={<PlayerDetailWrapper />} />
          <Route path="players/new" element={<PlayerForm onCreate={createPlayer} />} />
{/*  ___________________________________________PLAYER_____________________________________________________*/}

{/*  ___________________________________________ABOUT______________________________________________________*/}


          <Route path="/about" element={<AboutContainer />} />
{/*  ___________________________________________ABOUT______________________________________________________*/}


           
          </Routes>
      </Router>
    </>
  )

}

export default MainContainer;