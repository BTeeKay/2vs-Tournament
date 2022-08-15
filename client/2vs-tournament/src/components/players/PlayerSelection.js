import React, { useState } from 'react';
import "./PlayerSelection.css"
import Player from './Player';
import e from 'cors';
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


            <Link to="/tournament/show"><button className='btn' onClick={handleClick} >Generate Tournament </button></Link>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add New Player" name="name" value={statePlayer.name} onChange={handleChange} />
                <button type="add-new-player">Add New Player</button>
            </form>



        </>
    )
}

export default PlayerSelection;