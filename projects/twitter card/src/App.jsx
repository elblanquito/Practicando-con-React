import { useState } from 'react'
import './App.css'
/* importar componente 🏗️ */
import { TwitterfollowCard } from './TwitterFollowCard'

/* esta funcion la pasaremos para que sea usada desde follow card */
const functionTest = (userName) => `@${userName}`

/* informacion 📑 */
const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    follow: true
  },
    {
    userName: 'jashly_x',
    name: 'Jashly',
    follow: false
  },
    {
    userName: 'ElRichMC',
    name: 'Señor de la Bedrock',
    follow: true
  },
    {
    userName: 'blanco_la_seta',
    name: 'Miguel Angel Duran',
    follow: false
  }
]

export function App() {
  return (
    <section className='App'>
      {
        users.map(({userName, name, follow}) =>(
          <TwitterfollowCard
            key={userName}
            functionUserName={functionTest}
            userName={userName}
            name = {name}
            follow={follow}
          />
        ))
      }
    </section>
  )
}