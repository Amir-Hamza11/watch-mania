import React, { useEffect, useState } from 'react'
import { ApiGetTrending } from '../../components/Strings'
import Card from '../../components/card/Card'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import './Trending.css'

const Trending = () => {

    const [response, setResponse] = useState(null)
    const scrollRef = React.useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === "left") {
            current.scrollLeft -= 362;
        }
        if (direction === "right") {
            current.scrollLeft += 362;
        }
    }

    useEffect(() => {
        ApiGetTrending('trending/all/day').then((r) => {
            setResponse(r)
        })
    }, [])

    console.log(response);

    return (
        <div className='app__trending' >

            <div className='app__trending-carousel' ref={scrollRef}  >
                {response && response.results.map((item, index) => {
                    return (
                        <Card
                            key={item.poster_path}
                            poster={item.poster_path}
                            name={item.original_title || item.original_name}
                            vote={item.vote_average}
                        />
                    )

                })}
            </div>
            {response && <div className='app__trending-btn ' >
                <button className='custom__scrollbtn' onClick={() => scroll('left')} ><MdArrowBackIosNew /></button>
                <button className='custom__scrollbtn' onClick={() => scroll('right')} ><MdArrowForwardIos /></button>
            </div>}

        </div>
    )
}

export default Trending