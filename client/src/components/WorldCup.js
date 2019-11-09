import React from 'react';
import axios from 'axios';
import Header from './Header.js';
import PlayerCard from './PlayerCard.js';


 class WorldCup extends React.Component {
    
    constructor(){
        super();
        this.state = {
            soccerPlayers: []
        }
    }

    componentDidMount(){
        
        axios.get('http://localhost:5000/api/players')
        .then(res =>{
            //console.log(res.data);
            this.setState({
                soccerPlayers: res.data
            })
            //console.log('=======================')
            //console.log(this.state.soccerPlayers)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    // componentDidUpdate(){
    //     //dont seem to have a reason to use it yet as we arent manipulating state
    // }
    
    render(){
        return(
            <div>
                <Header />
                <h1>Womens World Cup Players</h1>
                {this.state.soccerPlayers.map(player => {
                    return <PlayerCard key={player.id} aPlayer={player}/>
                })}
                
            </div>
        )
    }

}

export default WorldCup;