import { PunteroCustom } from './components/punterocustom'
import { useState, useEffect } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    document.body.style.cursor = enabled ? 'none' : 'default' // ocultar cursor del sistema cuando el puntero personalizado está habilitado
  }, [enabled]) // se ejecuta cuando "enabled" cambia

  return (
    <>
      {enabled && <PunteroCustom />}
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar cursor personalizado' : 'Activar cursor personalizado'}
      </button>
    </>
  )
}

export default App
