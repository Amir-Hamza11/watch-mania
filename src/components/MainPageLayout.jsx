import React from 'react'
import Navbar from './navbar/Navbar'

const MainPageLayout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default MainPageLayout