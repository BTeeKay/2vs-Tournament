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

            <article id='article'>
                <input type="checkbox" id="article-input" onChange={handleChange} />
                <div id='article-div'>
                    {player.name}
                </div>

            </article>




        </>



    )
}

export default Player;

