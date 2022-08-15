import React, { useEffect, useState } from 'react';
import './MainContainer.css';
import HomePageContainer from './HomePageContainer';
import TournamentContainer from './TournamentContainer'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import PlayerDetail from '../components/players/PlayerDetail';
import Request from "../helpers/request";
import ShowTournamentContainer from './ShowTournament';



const MainContainer = () => {

  const [players, setPlayers] = useState([])
  const [selectedPlayers, setSelectedPlayers] = useState([])


  const [quarterFinalists, setQurterFinalists] = useState([{ name: "Player 1" }, { name: "Player2" }, { name: "Player 3" }, { name: "Player 4" }, { name: "Player 5" }, { name: "Player 6" }, { name: "Player 7" }, { name: "Player 8" }])
  const [finalists, setFinalists] = useState([{ name: "" }, { name: "" }])
  const [semiFinalists, setSemiFinalists] = useState([{ name: "" }, { name: "" }, { name: "" }, { name: "" }])



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
    const { id } = useParams();
    let foundPlayer = findPlayerById(id)
    return <PlayerDetail foundPlayer={foundPlayer} handleDelete={handleDelete} />;
  }

  const addPlayer = (player) => {
    let selectedPlayersCopy = [...selectedPlayers];
    selectedPlayersCopy.push(player)
    let filteredSelectedPlayers = selectedPlayersCopy.filter(player => player.selected == true);
    setSelectedPlayers(filteredSelectedPlayers)
  }








  const populateTournament = () => {



    if (selectedPlayers.length == 8) {
      setQurterFinalists(selectedPlayers)

    }
    if (selectedPlayers.length == 4) {
      setSemiFinalists(selectedPlayers)

    }
    if (selectedPlayers.length == 2) {
      setFinalists(selectedPlayers)

    }
  }

  const getfinalists = (winner) => {

    const finalistsCopy = [...finalists]
    for (let i = 0; i < finalistsCopy.length; i++) {
      if (finalistsCopy[i].name === winner.name) {
        return
      }
      if (finalistsCopy[i].name === "") {
        finalistsCopy[i] = winner
        setFinalists(finalistsCopy)
        return
      }
    }
    return
  }

  const getSemiFinalists = (winner) => {
    const semiFinalistsCopy = [...semiFinalists]

    for (let i = 0; i < semiFinalistsCopy.length; i++) {
      if (semiFinalistsCopy[i].name === winner.name) {
        return
      }
      if (semiFinalistsCopy[i].name === "") {
        semiFinalistsCopy[i] = winner
        setSemiFinalists(semiFinalistsCopy)
        return
      }
    }
    return

  }



  return (
    <>

      <Router>
        <Routes>
          {/*  ___________________________________________HOME______________________________________________________ */}


          <Route path="/" element={
            <HomePageContainer />} />


          {/*  ___________________________________________HOME_______________________________________________________*/}

          {/*  ___________________________________________TOURNAMENT_________________________________________________*/}

          <Route path='/tournament' element={
            <TournamentContainer
              players={players}
              onCreate={createPlayer}
              addPlayer={addPlayer}
              populateTournament={populateTournament} />} />

          <Route path="/tournament/show" element={<ShowTournamentContainer selectedPlayers={selectedPlayers} finalists={finalists} semiFinalists={semiFinalists} quarterFinalists={quarterFinalists} getSemiFinalists={getSemiFinalists} getfinalists={getfinalists} />} />

          {/*  ___________________________________________TOURNAMENT_________________________________________________*/}


          {/*  ___________________________________________PLAYER_________________________________________________*/}

          <Route path="/players/:id" element={
            <PlayerDetailWrapper />} />

          {/*  ___________________________________________PLAYER_________________________________________________*/}


        </Routes>
      </Router>
    </>
  )

}

export default MainContainer;