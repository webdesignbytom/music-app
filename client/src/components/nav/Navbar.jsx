import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const toggleNavbar = () => {
    console.log('toggle');
  };

  return (
    <div className='h-16 w-full px-6 lg:px-4 grid grid-flow-col justify-between items-center bg-slate-200 dark:bg-black text-black dark:text-white'>
      {/* Logo */}
      <section>
        <div className='cursor-pointer transition ease-in-out duration-200 text-colour-med hover:text-slate-500 active:text-slate-500 focus:text-slate-500'>
          <Link to='/'>Stuart Turnbull</Link>
        </div>
      </section>
      {/* Phone nav */}
      <nav
        onClick={() => {
          toggleNavbar();
        }}
        className='md:hidden'
      >
        <span className='cursor-pointer text-white hover:text-hover-grey'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6 transition duration-200 ease-in-out select-none focus:scale-125 active:scale-125'
            data-te-animation-init
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </span>
      </nav>

      {/* Large screen nav */}
      <nav className='hidden md:block'>
        <ul className='flex gap-4'>
          <li className='cursor-pointer transition ease-in-out duration-200 text-colour-med hover:text-slate-500 active:text-slate-500 focus:text-slate-500'>
            <Link to='/'>Home</Link>
          </li>
          <li className='cursor-pointer transition ease-in-out duration-200 text-colour-med hover:text-slate-500 active:text-slate-500'>
            <Link to='/about'>About</Link>
          </li>
          <li className='cursor-pointer transition ease-in-out duration-200 text-colour-med hover:text-slate-500 active:text-slate-500'>
            <Link to='/media'>Media</Link>
          </li>
          <li className='cursor-pointer transition ease-in-out duration-200 text-colour-med hover:text-slate-500 active:text-slate-500'>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li className='cursor-pointer transition ease-in-out duration-200 text-colour-med hover:text-slate-500 active:text-slate-500'>
            <Link to='/events'>Events</Link>
          </li>
          <li className='cursor-pointer transition ease-in-out duration-200 text-colour-med hover:text-slate-500 active:text-slate-500'>
            <Link to='/reviews'>Reviews</Link>
          </li>
          <li className='cursor-pointer transition ease-in-out duration-200 text-colour-med hover:text-slate-500 active:text-slate-500'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
