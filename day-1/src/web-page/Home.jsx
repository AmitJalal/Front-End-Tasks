import './home.css'

import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'

const Home = () => {
  return (
    <div className='home'>
    <Header/>
    <Banner/>
    </div>
  )
}

export default Home