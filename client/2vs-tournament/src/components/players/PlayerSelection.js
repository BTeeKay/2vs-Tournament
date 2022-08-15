import React, { useState } from 'react';
import "./PlayerSelection.css"
import Player from './Player';

import { Link } from 'react-router-dom';


const PlayerSelection = ({ players, onCreate, addPlayer, populateTournament }) => {

    const [statePlayer, setStatePlayer] = useState(
        {
            name: "",
        }
    )

    const allPlayers = players.map((player, index) => {

        return (<div className='player-btns'>
            <Player
                player={player}
                key={player.id}
                addPlayer={addPlayer} />
        </div>)
    })

    const handleChange = function (event) {
        let propertyName = event.target.name;
        let copiedPlayer = { ...statePlayer }
        copiedPlayer[propertyName] = event.target.value;
        setStatePlayer(copiedPlayer)
    }

    const handleSubmit = function (event) {
        event.preventDefault();
        onCreate(statePlayer)
    }

    const handleClick = () => {
        console.log("test")
        populateTournament()
    }

    return (
        <>
            <div> {allPlayers}</div>

            <button className='gen-btn'>Generate Tournament </button>

            <Link to="/tournament/show"><button className='btn' onClick={handleClick} >Generate Tournament </button></Link>


            <form onSubmit={handleSubmit}>
                <input 
                className="input-box" 
                type="text" 
                placeholder="Enter Player Name" 
                name="name" 
                value={statePlayer.name} 
                onChange={handleChange} 
                required minLength ="1" />
                <button className='add-btn' type="add-new-player">Add</button>
            </form>

        </>
    )
}

export default PlayerSelection;