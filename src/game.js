import React, { Component } from 'react'
import './App.css'
import Board from './board.js';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* todo */}</ol>
        </div>
      </div>
    );
  }
}

export default Game
