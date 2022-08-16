import React, { useEffect } from "react";
import { useState } from "react";

const Game = ({ player1, player2, name, getWinners }) => {

    const [complete, setComplete] = useState(false)

    // useEffect(() => {
    //     checkBye()
    // }, [])

    const checkBye = () => {
        if (player1.name == "BYE") {
            winner2()
        }
    }


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

    let gameStyle = "game"
    let buttonStyle = 'button'
    if (complete) {
        gameStyle = "game-complete"
        buttonStyle = 'button-complete'
    }

    return (
        <div id={gameStyle}>
            <h2 className="game-title"> {name}</h2>
            <div id='game-details'>
                <button id={buttonStyle} onClick={winner1}>{player1["name"]} </button>
                <h4>Vs.</h4>
                <button id={buttonStyle} onClick={winner2}>{player2["name"]}</button>
            </div>
        </div>
    )


}

export default Game;