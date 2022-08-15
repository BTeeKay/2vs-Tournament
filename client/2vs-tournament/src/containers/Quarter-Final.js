import React from "react";
import Game from "../components/Game/Game";


const QuarterFinal = ({ players, getSemiFinalists }) => {


    return (
        <div id='round'>

            <Game name={"Quarter-Final"} player1={players[0]} player2={players[1]} getWinners={getSemiFinalists} />
            <Game name={"Quarter-Final"} player1={players[2]} player2={players[3]} getWinners={getSemiFinalists} />
            <Game name={"Quarter-Final"} player1={players[4]} player2={players[5]} getWinners={getSemiFinalists} />
            <Game name={"Quarter-Final"} player1={players[6]} player2={players[7]} getWinners={getSemiFinalists} />
        </div>
    )


}

export default QuarterFinal;