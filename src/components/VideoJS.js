import React from 'react';
import VideoPlayer from "react-video-js-player";
import Video from "./video/video1.mp4";
import './Video.css';

export default function VideoJS() {
    const videoSrc = Video
    const thumbnail = './video/thumbnail1.jpg'
    return (
        <div className='App'>
            <VideoPlayer src={videoSrc} poster={thumbnail} width='1080' 
            
            />
        </div>
    )
}
