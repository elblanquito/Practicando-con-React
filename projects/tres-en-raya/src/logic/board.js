export const checkWinner =  (comboLength, turno, matriz) => {
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

export const checkEndGame = (newBoard) => {
    // si todas las celdas estan llenas, true
    return newBoard.every(row => row.every(cell => cell !== null)) 
  }
