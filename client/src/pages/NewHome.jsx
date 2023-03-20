import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../components/nav/Navbar';

function NewHome() {
  document.title = 'Stuart Turnbull || Composer';

  return (
    <div className=''>
      <Navbar />
      <section className='grid md:grid-cols-2 h-[calc(100vh-64px)] bg-black max-w-[100vw] object-contain p-2'>
        <section
          className={`bg-[url('../assets/img/homepage.jpeg')] bg-no-repeat bg-cover bg-center grid justify-center items-center`}
        >
          <section className='grid gap-2 bg-[#00000085] p-4 h-fit md:hidden justify-center items-center text-center'>
            <article className='bg-white dark:bg-black text-black dark:text-white py-6 px-4'>
              <h1 className='text-4xl my-2 font-bold'>Stuart Turnbull</h1>
              <h2 className='text-sm font-semibold'>
                COMPOSER - PIANIST - CONDUCTOR
              </h2>
            </article>
            <Link to='/about'>
              <button
                type='submit'
                className='bg-white grid justify-center py-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-semibold text-black dark:text-white dark:bg-black text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out w-full'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                About
              </button>
            </Link>
          </section>
        </section>
        {/* Large screen */}
        <section className='hidden border-solid border-2 border-white dark:border-black md:grid justify-center h-full items-center text-center'>
          <article className='bg-white dark:bg-black text-black dark:text-white py-8 px-6'>
            <h1 className='text-4xl my-2 font-bold'>Stuart Turnbull</h1>
            <h2 className='text-xl font-semibold'>
              COMPOSER - PIANIST - CONDUCTOR
            </h2>
          </article>
        </section>
      </section>
    </div>
  );
}

export default NewHome;
