import React from "react";

const Game = ({ player1, player2, name, getWinners }) => {

    const winner1 = () => {
        getWinners(player1)
    }
    const winner2 = () => {
        getWinners(player2)
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