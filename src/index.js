import React from "react";
import ReactDOM from "react-dom";
import HangmanHolder from "./hangmanHolder";
import "./indexStyle.css";


class App extends React.Component{
    render(){
        const divMargin = {
            marginTop : 0,
            'background-color': 'cadetblue',
        }
        return(
            <div align = "center" class = "index">
                <h1>Simple Hangman</h1>
                <HangmanHolder
                    key = "hangmanHolder"
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));

