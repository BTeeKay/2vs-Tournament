import React, {useState, useEffect } from 'react';


const PlayerForm = ({onCreate}) => {

    const [statePlayer, setStatePlayer] = useState(
    {
        name: "",
        game: {
            "name": "",
        }
    }
)

const handleChange = function(event) {
    let propertyName = event.target.name;
    let copiedPlayer = {...statePlayer}
    copiedPlayer[propertyName] = event.target.value;
    setStatePlayer(copiedPlayer)
}

const handleSubmit = function(event) {
    console.log("handle submit called");
    event.preventDefault();
    onCreate(statePlayer);
}

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name' name='name' onChange={handleChange} value={statePlayer.name} />
            <button type='submit'>Save</button>
        </form>
        </>
    )
}

export default PlayerForm;