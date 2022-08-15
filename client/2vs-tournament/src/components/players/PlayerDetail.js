import React from "react";
import Player from "./Player";

const PlayerDetail = ({ player, handleDelete }) => {

    if (player) {

        const playerRatings = player.ratings.map((rating, index) => {
            return <li key={index}>{player.rating}</li>
        })

        const onDelete = () => {
            handleDelete(player.id)
        }

        return (
            <>
                <div className="delete-comp">
                    <Player player={player} />
                    <p>{player.name} ({player.rating})</p>
                    {/* add confirmation button to confirm delete */}
                    <button className="delete-btn" onClick={onDelete}>DeletePlayer</button>
                </div>
            </>
        )
    }
}

export default PlayerDetail;