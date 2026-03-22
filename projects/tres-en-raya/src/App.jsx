import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNER = {
  X: 'winner x',
  O: 'winner o',
  DRAW: 'empate'
}


const Square = ({children, isSelected, updateboard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateboard(index)
  }
  
  return (
    <div onClick={handleClick} className={className} key={index}>
      {children}
    </div>
  )
}



function App() {
  const test = [
    'x','x','x',
    'x','x','x',
    'x','x','x'
  ]

  const test2 = ['x','x','x','x','x','x','x','x','x']
  const test3 = ['x',null,null,null,null,null,null,null,null]
  // diferencia de 0,2,3


  // array con 9 elementos vacios
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // no hay ganador aun
  

  const updateBoard = (index) => {
    if (board[index]) return // no sobre escribir
    const newBoard = [...board] // copia del board
    newBoard[index] = turn // modificamos la copia
    setBoard(newBoard) // actualizamos el board orginal

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return(
      <main className="board">
        <h1>Tres en raya</h1>
        <section className="game">
          {
            board.map((_, index)=> {
              return (
                <Square
                  key={index}  
                  index={index}
                  updateboard={updateBoard}
                >
                  {board[index]}
                </Square>
              )
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
      </main>
    )
}

export default App
