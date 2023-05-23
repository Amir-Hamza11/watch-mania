import React from 'react'

import './Video.css'

const Video = ({ visible, video_title, video_id }) => {

    console.log(video_id, visible);

    if (!visible) return null;

    return (
        <div className='video' >
            <iframe className='video_frame'
                title={video_title}
                src={`https://www.youtube.com/embed/${video_id}?autoplay=1&mute=1&rel=0`} frameBorder="0"
            />
        </div>
    )
}

export default Video