export const saveGameToStorage = (board, turn) => {
  if (board == null || turn == null) return
  // guardar patida
  localStorage.setItem('board', JSON.stringify(board))
  localStorage.setItem('turn', JSON.stringify(turn))
}

export const resetGameToStorage = () => {
  localStorage.removeItem('board')
  localStorage.removeItem('turn')
}

export const getGameFromStorage = (item) => {
  try {
    const itemStored = localStorage.getItem(item)
    return itemStored ? JSON.parse(itemStored) : null
  } catch (error) {
    console.error(`Error al leer "${item}" del localStorage:`, error)
    return null
  }
}