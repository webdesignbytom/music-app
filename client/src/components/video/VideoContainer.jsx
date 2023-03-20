import React, { useState } from 'react';
// Data
import { videoData } from '../../utils/Data';

function VideoContainer() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(videoData[2].title);
  console.log('videodata', videoData);

  const selectVideo = (event) => {
    event.preventDefault();
    const { id } = event.target;

    setCurrentlyPlaying(videoData[id].title);
  };

  return (
    <section className='grid p-1 mb-8 border-2 border-black border-solid rounded'>
      <div className='grid'>
        <ul className='grid md:grid-cols-3 lg:grid-cols-5'>
          {videoData.map((video, index) => {
            return (
              <li
                onClick={selectVideo}
                className='grid grid-flow-row h-full mb-4'
                key={index}
              >
                <article
                  id={index}
                  className='grid h-[200px] bg-green-300 border-2 border-black border-solid duration-300 ease-in-out hover:scale-110 cursor-pointer'
                >
                  a
                </article>
                <h4 className='h-20 overflow-hidden leading-4 text-xs px-2'>
                  {video.title}
                </h4>
              </li>
            );
          })}
        </ul>
      </div>

      <section className='hidden lg:grid text-xl text-center'>
        <h5 className='text-xl font-semibold mb-2'>Currently Selected Video</h5>
        <span className='italic text-sm font-semibold'>{currentlyPlaying}</span>
      </section>
    </section>
  );
}

export default VideoContainer;
