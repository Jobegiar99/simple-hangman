import React from "react";
import "./hangmanButton.css";

class HangmanButton extends React.Component{

    constructor(){
        super();
        this.state = {
            disabled : false
        }
    }


    handleUserGuess = () =>{
        this.props.userGuess(this.props.letter,this.props.index);
        this.setState({ disables :true})
    }
    
    render(){
        return(
            <div className = "hangmanButtonDiv" align = "center" >
                <button className = "hangmanButton" onClick = {this.handleUserGuess} disabled = {this.state.disabled} >
                    {this.props.letter}
                </button>
            </div>
        )
    }
}

export default HangmanButton;