import React,{Component} from "react";
import "./GameDone.css";

class GameDone extends React.Component{


    restartGame = () =>{
        window.location.reload(false);
    }


    render(){
        return(
            <div align = "center">
                <table>
                    <th align = "center">
                        <h1>{this.props.gameState}</h1>
                    </th>
                    <tbody>
                        <button onClick = {this.restartGame}> Play Again! </button>
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        )
    }
}

export default GameDone;