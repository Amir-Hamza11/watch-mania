import React from 'react'

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import './Card.css'
import { useNavigate } from 'react-router';

const Card = ({ poster, name, vote, id, media_type }) => {

    // const average_vote = parseFloat(vote.toFixed(1));
    const average_vote = vote.toFixed(1);
    const navigate = useNavigate();

    const cardClick = () => {
        navigate(`/media/${media_type}/${id}`)
    }

    return (
        <div className='app__card' >

            <div className='app__card-img' onClick={cardClick} >
                <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="img" />
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