import { useState } from "react"

export function TwitterfollowCard({ functionUserName, userName, name, follow }) {
  // se asigna una variable para leer el estado y otra para cambiarlo
  const [isFollowing, setIsFollowing] = useState(follow)
  const text = isFollowing ? 'Siguiendo' : 'seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button '
  const handleClick = () => {
    setIsFollowing(!isFollowing) // invierte el valor
  }
  console.log('se renderiso:', userName)

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt="Johzuto"
          src={`https://unavatar.io/x/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{functionUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-follow">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}