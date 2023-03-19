import React from 'react';
// Icons
import { BsFillPlayFill } from 'react-icons/bs';

function AudioItem({ dataItem }) {
  console.log('data', dataItem);
  const { buttonText, pageNum, title, link } = dataItem;

  return (
    <li className='w-full'>
      <section className='w-full grid md:flex md:gap-10 items-center p-1'>
        <div className='w-full md:max-w-[125px]'>
          <button className='bg-slate-400 flex w-full items-center justify-between py-1 px-4 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-slate-300 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out'>
            {buttonText}
            <BsFillPlayFill size={22} />
          </button>
        </div>

        <section className='flex'>
          <h4 className=''>{title}</h4>
          <h5>
            {pageNum}{' '}
            <span className='text-blue-500 cursor-pointer pl-5'>View Notation</span>
          </h5>
        </section>
      </section>
    </li>
  );
}

export default AudioItem;
