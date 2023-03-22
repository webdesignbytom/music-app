import React from 'react';
import { GiAngelOutfit } from 'react-icons/gi';

function Footer() {
  return (
    <footer className='min-h-[4rem] w-full mt-16 px-6 lg:px-4 grid items-center bg-slate-400 dark:bg-black text-black dark:text-white overflow-x-hidden'>
      <section className='flex my-4 md:mx-2 lg:mx-auto lg:w-[50vw] pt-4 justify-between items-center w-full'>
        <h3 className='text-xl font-medium text-white'>Backers</h3>
        <GiAngelOutfit size={50} className='text-white' />
        <h3 className='text-xl font-medium text-white'>Angels</h3>
      </section>
      <hr class='h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700' />{' '}
      <section className='my-4 grid md:grid md:grid-cols-reg items-center mx-6'>
        <div className='p-2 flex justify-center'>
          <a href='https://www.hoaresbank.co.uk/'>
            <img
              src='https://www.hoaresbank.co.uk/themes/custom/chc__theme/assets/images/logo.svg'
              alt='Hoares bank'
              className='w-auto object-cover'
            />
          </a>
        </div>
        <div className='p-2 text-center justify-center'>
          <p className='text-sm grid'>
            I would like to mention Hoare and Co to whom I owe a huge debt of
            gratitde; for their kindness over many years - funding many projects
            which have led to futher exciting opportunities.{' '}
            <span>Thank you for believing in me.</span>
            <a
              href='https://www.hoaresbank.co.uk/'
              className='text-blue-500 font-semibold'
            >
              Visit Hoares Bank
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
