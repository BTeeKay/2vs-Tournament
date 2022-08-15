import React from "react";
import Game from "../components/Game/Game";

const Final = ({ finalists }) => {

    function handleFinalGame() {
        console.log("Picked a winner")
    }
    return (
        <div id="round">
            <Game name={"Final"} player1={finalists[0]} player2={finalists[1]} handleFinalGame={handleFinalGame}/>
        </div>
    )


}

export default Final;