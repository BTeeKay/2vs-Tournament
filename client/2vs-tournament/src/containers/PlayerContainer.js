import React from 'react';
import PlayerList from '../components/players/PlayerList';

function PlayerContainer({players}) {

    return (
        <>
        <PlayerList players={players} />
        </>
    )
}

export default PlayerContainer;