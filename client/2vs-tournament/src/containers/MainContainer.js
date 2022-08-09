import React, { useEffect, useState } from 'react';
import './MainContainer.css';
import LaunchScreen from '../components/LaunchScreen';
import PlayerDetail from '../components/players/PlayerDetail';
import PlayerForm from '../components/players/PlayerForm';
import HomePageContainer from './HomePageContainer';
import TournamentContainer from './TournamentContainer';
import AddPlayerContainer from './AddPlayerContainer';
import PlayerContainer from './PlayerContainer';
import AboutContainer from './AboutContainer';
import Request from '../helpers/request';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

const MainContainer = () => {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    getPlayers()
  },[])

  const getPlayers = () => {
    fetch("http:///localhost:8080/api/players")
    .then(res => res.json())
    .then(playersData => setPlayers(playersData))
  }

  const findPlayerById = (id) => {
    return players.find((player) => {
      return player.id === parseInt(id);
    })
  }

  const createPlayer = (player) => {
    console.log("create player called", player);
    const request = new Request();
    request.post("/api/players", player)
    .then(() => window.location = '/players')
  }

  const handleDelete = (id) => {
    const request = new Request();
    const url = 'api/players/' + id;
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
        {/* <LaunchScreen path="/" element={ <LaunchScreen/> } /> */}
          <Routes>
            <Route path="/" element={ <HomePageContainer />} />
            <Route path="/tournament" element={ <TournamentContainer/> } />
            <Route path="/players" element={ <PlayerContainer players={players} /> } />
            <Route path="/about" element={ <AboutContainer/> } />
            <Route path="/players/:id" element={ <PlayerDetailWrapper/> } />
            <Route path="/players/new" element={<PlayerForm onCreate={createPlayer}/>} />
          </Routes>
      </Router>
        </>
    )

}

export default MainContainer;