import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ApiGetMedia, ApiGetVideos } from '../../../components/Strings'
import { AiFillStar } from "react-icons/ai";

import './Media.css'
import play_button from '../../../play-button.png'
import Title from '../../../components/title/Title';
import Video from '../../../components/video/Video';
import MainPageLayout from '../../../components/MainPageLayout';

const Media = () => {

    const { id, media_type } = useParams()
    const [response, setResponse] = useState()
    const [videos, setVideos] = useState()
    const [visible, setVisible] = useState(false)
    const [video_id, setVideo_id] = useState('')

    useEffect(() => {
        ApiGetMedia(`${media_type}/${id}`).then(r => setResponse(r))
        ApiGetVideos(`${media_type}/${id}`).then(r => setVideos(r))

    }, [id, media_type])


    const videoClick = () => {
        setVideo_id(videos.results.filter(item => item.type === "Trailer")[0].key)
        setVisible(p => !p)
    }

    // console.log(response);
    // console.log(videos);
    // console.log("video_id", video_id);

    // const average_vote = parseFloat(response.vote_average.toFixed(1));

    return (
        <MainPageLayout>
            <div className='app__media' >
                <div className='app__media-hero'>
                    <div className='app__media-img_container' >
                        {response && <img src={`https://image.tmdb.org/t/p/original${response.backdrop_path}`}
                            alt="Backdrop_img" />}
                    </div>

                    <div className='app__media-content' >
                        <div className='app__media-card'>
                            {response && <img src={`https://image.tmdb.org/t/p/original${response.poster_path}`}
                                alt="Backdrop_img" />}
                        </div>
                        {response && <div className='app__media-text' >
                            <p className='media__title' >{response.title ? response.title : response.name}</p>
                            <div className='app__media-text_vote' >
                                <p><span><AiFillStar /></span>{response.vote_average.toFixed(1)}</p>
                            </div>

                            <div className='app__media-genre_container' >
                                {response.genres.map((item) => {
                                    return (
                                        <div className='app__media-genre' key={item.name} >
                                            <p>{item.name}</p>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className='app__media-release' >
                                <p>{response.release_date ?
                                    `Release Date : ${response.release_date}` :
                                    `First Aired : ${response.first_air_date}`}
                                </p>
                            </div>
                        </div>}

                    </div>
                </div>

                <div className='app__media-body' >
                    {response && <div className='trailers' >
                        <Title title="Trailer" />
                        <div className='video_container'  >
                            <div className='video_container-button' onClick={videoClick} >
                                <img src={`https://image.tmdb.org/t/p/original${response.backdrop_path}`}
                                    alt="Video_poster" />
                                <img src={play_button} alt="play_button" />
                            </div>
                            <div className='video_container-div' >
                                <Video visible={visible} video_title="Trailers" video_id={video_id} />
                            </div>
                        </div>
                    </div>}

                </div>
            </div>
        </MainPageLayout>
    )
}

export default Media