import React from 'react';

function AudioItem({ dataItem }) {
  console.log('data', dataItem);
  const { buttonText, pageNum, title, link, audio } = dataItem;

  return (
    <li className='w-full'>
      <section className='w-full grid md:grid md:grid-cols-reg md:gap-10 items-center p-1'>
        <div className='w-full flex'>
          <audio controls className='w-full'><source src={audio} type="audio/mp3" /></audio>
        </div>

        <section className='flex justify-between md:w-full'>
          <h4 className=''>{title}</h4>
          <h5 className='text-left'>Pages: {pageNum}</h5>
          <a href='/' className='text-blue-500 cursor-pointer'>
            View Notation
          </a>
        </section>
      </section>
    </li>
  );
}

export default AudioItem;
