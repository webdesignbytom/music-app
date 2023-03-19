import React from 'react';

function AudioItem({ dataItem }) {
  console.log('data', dataItem);
  const { buttonText, pageNum, title, link } = dataItem;

  return (
    <li>
      <section className='flex justify-between items-center max-w-3xl'>
        <button className='bg-slate-400 grid justify-center py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-300 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out w-full max-w-[100px]'>
          {buttonText}
        </button>
        {title}

        <h4>{dataItem.title}</h4>
        <h5>
          {pageNum}{' '}
          <span className='text-blue-500 cursor-pointer'>View Notation</span>
        </h5>
      </section>
    </li>
  );
}

export default AudioItem;
