// components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ src, type, controls = true, width = '100%', height = 'auto' }) => {
    return (
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
            <video src={src} type={type} controls={controls} width={width} height={height}>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
