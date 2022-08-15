import React from "react";
import Game from "../components/Game/Game";

const Final = ({ finalists }) => {

    return (
        <div id="round">
            <Game name={"Final"} player1={finalists[0]} player2={finalists[1]} />
        </div>
    )


}

export default Final;