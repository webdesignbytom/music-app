import React from 'react';

function ContactFooter() {
  return (
    <footer className='min-h-[4rem] w-full  mt-16 px-6 lg:px-4 grid items-center bg-slate-400 dark:bg-black text-black dark:text-white overflow-x-hidden'>
      <section className='my-4'>
        <h3 className='text-center'>Website built and maintained by WebDesignsByTom</h3>
        <h4 className='text-center text-blue-500 cursor-pointer text-xl font-semibold'><a href='https://www.webdesignsbytom.com'
              rel='noreferrer'
              target='_blank'>www.webdesignsbytom.com</a></h4>
      </section>
    </footer>
  );
}

export default ContactFooter;
