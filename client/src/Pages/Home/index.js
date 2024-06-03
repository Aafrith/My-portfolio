import React from 'react'
import Header from '../../components/Header'
import Intro from './intro'

function Home() {
  return (
    <div className='bg-primary px-40'>
      <Header/>
      <Intro/>
    </div>
  )
}

export default Home