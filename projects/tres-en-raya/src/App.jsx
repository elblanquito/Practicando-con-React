import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square.jsx"
import { TURNS } from "./constans.js"
import { checkWinner, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"



function App() {
  //console.log('render 📦')
  // array con 9 elementos vacios
  const [board, setBoard] = useState(
    Array(3).fill(null).map(() => Array(3).fill(null))
  )
  const [turn, setTurn] = useState(Math.random() < 0.5 ? TURNS.X : TURNS.O)
  const [winner, setWinner] = useState(null) // no hay ganador aun

  const resetGame = () => {
    setBoard(Array(3).fill(null).map(() => Array(3).fill(null)))
    setTurn(Math.random() < 0.5 ? TURNS.X : TURNS.O)
    setWinner(null)
  }

  const updateBoard = (position) => {
    if (board[position[0]][position[1]] || winner) return // no sobre escribir || no seguir jugando
    const newBoard = board.map(row => [...row]) // copia profunda del board
    newBoard[position[0]][position[1]] = turn // modificamos la copia
    setBoard(newBoard) // actualizamos el board orginal
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X // copiar el turno contrario
    setTurn(newTurn) // cambiar el turno 
    const newWinner = checkWinner(3, turn, newBoard)
    if (newWinner) {
      confetti()
      setWinner(turn)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return(
      <main className="board">
        <h1>Tres en raya</h1>
        <button onClick={resetGame}>Empezar de nuevo</button>
        <section className="game">
          {
            board.map((row, rowIndex)=> {
              return row.map((column, columnIndex) => {
                return (
                  <Square
                    key={`${rowIndex}-${columnIndex}`}  
                    position={[rowIndex, columnIndex]}
                    updateboard={updateBoard}
                  >
                    {board[rowIndex][columnIndex]}
                  </Square>
                )
              })
            })
          }
        </section>
        <section className="turn">
          <Square isSelected={turn == TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn == TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
        <WinnerModal winner={winner} resetGame={resetGame}/>
      </main>
    )
}

export default App
