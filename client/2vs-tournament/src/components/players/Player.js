import React from 'react'
import "./PlayerSelection.css"


const Player = ({ players }) => {


    return (
        <>
            <div className ="playerGrid"> {players.name} </div>
        </>



    )
}

export default Player;