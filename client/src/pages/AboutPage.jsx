import React from 'react';
// Components
import Navbar from '../components/nav/Navbar';
import Footer from '../components/footer/Footer';
// Data
import { aboutPageContent } from '../utils/Data';
// Images
import AboutImage from '../assets/img/aboutpage.jpg';

function AboutPage() {
  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <Navbar />
      {/* Main */}
      <main>
        <section className='wax-w-[100vw] my-6 mx-2 lg:my-10 lg:mx-20'>
          <img
            src={AboutImage}
            className='min-h-[300px] object-cover'
            alt='about page'
          />
        </section>
        <section className='grid gap-8 my-4'>
          {aboutPageContent.map((content, index) => {
            console.log('content', content);
            return (
              <section className='mx-4 lg:mx-20' key={index}>
                <div className='flex justify-between'>
                  <h2 className='font-semibold text-xl my-2'>
                    {content.title}
                  </h2>
                  <div className='pr-4'>{content.note}</div>
                </div>
                <p>{content.content}</p>
              </section>
            );
          })}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;
