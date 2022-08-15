
import React from "react";
import { useState, useEffect } from "react";
import Final from "./Final";
import QuarterFinal from "./Quarter-Final";
import SemiFinal from "./SemiFinal";




const ShowTournamentContainer = ({ players, noOfPlayers }) => {

    const [quarterFinalists, setQurterFinalists] = useState([{ name: "Player 1" }, { name: "Player2" }, { name: "Player 3" }, { name: "Player 4" }, { name: "Player 5" }, { name: "Player 6" }, { name: "Player 7" }, { name: "Player 8" }])
    const [finalists, setFinalists] = useState([{ name: "" }, { name: "" }])
    const [semiFinalists, setSemiFinalists] = useState([{ name: "" }, { name: "" }, { name: "" }, { name: "" }])


    useEffect(() => {
        populateTournament()
    }, [players])


    const populateTournament = () => {
        if (noOfPlayers == 8) {
            setQurterFinalists(players)

        }
        if (noOfPlayers == 4) {
            setSemiFinalists(players)

        }
        if (noOfPlayers == 2) {
            setFinalists(players)

        }
    }

    const getfinalists = (winner) => {

        const finalistsCopy = [...finalists]
        for (let i = 0; i < finalistsCopy.length; i++) {
            if (finalistsCopy[i].name === winner.name) {
                return
            }
            if (finalistsCopy[i].name === "") {
                finalistsCopy[i] = winner
                setFinalists(finalistsCopy)
                return
            }
        }
        return
    }

    const getSemiFinalists = (winner) => {
        const semiFinalistsCopy = [...semiFinalists]

        for (let i = 0; i < semiFinalistsCopy.length; i++) {
            if (semiFinalistsCopy[i].name === winner.name) {
                return
            }
            if (semiFinalistsCopy[i].name === "") {
                semiFinalistsCopy[i] = winner
                setSemiFinalists(semiFinalistsCopy)
                return
            }
        }
        return

    }


    return (
        <div id='tournament'>
            <button onClick={populateTournament}>populateTournament</button>
            <QuarterFinal players={quarterFinalists} getSemiFinalists={getSemiFinalists} />
            <SemiFinal players={semiFinalists} getfinalist={getfinalists} />
            <Final finalists={finalists} />
        </div >

    )
}

export default ShowTournamentContainer;