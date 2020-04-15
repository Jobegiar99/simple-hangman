import React from "react";
import HangManWord from "./hangmanWord";
import GameDone from "./gamedone";
class HangmanHolder extends React.Component{
    
    constructor(props){
        super(props);
   
        this.state={
            lives : 6,
            playerWon : false,
            playerLost : false,
            index : Math.floor(Math.random() * 24)
        }; 
    }

    

    setPlayerWon = () =>{
        this.setState({playerWon : true});
    }

    playerWrongGuess = () =>{
        if ( this.state.lives > 1)
            this.setState( { lives : this.state.lives - 1});
        else{
            this.setState( {playerLost: true});
        }
    }


    render(){
        let words =  ["pokemon","squirtle","rattata","torchic","mudkip","treeko","sudoowudoo","ditto",
                      "fire","water","psychic","ghost","grass","bug","dragon","ice","dark",
                      "fairy","normal","fighting","ground","rock","steel","flying"];
        let hangWord = words[ this.state.index ];
        let hangmanWord =  <HangManWord 
                            key = "hangmanWord" 
                            word = {hangWord} 
                            playerWon = {this.setPlayerWon} 
                            wrongAnswer = {this.playerWrongGuess}
                            /> ;

        let won = <GameDone
                    gameState = "You won!!!!"
                         />

        let lost = <GameDone
                    gameState = "You Lost :(" 
                         />
        
        return(
            <div>
                                                                     
                { (!this.state.playerLost && !this.state.playerWon)  ? (hangmanWord) : (this.state.playerWon) ? (won) : (lost)}
     
                
            </div>
        )
    }
}

export default HangmanHolder;
