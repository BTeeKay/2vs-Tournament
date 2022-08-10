import React from 'react';
import Player from './Player';

const PlayerDetail = ({player, handleDelete}) => {

        const onDelete = () => {
            handleDelete(player.id)
        }

    return (
        <>
        <div className ="component">
            <Player player={player} />
            <p>{player.name}</p>
            <button className='delete-btn' onClick={onDelete}>Delete {player.name}</button>
        </div>
        </>
    )

}

export default PlayerDetail;