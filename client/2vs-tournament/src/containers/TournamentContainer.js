import React from "react";
import PlayerSelection from '../components/players/PlayerSelection';


const TournamentContainer = ({players, onCreate}) => {

    return (
        <>

        <PlayerSelection players = {players} onCreate={onCreate}/>
        </>
    )

}

export default TournamentContainer;