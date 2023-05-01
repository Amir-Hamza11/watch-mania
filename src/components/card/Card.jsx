import React from 'react'

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import './Card.css'

const Card = ({ poster, name, vote }) => {

    const average_vote = parseFloat(vote.toFixed(1))

    return (
        <div className='app__card' >
            <div className='app__card-img' >
                <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="img" />
                {/* <div className='card-hover' >

                </div> */}
            </div>
            <div className='app__card-content' >
                <div className='vote' >
                <p><span><AiFillStar /></span>{average_vote}</p>
                </div>
                <p>{name}</p>
            </div>

            <div className='app__card-save' >
                <button><BsFillBookmarkPlusFill /></button>
            </div>


        </div>
    )
}

export default Card