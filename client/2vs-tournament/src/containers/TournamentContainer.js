import React from "react";
import PlayerSelection from '../components/Players/PlayerSelection';


const TournamentContainer = ({players, onCreate}) => {

    return (
        <>

        <PlayerSelection players = {players} onCreate={onCreate}/>
        </>
    )

}

export default TournamentContainer;