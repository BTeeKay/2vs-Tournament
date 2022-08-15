import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Player.css'


const Player = ({ player, addPlayer }) => {

    // const [checked, setChecked] = useState(
    //     new Array(player.length).fill(false)
    // );

    // const [selectedPlayers, setSelectedPlays] = useState(0);

    // const handleChange = (position) => {
    //     const updatedCheckedState = checked.map((item,index) =>
    //     index === position ? ! item: item);

    //     setChecked(updatedCheckedState);

    //     const totalPlayers = updatedCheckedState.reduce(
    //         (sum, currentState, index) => {
    //             if (currentState === true) {
    //                 return sum + players[index].name;
    //             }
    //             return sum;
    //         },
    //         0
    //     );
    //     setSelectedPlays(totalPlayers);
    // }

    // const handleCheck = (event) => { 
    //     var playersSelected = [...selectedPlayers];
    //     if (event.target.checked) {
    //         playersSelected = [...selectedPlayers, event.target.value];
    //     } else {
    //         playersSelected.splice(selectedPlayers.indexOf(event.target.value), 1);
    //     }
    //     setChecked(playersSelected);
    // }

    const url = "/players/" + player.id;

    let navPlayer = useNavigate();
    function handlePlayerClick() {
        navPlayer(url);
    }

    const handleChange = () => {
        player.selected = !player.selected
        addPlayer(player)
    }

    return (
        <>
            <div>
                <li>
                    <label className='checkbox'>
                        <input type="checkbox"
                            // checked={checked}
                            onChange={handleChange} />
                        <button onClick={handlePlayerClick} >
                            <div className='player-btns'
                                value={player.name}>
                                {player.name} </div>
                        </button>
                    </label>
                    {/* <p>{checked ? "Selected" : "Not Selected"}</p> */}
                </li>
            </div>

            {/* <Fragment>
                <label className="player-selection" style={ {display: "block" }}>
                    <input type="checkbox"/>
                <Link to = {url} >
                    {players.name} ({players.rating})
                </Link>
                </label>
            </Fragment> */}
        </>



    )
}

export default Player;