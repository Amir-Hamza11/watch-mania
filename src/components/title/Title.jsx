import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

import './Title.css'

const Title = ({ title }) => {
    return (
        <div className='app__title' >
            <span></span>
            <p>{title}</p>
            <div><MdArrowForwardIos /></div>
        </div>
    )
}

export default Title