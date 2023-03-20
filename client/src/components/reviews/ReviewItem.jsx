import React from 'react';

function ReviewItem({ review }) {
  console.log('review', review);
  const { content, name, position } = review;
  return (
    <li className='border-solid border-2 dark:border-white border-black dark:text-white mx-4'>
      <article>
        <div className='flex justify-between py-1 px-2 bg-slate-200 dark:bg-slate-700'>
          <h3 className='font-semibold'>{name}</h3>
          <h4 className='italic'>{position}</h4>
        </div>
        <div className='border-solid border-t-2 border-black dark:border-white py-1 px-2'>
          <p>{content}</p>
        </div>
      </article>
    </li>
  );
}

export default ReviewItem;
