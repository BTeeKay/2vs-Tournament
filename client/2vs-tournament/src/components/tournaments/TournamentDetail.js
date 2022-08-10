import React from 'react';
import Tournament from './Tournament';
import Player from '../players/Player';

const TournamentDetail = ({ tournament, player }) => {


    return (

        <>
            <div className="component">
                <Tournament tournament={tournament} />
               

            </div>
        </>

    )
}

export default TournamentDetail;