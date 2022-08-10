import React from "react";
import TournamentList from "../components/tournaments/TournamentList";
import TournamentForm from "../components/tournaments/TournamentForm";

const TournamentContainer = ({tournaments}) => {

    return (
        <>
        <TournamentList tournaments ={tournaments} />
        </>
    )

}

export default TournamentContainer;