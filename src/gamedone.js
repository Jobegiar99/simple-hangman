import React,{Component} from "react";
import "./GameDone.css";

class GameDone extends React.Component{


    restartGame = () =>{
        window.location.reload(false);
    }


    render(){
        return(
            <div align = "center" class = "gameDone">
                <table>
                    <th align = "center" class = "Result">
                        <h2 >{this.props.gameState}</h2>
                    </th>
                    <tbody>
                        <button onClick = {this.restartGame} class = "buttonPlayAgain"> Play Again! </button>
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        )
    }
}

export default GameDone;