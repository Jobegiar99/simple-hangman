import React from "react";
import "./hangmanWord.css";
import HangmanButton from "./hangmanButton";

class HangManWord extends React.Component{

    constructor(props){
        super(props);
        let tempButton = [];
        for(let i = 0 ; i < 26 ; i++){
            let temp =  (
                <td>
                    <HangmanButton
                        key = {"a _" + i}
                        letter = {String.fromCharCode(97+i)}
                        userGuess = {this.userGuess}
                        index = {i}
                        />
                </td>
            ); 
            tempButton.push(temp);
        }
        this.state = {
            letters : (this.props.word.split("")).map((letter) => (
                "_ "
            )),
            buttons : tempButton
        };

    }

    handlePlayerWon = () =>{
        if( !this.state.letters.includes("_ "))
            this.props.playerWon();
    }

    userGuess = (guess,index) =>{
        let found = this.props.word.includes(guess);

       if (found){
           let i = 0;
           this.setState({
               letters :
               this.state.letters.map( (letter) => {
                   let currentCharacter = ( this.props.word[i] === guess) ? this.props.word[i]  : 
                                          (this.state.letters[i] === "_ ") ? "_ ": this.state.letters[i];
                   i++;
                   return currentCharacter;
               })
            })
            setTimeout(this.handlePlayerWon, 300);
    
        }else{
            this.props.wrongAnswer();
        }
        let i = -1;
        this.setState({buttons: this.state.buttons.map( element =>{
                i++;
                if ( i === index)
                    return null;
                
                return element;
            
            }) 
        })

        
        
    }

    

    render(){
        return(
            <div>
                <h1 className = "hangmanWordH1" >{this.state.letters} </h1>
             
                <table>
                    <tr>
                        {this.state.buttons}
                    </tr>
                </table>
            </div>
        )
    }
}

export default HangManWord;