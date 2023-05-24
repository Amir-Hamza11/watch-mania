import React, { useEffect, useState } from 'react'
import { ApiGetTrending } from '../../components/Strings'
import Card from '../../components/card/Card'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import './Trending.css'
import Title from '../../components/title/Title';

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

    // console.log(response);

    return (
        <div className='app__trending' >
            {response && <Title title='Trending' />}

            <button className='custom__scrollbtn custom__scrollbtn-trending left' onClick={() => scroll('left')} ><MdArrowBackIosNew /></button>
            <div className='app__trending-carousel' ref={scrollRef}  >

                {response && response.results.map((item) => {
                    return (
                        <Card
                            key={item.poster_path}
                            poster={item.poster_path}
                            name={item.original_title || item.original_name}
                            vote={item.vote_average}
                            id={item.id}
                            media_type={item.media_type}
                        />
                    )

                })}

            </div>
            <button className='custom__scrollbtn custom__scrollbtn-trending right' onClick={() => scroll('right')} >
                <MdArrowForwardIos />
            </button>
            {/* {response && <div className='app__trending-btn ' >
            </div>} */}

        </div>
    )
}

export default Trending