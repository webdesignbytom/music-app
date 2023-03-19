import React from 'react';
import ContactForm from '../components/contact/ContactForm';
// Components
import Navbar from '../components/nav/Navbar';
// React icons
import { GiRaven } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';

function ContactPage() {
  return (
    <div className='bg-white dark:bg-black dark:text-white h-screen lg:max-h-screen max-w-[100vw] overflow-x-hidden lg:grid'>
      <Navbar />

      <main className='grid lg:grid-cols-2 mx-4 lg:mx-20 lg:gap-10 lg:mb-16'>
        {/* Info */}
        <section className='grid h-min items-center lg:my-auto'>
          <article className='bg-slate-200 h-min rounded py-8 my-8'>
            <div className='text-center mt-4'>
              <h1 className='text-2xl font-bold'>Contact Me!</h1>
            </div>
            <div className='sm:px-6'>
              <p className='px-2 pt-2 pb-6 md:mx-6 lg:mx-4'>
                If you need anything at all, just get in touch. Either contact
                me throught the form provided, or use one the email address or
                phone number below, and i will respond as soon as possible.
              </p>
            </div>
          </article>

          <div className='grid grid-cols-2 gap-2'>
            <article className='grid bg-main-colour rounded-xl text-center px-2 md:px-4 py-4 md:py-8 w-full group hover:bg-blue-400 cursor-pointer hover:scale-105 hover:text-white outline-2 outline outline-slate-200'>
              <div className='grid justify-center'>
                <div className='grid justify-center'>
                  <MdEmail />
                </div>
                <h4 className='text-sm font-semibold md:text-base'>Email</h4>
                <h5 className='text-ss md:text-xs break-words overflow-hidden'>
                  stuartturnbull <br /> @hotmail.com
                </h5>
                <a
                  href='mailto:stuartturnbull@hotmail.com'
                  rel='noreferrer'
                  target='_blank'
                  className='text-xs md:text-base'
                >
                  Send a email
                </a>
              </div>
            </article>

            <article className='bg-main-colour rounded-xl text-center px-2 md:px-4 py-4 md:py-8 w-full group hover:bg-blue-400 cursor-pointer hover:scale-105 hover:text-white outline-2 outline outline-slate-200'>
              <div className='grid justify-center'>
                <div className='grid justify-center'>
                  <ImWhatsapp />
                </div>
                <h4 className='text-sm font-semibold md:text-base'>WhatsApp</h4>
                <h5 className='text-ss md:text-xs'>Chat any time</h5>
                <a
                  href='https://api.whatsapp.com/send?phone+447541576148'
                  rel='noreferrer'
                  target='_blank'
                  className='text-xs md:text-base'
                >
                  Send a message
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Inputs */}
        <section className='my-auto'>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
