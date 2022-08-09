import React from 'react';
import Player from './Player';

const PlayerList = ({players}) => {

    const playerElements = players.map((player, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <Player player={player} />
                </div>
            </li>
        )
    })

    return (
        <>
        <ul className="player-list" >
            {playerElements}
        </ul>
        </>
    )

}

export default PlayerList;