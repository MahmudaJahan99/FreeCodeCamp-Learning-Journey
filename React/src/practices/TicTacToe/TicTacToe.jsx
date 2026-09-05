import { useState } from 'react';
import './TicTacToe.css'

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


const BoardSquare = ({ boardIndex, squares, handleClick }) => {
    return (
        <button
            className='square'
            onClick={() => handleClick(boardIndex)}
        >
            {squares[boardIndex]}
        </button>
    )
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);

    const checkWinner = (board) => {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        // Game already has a winner 
        if (winner) {
            return;
        }

        // Square is already occupied 
        if (squares[index]) {
            return;
        }

        // Create a copy of the board
        const newSquares = [...squares];
        // Put current player's mark
        newSquares[index] = currentPlayer;
        // Update board
        setSquares(newSquares);

        // Check whether this move produced a winner
        const gameWinner = checkWinner(newSquares);

        if (gameWinner) {
            setWinner(gameWinner);
            return;
        }

        // Switch player
        setCurrentPlayer(
            currentPlayer === "X" ? "O" : "X"
        );
    };

    const handleReset = () => {
        setSquares(Array(9).fill(null));
        setCurrentPlayer("X");
        setWinner(null);
    };

    const isDraw =
        !winner &&
        squares.every((square) => square !== null);

    return (
        <div>
            <div className="board">
                <h1>Tic-Tac-Toe</h1>

                <div className="status">
                    {winner
                        ? `Winner: ${winner}`
                        : isDraw
                            ? "It's a draw!"
                            : `Next Player: ${currentPlayer}`}
                </div>

                <div className="board-row">
                    <BoardSquare boardIndex={0} squares={squares} handleClick={handleClick} />
                    <BoardSquare boardIndex={1} squares={squares} handleClick={handleClick} />
                    <BoardSquare boardIndex={2} squares={squares} handleClick={handleClick} />
                </div>

                <div className="board-row">
                    <BoardSquare boardIndex={3} squares={squares} handleClick={handleClick} />
                    <BoardSquare boardIndex={4} squares={squares} handleClick={handleClick} />
                    <BoardSquare boardIndex={5} squares={squares} handleClick={handleClick} />
                </div>

                <div className="board-row">
                    <BoardSquare boardIndex={6} squares={squares} handleClick={handleClick} />
                    <BoardSquare boardIndex={7} squares={squares} handleClick={handleClick} />
                    <BoardSquare boardIndex={8} squares={squares} handleClick={handleClick} />
                </div>

                <button
                    type="button"
                    id="reset"
                    onClick={handleReset}
                >
                    Reset Game
                </button>
            </div>
        </div>
    );
};

export default TicTacToe;