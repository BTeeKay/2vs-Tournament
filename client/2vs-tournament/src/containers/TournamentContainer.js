import React from "react";
import PlayerSelection from '../components/players/PlayerSelection';


const TournamentContainer = ({ players, onCreate, addPlayer, populateTournament }) => {

    return (
        <>

            <PlayerSelection players={players} onCreate={onCreate} addPlayer={addPlayer} populateTournament={populateTournament} />
        </>
    )

}

export default TournamentContainer;