import React,{useState} from 'react';
import {calculateWinner} from '../helper'
import Board from './Board';
import logo from '../logo.svg';

const style = {
    width: '250px',
    margin: '20px auto',
}

const Game = () => {
    const [history,sethistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber]=useState(0);
    const [xIsNext,setXisNext] =useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick=(i)=>{
        const timeInHistory = history.slice(0,stepNumber+1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        // if user clicks an occupied square or we have a winner then return null
        if(winner || squares[i]) return;
        //put x or o in the clicked square
        squares[i] = xIsNext? 'X' : 'O';
        sethistory([...timeInHistory,squares]);
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);

    }
    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step%2===0)
    }
    const renderMoves = () =>(
        history.map((_step,move)=>{
            console.log(move);
            const destination = move ? `Go to move #${move}` : `Go to start`;           
            return (
                <li key={move} className="list-unstyled">
                    <button onClick={()=>jumpTo(move)} className="btn btn-light mb-1">
                    {destination}
                    </button>
                </li>
            )
        })
       
    )
    return (
        <>
            <div className="container">
                <div className="row align-items-center" >
                    <img src={logo} className="col-3 col-sm-2 App-logo" alt="App-logo"/>
                    <h3 className="col col-sm-4 " >Tic-Tac-Toe</h3>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-sm-5">
                        <Board squares={history[stepNumber]} onClick={handleClick} />
                    </div>
                    <div className="col-12 col-sm-5">
                        <h5>{winner? 'Winner: '+winner: 'Next Player: '+(xIsNext? 'X':'O')}</h5>
                        {renderMoves()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game;


