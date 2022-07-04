import React from 'react'
import './home.scss'
import { Sidebar, Bot } from '../../layout'

const Home = props => {
  const session = JSON.parse(localStorage.getItem('session'))
  return (
      <div className='w-100 h-100 flex'>
        <Sidebar 
          name={session.name}
          surname={session.surname}
          email={session.email}
        />
        <Bot/>
      </div>
  )
}

export default Home