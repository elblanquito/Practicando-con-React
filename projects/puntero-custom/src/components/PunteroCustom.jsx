import './PunteroCustom.css'
import { useEffect, useState } from 'react'

export const PunteroCustom = () => {
  const [visible, setVisible] = useState(false)
  const [positionMause, setPositionMause] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPositionMause({ x: clientX, y: clientY })
      setVisible(true) // mostrar el puntero al mover el mouse dentro de la ventana
    }

    const handleLeave = () => {
      setVisible(false) // ocultar el puntero al salir de la ventana
    }

    window.addEventListener('pointermove', handleMove)
    document.addEventListener('pointerleave', handleLeave)

    // se ejecuta:
    // --> cuando el componente se desmonta
    // --> al cambiar las dependencias, antes de
    //     ejecutar el efecto de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove) // limpiar suscripcion (importante)
      document.removeEventListener('pointerleave', handleLeave)
    }
  }, []) // se ejecuta al montar o desmontar el componente

  useEffect(() => {
    document.body.classList.toggle('sin-cursor', visible)
    return () => {
      document.body.classList.remove('sin-cursor')
    }
  }, [visible]) // se ejecuta cuando "visible" cambia

  return (
    <div
      className='punteroCustom'
      style={{
        left: `${positionMause.x}px`,
        top: `${positionMause.y}px`,
        display: visible ? 'block' : 'none'
      }}
    />
  )
}
