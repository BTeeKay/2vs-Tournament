import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const TournamentForm = ({ players, onCreate }) => {

    const [stateTournament, setStateTournament] = useState(
        {
            name: ""
        }
    )

    const handleChange = function (event) {
        let propertyName = event.target.name;
        let copiedTournament = { ...stateTournament }
        copiedTournament[propertyName] = event.target.value;
        setStateTournament(copiedTournament)
    }

    const handlePlayer = function (event) {
        const index = parseInt(event.target.value)
        const selectedPlayer = players[index]
        let copiedTournament = { ...stateTournament };
        copiedTournament['player'] = selectedPlayer;
        setStateTournament(copiedTournament)
    }

    const handleSubmit = function (event) {
        event.preventDefault();
        onCreate(stateTournament)
    }

    const playerOptions = players.map((player, index)=>{
        return <option key={index} value={index} >{player.name}</option>
    })



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Tournament Name' name="name" onChange={handleChange} value ={stateTournament.name}></input>
                <select name="player" onChange={handlePlayer} defaultValue="select-player">
                    <option disabled value= "select-player">Select player to enter tournaments</option>
                    {playerOptions}
                </select>
                <button type='submit'>Generate Tournament</button>
            </form>

        </>
    )
}

export default TournamentForm;