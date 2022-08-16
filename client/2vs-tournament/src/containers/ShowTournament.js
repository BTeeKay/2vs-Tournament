
import React from "react";
import { useState, useEffect } from "react";
import Final from "./Final";
import QuarterFinal from "./Quarter-Final";
import SemiFinal from "./SemiFinal";
import Round16 from "./Round16";




const ShowTournamentContainer = ({ finalists, semiFinalists, quarterFinalists, round16, getQuarterFinalists, getSemiFinalists, getfinalists, selectedPlayers }) => {




    return (
        <div id='tournament'>
            {selectedPlayers.length > 8 ? <Round16 players={round16} getQuarterFinalists={getQuarterFinalists} /> : null}
            {selectedPlayers.length > 4 ? <QuarterFinal players={quarterFinalists} getSemiFinalists={getSemiFinalists} /> : null}
            {selectedPlayers.length > 2 ? <SemiFinal players={semiFinalists} getfinalist={getfinalists} /> : null}
            {selectedPlayers.length > 1 ? <Final finalists={finalists} /> : null}

        </div >

    )
}

export default ShowTournamentContainer;