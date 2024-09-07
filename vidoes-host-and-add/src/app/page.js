import sample from '../../public/beach.mp4'
// import NextConfig from '../../next.config.mjs';
// import NextVideo from 'next-video'

// export default function Home() {
//   return (
//     <div>
//       <p>sk</p>
//       <NextVideo src={sample} autoPlay={false} controls={false}></NextVideo>
//     </div>
//   );
// }

export default function Page() {
  return (
    <iframe
      src="https://www.youtube.com/watch?v=ybNNTXnQyko"
      frameborder="0"
      allowfullscreen
    />
  )
}