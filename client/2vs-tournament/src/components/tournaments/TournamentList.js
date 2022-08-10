import React from 'react';
import Tournament from './Tournament';


const TournamentList = ({tournaments}) => {

    const tournamentList = tournaments.map((tournament, index) =>{
    return(
        <li key = {index} className="component-item">
            <div className='component'>
                <Tournament tournament = {tournament}/>
            </div>

        </li>

    )
    })

    return(
        <>
        <ul className="tournament-list" >
            <p>**Tournament List from api**</p>
            {tournamentList}

        </ul>
        </>
    )
  
}

export default TournamentList;