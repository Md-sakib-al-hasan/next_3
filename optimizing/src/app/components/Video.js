// components/Video.js

export default function Video() {
    return (
        <div>
            <video width="640" height="360" controls>
                <source src="./video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video width="640" height="360" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

    );
}
