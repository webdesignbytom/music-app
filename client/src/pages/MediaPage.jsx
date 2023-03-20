import React from 'react';
import AudioContainer from '../components/audio/AudioContainer';
// Components
import Navbar from '../components/nav/Navbar';
import VideoContainer from '../components/video/VideoContainer';

function MediaPage() {
  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <Navbar />
      <main className='mx-10 my-4'>
        <div className='my-8 text-center lg:text-left'>
          <h1 className='mb-1 text-2xl font-semibold'>Media</h1>
        </div>

        <section className='my-2 text-xl font-semibold'>
          <h2>Concert Recordings</h2>
        </section>
        <VideoContainer />

        <AudioContainer />
      </main>
    </div>
  );
}

export default MediaPage;
