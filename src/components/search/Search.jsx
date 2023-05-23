import React from 'react'
import { useNavigate } from 'react-router';
import { AiFillStar } from 'react-icons/ai'

import './Search.css'

const Search = ({ response }) => {

  const navigate = useNavigate();

  const cardClick = (media_type, id) => {
    navigate(`/media/${media_type}/${id}`)
}

  return (
    <div className='app__search' >
      {response.results.map(item => {
        return (
          <div className='app__search__div' key={item.id} >
            <div className='app__search__card-wrapper' onClick={()=>cardClick(item.media_type, item.id)} >
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="search_card" />
            </div>

            <div className='app__search__content' >
              <p>{item.name ? item.name : item.original_title}</p>

              <div className='vote' >
                <p><span><AiFillStar /></span>{item.vote_average? item.vote_average.toFixed(1): 0.0}</p>
              </div>

              <p>{item.release_date?`Release Date : ${item.release_date}`: `First Aired : ${item.first_air_date}`}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Search