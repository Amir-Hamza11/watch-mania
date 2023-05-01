import React from 'react'
import Trending from '../../containers/trending/Trending'
import MainPageLayout from '../../components/MainPageLayout'

import './Home.css'
import Swiper from '../../containers/swiper/Swiper'

const Home = () => {
  return (
    <MainPageLayout>
    <div className='app__home' >
    <Swiper/>
    <Trending/>
    </div>
    </MainPageLayout>
  )
}

export default Home