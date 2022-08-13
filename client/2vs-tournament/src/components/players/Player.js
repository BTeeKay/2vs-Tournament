import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import './Player.css'


const Player = ({ players }) => {

    const url = "/players/" + players.id;


    return (
        <>
        <button >
            <div className='player-btns'> {players.name} </div>
        </button>
            {/* <Fragment>
                <label className="player-selection" style={ {display: "block" }}>
                    <input type="checkbox"/>
                <Link to = {url} className="playerGrid">
                    {players.name} ({players.rating})
                </Link>
                </label>
            </Fragment> */}
        </>



    )
}

export default Player;