import React from "react";
import ReactDOM from "react-dom";
import HangmanHolder from "./hangmanHolder";

class App extends React.Component{
    render(){
        const divMargin = {
            marginTop : 50,
        }
        return(
            <div align = "center" style = { divMargin }>
                <HangmanHolder
                key = "hangmanHolder"
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));

