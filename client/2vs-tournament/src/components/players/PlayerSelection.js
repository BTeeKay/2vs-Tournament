import React, { useState } from 'react';
import "./PlayerSelection.css"
import Player from './Player';

const PlayerSelection = ({ players, onCreate }) => {

    const [statePlayer, setStatePlayer] = useState(
        {
            name: "",
            rating: 1200
        }
    )

    const allPlayers = players.map((player, index) => {

        return (<div className='player-btns'>
        <Player 
        players={player} 
        key={index} />
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

    return (
        <>

            <div> {allPlayers}</div>


            <button className='gen-btn'>Generate Tournament </button>

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