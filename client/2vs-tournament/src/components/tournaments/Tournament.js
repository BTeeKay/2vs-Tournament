import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Tournament = ({ tournament }) => {

    if (!tournament) {
        return "Loading..."
    }

    const url = "/tournament/" + tournament.id;
    return (
        <Fragment>
            <p>
                <Link to={url} className="name">
                    {tournament.name}
                </Link>

                <p>{tournament.rounds[1].name}</p>

            </p>
        </Fragment>
    )

}

export default Tournament;