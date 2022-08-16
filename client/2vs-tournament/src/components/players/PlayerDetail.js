import React from "react";
import Player from "./Player";

const PlayerDetail = ({ player, handleDelete }) => {


    if (!player) {
        return "....loading details"
    }
        const onDelete = () => {
            handleDelete(player.id)
        }

    return (
        <>
        <div className='delete-button' 
        // onClick={(player) => { if (window.confirm('Are you sure you wish to remove the player?')) handleDelete(player) } } 
        >

            <p>Name:{player.name}</p>
            <button className="delete-btn" onClick={onDelete} >Delete Player</button>
        </div>
        </>
    )
   
}

export default PlayerDetail;