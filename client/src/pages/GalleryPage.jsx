import React from 'react';
// Components
import Navbar from '../components/nav/Navbar';

function GalleryPage() {
  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <Navbar />
      <main className='mx-10 my-4'>
        <div className='my-8 text-center lg:text-left'>
          <h1 className='mb-1 text-2xl font-semibold'>Gallery</h1>
          <h2>Performances from around the world</h2>
        </div>

        <section>
          {/* First concert */}
          <section>
            <article className='flex justify-between'>
              <h3 className='text-xl font-semibold'>
                English Chamber Orchestra
              </h3>
              <h4 className='text-xl font-semibold'>Cadogan Hall - 2022</h4>
            </article>
            <section>Galllery</section>
          </section>

          {/* Second concert */}
          <section>
            <article className='flex justify-between'>
              <h3 className='text-xl font-semibold'>Kansas City Symphony</h3>
              <h4 className='text-xl font-semibold'>2022</h4>
            </article>
            <section>Galllery</section>
          </section>

          {/* Third concert */}
          <section>
            <article className='flex justify-between'>
              <h3 className='text-xl font-semibold'>
                The London Philharmonic Orchestra
              </h3>
              <h4 className='text-xl font-semibold'>2022</h4>
            </article>
            <section>Galllery</section>
          </section>

          {/* Forth concert */}
          <section>
            <article className='flex justify-between'>
              <h3 className='text-xl font-semibold'>BBC singers concert</h3>
              <h4 className='text-xl font-semibold'>
                Hull - UK City of Culture - 2019
              </h4>
            </article>
            <section>Galllery</section>
          </section>

          {/* Fifth concert */}
          <section>
            <article className='flex justify-between'>
              <h3 className='text-xl font-semibold'>
                BBC Scottish Symphony Orchestra
              </h3>
              <h4 className='text-xl font-semibold'>2019</h4>
            </article>
            <section>Galllery</section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default GalleryPage;
