import React from 'react';
import Navbar from '../components/nav/Navbar';
import ReviewItem from '../components/reviews/ReviewItem';
// Images
import ReviewImage from '../assets/img/reviews.jpg';
import StarsImage from '../assets/img/stars.png';
// Data
import { reviewData } from '../utils/Data';

function ReviewsPage() {
  document.title = 'Reviews || Stuart Turnbull';

  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <Navbar />
      <section className='mx-2 my-8'>
        <section className='lg:mx-20'>
          <img
            src={ReviewImage}
            className='min-h-[300px] object-cover'
            alt='reviews'
          />
        </section>
        <main className='my-2'>
          <section>
            <p className='p-2 text-center lg:mx-8'>
              <span className='font-semibold'>After</span> years devoted to and
              loving music, Stuarts passion and skills have earned praise from
              musicians of high standing around the world. Playing with,
              producing, or in the audience Stuart's talents have been well
              recived by all.
            </p>
          </section>
          <section className='lg:flex lg:justify-between lg:mx-10 items-center'>
            <div className='flex justify-center'>
              <img src={StarsImage} className='h-[100px]' alt='review star' />
            </div>
            <h2 className='text-2xl p-4'>Acknowledgements</h2>
            <img
              src={StarsImage}
              className='h-[100px] hidden lg:block'
              alt='review star'
            />
          </section>

          <section className='mx-4'>
            <ul className='m-1 grid grid-cols-1 lg:grid-cols-2 gap-4'>
              {reviewData.map((review, index) => {
                return <ReviewItem key={index} review={review} />;
              })}
            </ul>
          </section>
        </main>
      </section>
    </div>
  );
}

export default ReviewsPage;
