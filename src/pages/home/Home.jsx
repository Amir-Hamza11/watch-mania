import React from 'react'
import Trending from '../../containers/trending/Trending'
import MainPageLayout from '../../components/MainPageLayout'
import Hero from '../../containers/hero/Hero'

import './Home.css'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <MainPageLayout>
      <div className='app__home' >
        <Navbar />
        <Hero />
        <Trending />
      </div>
    </MainPageLayout>
  )
}

export default Home