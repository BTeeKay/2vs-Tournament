import React from "react";
import Game from "../components/Game/Game";


const SemiFinal = ({ players, getfinalist }) => {


    return (
        <div id='round'>
            <div id='semi-final'>

                <Game name={"Semi-Final"} player1={players[0]} player2={players[1]} getWinners={getfinalist} />
                <Game name={"Semi-Final"} player1={players[2]} player2={players[3]} getWinners={getfinalist} />
            </div>
        </div>
    )


}

export default SemiFinal;