import React, { useState } from 'react';
// Data
import { videoData } from '../../utils/Data';

function VideoContainer() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(videoData[2].name);
  console.log('videodata', videoData);

  const selectVideo = (event) => {
    event.preventDefault();
    const { id } = event.target;

    setCurrentlyPlaying(videoData[id].name);
  };

  return (
    <section className='max-h-[1400px] overflow-hidden grid p-1 mb-8 border-2 border-black border-solid rounded'>
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
                  
                  className='figrid h-fit duration-300 ease-in-out hover:scale-110 cursor-pointer'
                >
                  <video id={index} className='h-fit m-h-[150px] w-fit' controls>
                    <source src={video.videoData} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                </article>
                <div>
                  <h4 className='leading-4 text-xs px-2'>
                    {video.name}
                  </h4>
                  <h4 className='leading-4 text-xs px-2'>
                    {video.title}
                  </h4>
                  <h4 className='leading-4 text-xs px-2'>
                    {video.artist}
                  </h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <section className='hidden lg:grid text-xl text-center my-4'>
        <h5 className='text-xl font-semibold mb-2'>Currently Selected Video</h5>
        <span className='italic text-sm font-semibold'>{currentlyPlaying}</span>
      </section>
    </section>
  );
}

export default VideoContainer;
