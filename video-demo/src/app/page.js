// app/page.js
import Head from 'next/head';
import VideoPlayer from '@/app/components/VideoPlayer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Video Demo</title>
        <meta name="description" content="A simple Next.js app to display videos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Video Demo</h1>
        <VideoPlayer
          src="./same.mp4" // Replace with the path to your video file
          type="video/mp4"
        />
      </main>

      <footer>
        <p>Powered by Next.js 14</p>
      </footer>
    </div>
  );
}
