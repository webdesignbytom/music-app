import React from 'react';
import ContactForm from '../components/contact/ContactForm';
// Components
import Navbar from '../components/nav/Navbar';
// React icons
import { MdEmail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import ContactFooter from '../components/footer/ContactFooter';

function ContactPage() {
  return (
    <div className='bg-white dark:bg-black dark:text-white h-screen lg:max-h-screen max-w-[100vw] overflow-x-hidden lg:grid'>
      <Navbar />
      <div className='text-black dark:text-white flex justify-center text-3xl font-semibold overflow-hidden'>
        <h1>Contact</h1>
      </div>
      <main className='grid lg:grid-cols-2 mx-4 lg:mx-20 lg:gap-10 lg:mb-16'>
        {/* Info */}
        <section className='grid h-min items-center lg:mb-auto lg:mx-20'>
          <article className='bg-black text-black h-min rounded my-8 p-2 overflow-hidden'>
            <div className='bg-black text-black h-min rounded border-white border-2 border-solid p-6 overflow-hidden'>
              <div className='bg-white border-2 border-solid border-slate-500 h-min rounded p-4 overflow-hidden'>
                <div className='text-center mt-4'>
                  <h1 className='text-2xl font-bold mb-2'>Contact Stuart</h1>
                </div>
                <div className='sm:px-6'>
                  <p className='px-2 pt-2 pb-6 md:mx-6 lg:mx-4 md:px-10 overflow-hidden'>
                    If you need anything at all, just get in touch. Either
                    contact me throught the form provided, or use one the email
                    address or phone number below, and i will respond as soon as
                    possible.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <div className='grid grid-cols-2 gap-2'>
            <a
              href='mailto:stuartturnbull@hotmail.com'
              rel='noreferrer'
              target='_blank'
              className='text-xs md:text-base'
            >
              <article className='grid bg-main-colour rounded-xl text-center px-2 md:px-4 py-4 md:py-8 w-full group hover:bg-blue-400 cursor-pointer hover:scale-105 hover:text-white outline-2 outline outline-black'>
                <div className='grid justify-center'>
                  <div className='grid justify-center'>
                    <MdEmail size={30} />
                  </div>
                  <h4 className='text-sm font-semibold md:text-base'>Email</h4>
                  <h5 className='hidden text-xs md:block md:text-xs break-words overflow-hidden'>
                    stuartturnbull @hotmail.com
                  </h5>
                  <h5 className='text-xs md:hidden md:text-xs break-words overflow-hidden'>
                    stuartturnbull <br />
                    @hotmail.com
                  </h5>
                  Send a email
                </div>
              </article>
            </a>

            <a
              href='https://wa.me/+447398776027'
              rel='noreferrer'
              target='_blank'
              className='text-xs md:text-base'
            >
              <article className='bg-main-colour rounded-xl text-center px-2 md:px-4 py-4 md:py-8 w-full group hover:bg-blue-400 cursor-pointer hover:scale-105 hover:text-white outline-2 outline outline-black h-full'>
                <div className='grid justify-center'>
                  <div className='grid justify-center'>
                    <ImWhatsapp size={30} />
                  </div>
                  <h4 className='text-sm font-semibold md:text-base'>
                    WhatsApp
                  </h4>
                  <h5 className='text-xs md:text-xs'>Chat any time</h5>
                  Send a message
                </div>
              </article>
            </a>
          </div>
        </section>

        {/* Inputs */}
        <section className='mb-auto lg:mx-20 mt-4'>
          <ContactForm />
        </section>
      </main>

      <ContactFooter />
    </div>
  );
}

export default ContactPage;
