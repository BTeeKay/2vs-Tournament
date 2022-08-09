import React, { useEffect, useState } from 'react';
import './MainContainer.css';
import LaunchScreen from '../components/LaunchScreen';
import PlayerDetail from '../components/players/PlayerDetail';
import HomePageContainer from './HomePageContainer';
import TournamentContainer from './TournamentContainer';
import TournamentForm from '../components/tournaments/TournamentForm';
import AddPlayerContainer from './AddPlayerContainer';
import PlayerContainer from './PlayerContainer';
import AboutContainer from './AboutContainer';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Request from "../helpers/request"

const MainContainer = () => {

  const [players, setPlayers] = useState([])
  const [tournaments , setTournament] = useState([])

  useEffect(() => {
    getPlayers()
  },[])

  useEffect ( () => {
    getTournaments()
    
  },[])

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
    request.post('/api/tournament', tournament)
    .then(() =>  window.location = "/tournament")
  }



  const findPlayerById = (id) => {
    return players.find((player) => {
      return player.id === parseInt(id);
    })
  }

  const handleDelete = (id) => {
    const request = new Request();
    const url = 'api/players' + id;
    request.delete(url).then(() => {
      window.location = '/players';
    }); 
  }

  const PlayerDetailWrapper = () => {
    const { id } = useParams();
    let foundPlayer = findPlayerById(id)
    return <PlayerDetail player={ foundPlayer } handleDelete = {handleDelete} />;
  };

  
    return (
      <>
      <Router>
          <Routes>
            <Route path="/" element={ <HomePageContainer />} />
            {/* <Route path="/tournament" element={ <TournamentContainer tournaments ={tournaments}/>} /> */}

            <Route path="/tournament" element={ 
            <TournamentForm players={players} onCreate={createTournament}/>} />

            <Route path="/addplayer" element={ <AddPlayerContainer/> } />
            <Route path="/players" element={ <PlayerContainer players={players} /> } />
            <Route path="/about" element={ <AboutContainer/> } />
            <Route path="/player/:id" element={ <PlayerDetailWrapper/> } />
          </Routes>
      </Router>
        </>
    )

}

export default MainContainer;