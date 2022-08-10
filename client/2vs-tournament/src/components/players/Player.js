import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Player = ({player}) => {

    if (!player) {
        return "Loading..."
    }

    const url = "/players" + player.id;
    return (
        <Fragment>
            <p>
                <Link to = {url} className="name">
                    {player.name}
                </Link>
            </p>
        </Fragment>
    )
}

export default Player;