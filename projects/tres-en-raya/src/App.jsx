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


const Square = ({children, isSelected, updateboard, position}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateboard(position)
  }
  
  return (
    <div onClick={handleClick} className={className} key={position}>
      {children}
    </div>
  )
}
const checkWinner =  (comboLength, turno, matriz) => {
  const rows = matriz.length;
  const cols = matriz[0].length;
  const directions = [
    [1, 0],  // horizontal
    [0, 1],  // vertical
    [1, 1],  // diagonal ↘
    [1, -1]  // diagonal ↗
  ];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] !== turno) continue; // se salta el ciclo
      
      // recorre las direcciones
      for (const [dx, dy] of directions) { 
        let combo = 1;
        let x = j + dx; // moverse en horizontal
        let y = i + dy; // moverse en vertical

        while ( // no salir del tablero y que sea el mismo turno
          y >= 0 && y < rows &&
          x >= 0 && x < cols &&
          matriz[y][x] === turno
        ) {
          //sumar combo
          combo++;
          // moverser en la direcccion asignada
          x += dx;
          y += dy;
        }
        if (combo >= comboLength) {
          console.log('GANADOR:', turno);
          return true;
        }
      }

    }
  }
  return null;
}  

function App() {
  //console.log('render 📦')
  // array con 9 elementos vacios
  const [board, setBoard] = useState(
    Array(3).fill(null).map(() => Array(3).fill(null))
  )
  const [turn, setTurn] = useState(Math.random() < 0.5 ? TURNS.X : TURNS.O)
  const [winner, setWinner] = useState(null) // no hay ganador aun

  const reserGame = () => {
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
      setWinner(turn)
    }
  }

  return(
      <main className="board">
        <h1>Tres en raya</h1>
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
        {
          winner != null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner == false 
                    ? 'Empate' 
                    : 'Ganó: ' + winner
                  }
                </h2>
                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={reserGame}>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }
      </main>
    )
}

export default App
