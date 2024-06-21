// src/components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoUrl = queryParams.get('videoUrl');

  return (
    <div className="video-player">
    {videoUrl ? (
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
      ) : (
        <p>Invalid video URL</p>
      )}    </div>
    );
};

export default VideoPlayer;
