 import React from 'react'


 const PlayerCard = props =>{


    return (
        <div >
        <h3>Player: {props.aPlayer.name}</h3>
        <p>Country: {props.aPlayer.country}</p>
        <p>Searches: {props.aPlayer.searches}</p>
        </div>
    )
 }
export default PlayerCard;