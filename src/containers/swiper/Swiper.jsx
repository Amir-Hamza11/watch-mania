import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { ApiGetTrending } from '../../components/Strings'
import Slide from '../../components/slide/Slide'

import './Swiper.css'

const Swiper = () => {

    const [response, setResponse] = useState(null)
    const [slide, setSlide] = useState(0)
    const scrollRef = React.useRef(null)

    console.log(response);

    const scroll = (direction) => {

        if (slide > 0 && direction === "left") {
            setSlide((p) => p - 1)
        }
        if (slide < response.results.length - 1 && direction === "right") {
            setSlide((p) => p + 1)
        }
    }

    useEffect(() => {
        ApiGetTrending('trending/all/day').then((r) => {
            setResponse(r)
        })
    }, [])
    return (
        <div className='app__swiper'>
            {<div className='app__swiper-carausel' ref={scrollRef} >
                {response && response.results.filter((item, index) => index === slide).map((item) => {
                    return (
                        <Slide
                            key={item.poster_path}
                            poster={item.poster_path}
                            name={item.original_title || item.original_name}
                            vote={item.vote_average}
                            backdrop={item.backdrop_path}

                        />
                    )
                })}
            </div>}

            {response && <div className='app__swiper-btn ' >
                <button className='custom__scrollbtn' onClick={() => scroll('left')} ><MdArrowBackIosNew /></button>
                <button className='custom__scrollbtn' onClick={() => scroll('right')} ><MdArrowForwardIos /></button>
            </div>}
        </div>
    )
}

export default Swiper