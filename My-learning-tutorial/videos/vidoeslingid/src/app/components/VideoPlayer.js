import React from 'react';

const VideoPlayer = () => {
    return (
        <div>
            <video controls autoPlay muted width="600">
                <source src="./sk.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
