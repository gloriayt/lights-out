import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };
  
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
  }

  createBoard() {
    let board = [];
    let {ncols, nrows} = this.props;
    for (let row = 0; row < nrows; row++) {
      let cols = [];
      for (let col = 0; col < ncols; col++) {
        cols.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(cols);
    }
    return board;
  }

  // Flips a cell and determines if winner
  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let temp_board = this.state.board;
    let [row, col] = coord.split(",").map(Number);
    function flipCell(row, col) {
      if (col >= 0 && col < ncols && row >= 0 && row < nrows) {
        temp_board[row][col] = !temp_board[row][col];
      }
    }
    flipCell(row, col); 
    flipCell(row, col - 1);
    flipCell(row, col + 1); 
    flipCell(row - 1, col);
    flipCell(row + 1, col); 
    this.setState({board:temp_board});
    let is_winner = this.state.board.every(r => r.every(c => !c));
    this.setState({is_winner: is_winner});
  }

  table() {
    let table = [];
    let row = 0;
    let col = 0;
    let { ncols, nrows } = this.props;
    while (row < nrows) {
      let items = [];
      col = 0;
      while (col < ncols) {
        let coord = `${row},${col}`;
        items.push(
          <Cell 
            key={coord}
            isLit={this.state.board[row][col]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
        col++
      }
      table.push(<tr key={row}>{items}</tr>)
      row++
    }
    return (
      <tbody>{table}</tbody>
    )
  }

  render() {
  return (
    <div>
      <div class="logo"><b>Lig<span>h</span>ts <span>O</span>ut</b></div>
      {this.state.hasWon === false 
        ? <table className="Board">
          {this.table()}
        </table>
        : <p><div class="logo"><b>Yo<span>u </span>W<span>i</span>n!</b></div></p>
      }
    </div>
  )
  }
}

export default Board;
