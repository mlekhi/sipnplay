// Tic Tac Toe game component with board, player interaction, AI move, and game logic.
import React, { useState, useEffect } from "react";
import O from "./TicTacToeAssets/O.png"; // Import image for O symbol
import X from "./TicTacToeAssets/X.png"; // Import image for X symbol

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill("")); // State for the Tic Tac Toe board
  const [isXTurn, setIsXTurn] = useState(true); // State to track if it's X's turn
  const [status, setStatus] = useState("Your move!"); // State for game status messages
  const [winner, setWinner] = useState(null); // State to track the winner

  // Function to handle player's move or AI's move
  const handleClick = (index) => {
    // If the cell is already filled or there's a winner, return
    if (board[index] !== "" || winner) return;

    const newBoard = board.slice(); // Create a copy of the board
    newBoard[index] = isXTurn ? "X" : "O"; // Place X or O based on whose turn it is
    setBoard(newBoard); // Update the board state

    const win = checkWinner(newBoard); // Check if there's a winner
    if (win) {
      setWinner(win); // Set the winner
      setStatus(win === "X" ? "You won!!" : "You lost... it's ok"); // Update status message
    } else if (newBoard.every((cell) => cell !== "")) {
      setStatus("It's a tie!"); // If all cells are filled and no winner, it's a tie
    } else {
      setIsXTurn(!isXTurn); // Switch turns between X and O
      setStatus(isXTurn ? "AI is thinking..." : "Your move!"); // Update status message
    }
  };

  // Function for AI's move
  const AImove = () => {
    if (isXTurn || winner) return; // If it's X's turn or there's a winner, return

    let move;
    // Choose a random move until finding an empty cell
    do {
      move = Math.floor(Math.random() * 9);
    } while (board[move] !== "");

    handleClick(move); // Perform the AI's move
  };

  // Function to check for a winner based on current board configuration
  const checkWinner = (board) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Iterate through winning combinations and check if any match
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner (X or O)
      }
    }
    return null; // Return null if there's no winner
  };

  // Function to reset the game to its initial state
  const resetGame = () => {
    setBoard(Array(9).fill("")); // Reset the board
    setIsXTurn(true); // Set X to start first
    setStatus("Your move!"); // Reset status message
    setWinner(null); // Reset winner
  };

  // Effect to handle AI's move when it's AI's turn and there's no winner
  useEffect(() => {
    if (!isXTurn && !winner) {
      const timer = setTimeout(() => {
        AImove(); // Call AI's move after a delay
      }, 1000);
      return () => clearTimeout(timer); // Clear timeout when component unmounts or dependencies change
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isXTurn, winner]);

  return (
    <>
      <div className="flex flex-col ">
        {/* Tic Tac Toe board rendered with dynamic cell content based on board state */}
        <div className="grid grid-cols-3 gap-2 bg-[#DEE9D3] mt-2 min-w-[400px] min-h-[400px]">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index}>
              {/* Render X or O images or empty cells based on board state */}
              {board[index] === "X" ? (
                <img
                  alt="TicTacToe square"
                  src={X}
                  className="w-32 h-32 bg-white "
                  value={index}
                  key={index}
                />
              ) : board[index] === "O" ? (
                <img
                  alt="TicTacToe square"
                  src={O}
                  className="w-32 h-32  bg-white "
                  value={index}
                  key={index}
                />
              ) : (
                <div
                  alt="TicTacToe square"
                  className="w-32 h-32  bg-white  text-2xl font-bold "
                  key={index}
                >
                  {/* Render clickable buttons for player's moves */}
                  {isXTurn ? (
                    <button
                      className="w-full h-full bg-white hover:bg-[#DEE9D3] rounded-none hover:scale-100"
                      value={index}
                      key={index}
                      onClick={() => handleClick(index)}
                    ></button>
                  ) : (
                    <button
                      className="w-full h-full bg-white  hover:bg-[#DEE9D3] rounded-none hover:scale-100"
                      key={index}
                      value={index}
                    ></button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Button to reset the game when there's a winner or tie */}
        {winner || status === "It's a tie!" ? (
          <button
            key="again"
            className="my-2 px-4 py-2 bg-[#DEE9D3] shadow-inner text-[#555] font-bold rounded"
            onClick={resetGame}
          >
            Play Again?
          </button>
        ) : (
          <div className="my-2 h-[40px]"></div>
        )}
      </div>
    </>
  );
};

export default TicTacToe;
