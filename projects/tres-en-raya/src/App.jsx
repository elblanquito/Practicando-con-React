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

  const test3 = [
    ['x','x','x'],
    [null,null,null],
    [null,null,null]
  ]

  const comprobacion =  (comboLength, turno, matriz) => {
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
  }
  

  comprobacion(3, TURNS.X, test3)

  // diferencia de 0,2,3


  const comprobacionIA = (comboLength, turno) => {
  const rows = test3.length;
  const cols = test3[0].length;

  const directions = [
    [1, 0],  // horizontal
    [0, 1],  // vertical
    [1, 1],  // diagonal ↘
    [1, -1]  // diagonal ↗
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      if (test3[i][j] !== turno) continue;

      for (const [dx, dy] of directions) {

        let count = 1;
        let x = j + dx;
        let y = i + dy;

        while (
          y >= 0 && y < rows &&
          x >= 0 && x < cols &&
          test3[y][x] === turno
        ) {
          count++;
          x += dx;
          y += dy;
        }

        if (count >= comboLength) {
          console.log('GANADOR:', turno);
          return true;
        }
      }
    }
  }

  return false;
};




function App() {
  //console.log('render 📦')
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
