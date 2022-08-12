import React, { useState } from 'react';
import "./PlayerSelection.css"
import Player from './Player';

const PlayerSelection = ({ players, onCreate }) => {

    const [statePlayer, setStatePlayer] = useState(
        {
            name: ""
        }
    )

    const allPlayers = players.map((player, index) => {

        return <Player players={player} key={index} />
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


            <button className='btn'>Generate Tournament </button>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add New Player" name="name" value={statePlayer.name} onChange={handleChange} />
                <button type="add-new-player">Add New Player</button>
            </form>



        </>
    )
}

export default PlayerSelection;