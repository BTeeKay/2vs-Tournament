import React from "react";
import { useNavigate } from "react-router-dom";

const HomePageContainer = () => {

    let navTournament = useNavigate();
    function handleTournamentClick() {
        navTournament("./tournament");
    }

    let navAddPlayer = useNavigate();
    function handleAddPlayerClick() {
        navAddPlayer("./players/new");
    }

    let navPlayerList = useNavigate();
    function handleViewPlayersClick() {
        navPlayerList("./players");
    }

    let navAboutApp = useNavigate();
    function handleAboutAppClick() {
        navAboutApp("./about");
    }

    return (
        <>
<p>this is home page container</p>

        <div className="button-container">
            <div className="tournament-button">
                <button onClick={handleTournamentClick}>Start Tournament</button>
            </div>

            <div className="add-player-button">
                <button onClick={handleAddPlayerClick}>Add Players</button>
            </div>

            <div className="players-button">
                <button onClick={handleViewPlayersClick}>View Players</button>
            </div>

            <div className="about-button">
                <button onClick={handleAboutAppClick}>About App</button>
            </div>

        </div>
        </>
    )

}

export default HomePageContainer;