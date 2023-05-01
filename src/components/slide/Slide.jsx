import React from 'react'

import './Slide.css'

const Slide = ({ backdrop, name, poster, vote }) => {
    return (
        <div className='app__slide' >
            <div className='app__slide-backdrop' >
                <img src={`https://image.tmdb.org/t/p/original${backdrop}`} alt="img" />
            </div>
            <div className='app__slide-content'>
                <div className='app__slide-content_card'>
                    <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="img" />
                </div>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Slide