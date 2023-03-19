import React from 'react';
import { GiAngelOutfit } from 'react-icons/gi';

function Footer() {
  return (
    <footer className='min-h-[4rem] w-full mt-16 px-6 lg:px-4 grid items-center bg-slate-400 dark:bg-black text-black dark:text-white overflow-x-hidden'>
      <section className='flex my-4 mx-2 lg:mx-auto lg:w-[50vw] justify-between w-full'>
        <h3>Backers</h3>
        <GiAngelOutfit size={30}/>
        <h3>Angels</h3>
      </section>
      <section className='my-4'>
        Thank you bank
      </section>
    </footer>
  );
}

export default Footer;
