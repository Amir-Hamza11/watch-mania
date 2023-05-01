import React from 'react'
import { FaHome } from "react-icons/fa";

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='app__navbar' >
        <div>
            <button><FaHome/></button>
        </div>
    </div>
  )
}

export default Navbar