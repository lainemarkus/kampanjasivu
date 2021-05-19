import React from 'react';
import VideoPlayer from "react-video-js-player"; //npm install --save react-video-js-player
import Video from "./video/video1.mp4";
import './Video.css';
import thumbnail from './video/thumbnail1.jpg'

export default function VideoJS() {
    const videoSrc = Video
    return (
        <div className='App'>
            <VideoPlayer src={videoSrc} poster={thumbnail} width='1080' 
            
            />
        </div>
    )
}
