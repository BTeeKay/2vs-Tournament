import React from "react";
import { useState } from "react";

const Game = ({ player1, player2, name, getWinners }) => {

    const [complete, setComplete] = useState(false)

    const winner1 = () => {
        if (complete == false) {
            getWinners(player1)
            setComplete(true)
        }
    }
    const winner2 = () => {
        if (complete == false) {
            getWinners(player2)
            setComplete(true)
        }
    }

    return (
        <div id='game'>
            <h2 className="game-title"> {name}</h2>
            <div id='game-details'>
                <button id='button' onClick={winner1}>{player1["name"]} </button>
                <h4>Vs.</h4>
                <button id='button' onClick={winner2}>{player2["name"]}</button>
            </div>
        </div>
    )


}

export default Game;