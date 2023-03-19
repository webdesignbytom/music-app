import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Icons
import { RxHamburgerMenu } from 'react-icons/rx';

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const toggleNavbar = () => {
    console.log('toggle');
    setOpenNav(!openNav);
  };

  return (
    <>
      <div className='h-16 mx-auto w-full px-6 lg:px-4 grid grid-flow-col justify-between items-center bg-white dark:bg-black text-black dark:text-white max-w-full overflow-x-hidden border-b-2 border-black border-solid'>
        {/* Logo */}
        <section>
          <div className='cursor-pointer transition ease-in-out duration-200 text-colour-med hover:text-slate-500 active:text-slate-500 focus:text-slate-500'>
            <Link to='/' className='font-semibold'>
              Stuart Turnbull
            </Link>
          </div>
        </section>
        {/* Phone nav */}
        <nav
          onClick={() => {
            toggleNavbar();
          }}
          className='md:hidden'
        >
          <span className='cursor-pointer'>
            <RxHamburgerMenu size={30} className='hover:text-slate-600 transition duration-200 ease-in-out select-none focus:scale-125 active:scale-125' />
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

      {openNav && (
        <section className='lg:hidden absolute z-10 bg-white dark:bg-black w-full overflow-hidden border-2 border-black border-solid'>
          <ul className='p-2 grid text-gray-700 text-xl text-center py-8 gap-4'>
            <li className='cursor-pointer hover:text-black dark:hover:text-white transition duration-200 ease-in-out select-none focus:scale-125 active:scale-125'>
              <Link to='/'>Home</Link>
            </li>
             <li className='cursor-pointer hover:text-black dark:hover:text-white transition duration-200 ease-in-out select-none focus:scale-125 active:scale-125'>
              <Link to='/about'>About</Link>
            </li>
             <li className='cursor-pointer hover:text-black dark:hover:text-white'>
              <Link to='/media'>Media</Link>
            </li>
             <li className='cursor-pointer hover:text-black dark:hover:text-white'>
              <Link to='/gallery'>Gallery</Link>
            </li>
             <li className='cursor-pointer hover:text-black dark:hover:text-white'>
              <Link to='/events'>Events</Link>
            </li>
             <li className='cursor-pointer hover:text-black dark:hover:text-white'>
              <Link to='/reviews'>Reviews</Link>
            </li>
             <li className='cursor-pointer hover:text-black dark:hover:text-white'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}

export default Navbar;
