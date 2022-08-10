import React from 'react';
import Tournament from './Tournament';
import Player from '../players/Player';

const TournamentDetail = ({ tournament }) => {


    return (

        <>
            <div className="component">
                <Tournament tournament={tournament} />

                {tournament.name}

                {tournament.rounds[1].name}

                {tournament.rounds[2].name}



            </div>
        </>

    )
}

export default TournamentDetail;