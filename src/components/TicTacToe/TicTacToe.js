import React, { useState, useEffect } from "react";
import O from "./TicTacToeAssets/O.png";
import X from "./TicTacToeAssets/X.png";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("Your move!");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] !== "" || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
      setStatus(win === "X" ? "You won!!" : "You lost... it's ok");
    } else if (newBoard.every((cell) => cell !== "")) {
      setStatus("It's a tie!");
    } else {
      setIsXTurn(!isXTurn);
      setStatus(isXTurn ? "AI is thinking..." : "Your move!");
    }
  };

  const AImove = () => {
    if (isXTurn || winner) return;

    let move;
    do {
      move = Math.floor(Math.random() * 9);
    } while (board[move] !== "");

    handleClick(move);
  };

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

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
    setStatus("Your move!");
    setWinner(null);
  };

  useEffect(() => {
    if (!isXTurn && !winner) {
      const timer = setTimeout(() => {
        AImove();
      }, 1000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isXTurn, winner]);

  return (
    <>
      <div className="flex flex-col mx-auto ">
        <div className="text-lg">{status}</div>
        <div className="grid grid-cols-3 gap-2 bg-[#DEE9D3] ">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index}>
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
                  key={index}>
                  {isXTurn ? (
                    <button
                      className="w-full h-full bg-white hover:bg-[#DEE9D3] rounded-none hover:scale-100"
                      value={index}
                      key={index}
                      onClick={() => handleClick(index)}></button>
                  ) : (
                    <button
                      className="w-full h-full bg-white  hover:bg-[#DEE9D3] rounded-none hover:scale-100"
                      key={index}
                      value={index}></button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        {winner || status === "It's a tie!" ? (
          <button
            key="again"
            className="my-2 px-4 py-2 bg-[#DEE9D3] shadow-inner text-[#555] font-bold rounded"
            onClick={resetGame}>
            Play Again!
          </button>
        ) : (
          <div className="my-2 h-[40px]"></div>
        )}
      </div>
    </>
  );
};

export default TicTacToe;
