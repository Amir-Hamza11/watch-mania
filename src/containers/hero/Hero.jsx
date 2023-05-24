import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ApiGetTrending } from '../../components/Strings'
import { useNavigate } from 'react-router';


import './Hero.css'

const Hero = () => {

    const [response, setResponse] = useState(null)
    const [random, setRandom] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        setRandom(Math.floor(Math.random() * 20))

        ApiGetTrending('trending/all/day').then((r) => {
            setResponse(r)
        })

    }, [])

    const infoClick = (media_type, id) => {
        navigate(`/media/${media_type}/${id}`)
    }



    console.log(random, response);

    return (
        <div className='app__hero' >
            {
                response && response.results.filter((item, index) => index === random).map((item) => {
                    return (
                        <div key={item.id}>
                            <div className='app__hero-backdrop' key={item.backdrop_path} >
                                <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="img" />
                            </div>
                            <div className='app__hero-content' >
                                <p>{item.title ? item.title : item.name}</p>
                                <p>
                                    {item.release_date ?
                                        item.release_date.substring(0, 4) :
                                        item.first_air_date.substring(0, 4)}
                                </p>
                                <p>{`${item.overview.substring(0, 200)}...`} </p>

                                <button onClick={() => infoClick(item.media_type, item.id)} >INFO</button>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Hero