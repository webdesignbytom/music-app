import React, { useContext, useState } from 'react';
import GallerySet from '../components/gallery/GallerySet';
// Components
import Navbar from '../components/nav/Navbar';
import { ToggleContext } from '../context/ToggleContext';
// Images
import {
  hullData,
  londonData,
  scotlandData,
  kansasData,
  cadoganData,
} from '../utils/GalleryData';

function GalleryPage() {
  const { toggleGallery, setToggleGallery } = useContext(ToggleContext);
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState({});

  const openGallery = (image) => {
    console.log('image', image.alt);
    setSelectedImage(image);
    setToggleGallery(true);

    if (image.alt === 'Cadogan Hall') {
      console.log('cad');
      setSelectedGallery(cadoganData);
    }

    if (image.alt === 'Kansas City Symphony') {
      console.log('cnsas');
      setSelectedGallery(kansasData);
    }

    if (image.alt === 'BBC singers concert') {
      console.log('hull');
      setSelectedGallery(hullData);
    }

    if (image.alt === 'The London Philharmonic Orchestra') {
      console.log('lon');
      setSelectedGallery(londonData);
    }

    if (image.alt === 'BBC Scottish Symphony Orchestra') {
      console.log('scot');
      setSelectedGallery(scotlandData);
    }
  };

  return (
    <>
      {toggleGallery && (
        <GallerySet
          selectedGallery={selectedGallery}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          setSelectedGallery={setSelectedGallery}
        />
      )}
      {!toggleGallery && (
        <div className='bg-white dark:bg-black dark:text-white'>
          <Navbar />
          <main className='mx-10 my-4'>
            <div className='my-8 text-center lg:text-left'>
              <h1 className='mb-1 text-2xl font-semibold'>Gallery</h1>
              <h2>Performances from around the world</h2>
            </div>

            <section className='grid gap-4'>
              {/* First concert */}
              <section className='mb-4 h-fit'>
                <article className='flex justify-between'>
                  <h3 className='text-xl font-semibold'>
                    English Chamber Orchestra
                  </h3>
                  <h4 className='text-xl font-semibold'>Cadogan Hall - 2022</h4>
                </article>
                <section className='max-w-full'>
                  <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
                    {cadoganData.map((image, index) => {
                      return (
                        <article
                          onClick={() => openGallery(image)}
                          key={index}
                          className='my-4'
                        >
                          <img
                            src={image.image}
                            alt={image.alt}
                            name='cadogan'
                            className='duration-300 ease-in-out hover:scale-110 cursor-pointer'
                          />
                        </article>
                      );
                    })}
                  </div>
                </section>
              </section>

              {/* Second concert */}
              <section className='mb-4'>
                <article className='flex justify-between'>
                  <h3 className='text-xl font-semibold'>
                    Kansas City Symphony
                  </h3>
                  <h4 className='text-xl font-semibold'>2022</h4>
                </article>
                <section className='lg:max-w-full flex justify-center'>
                  <div className='grid grid-cols-2 lg:grid-cols-4 w-fit h-[300px] overflow-hidden'>
                    {kansasData.map((image, index) => {
                      return (
                        <article
                          onClick={() => openGallery(image)}
                          key={index}
                          className='my-10'
                        >
                          <img
                            src={image.image}
                            alt={image.alt}
                            name='kansas'
                            className='duration-300 ease-in-out hover:scale-110 cursor-pointer'
                          />
                        </article>
                      );
                    })}
                  </div>
                </section>
              </section>

              {/* Third concert */}
              <section className='mb-4'>
                <article className='flex justify-between'>
                  <h3 className='text-xl font-semibold'>
                    The London Philharmonic Orchestra
                  </h3>
                  <h4 className='text-xl font-semibold'>2022</h4>
                </article>
                <section className='max-w-full'>
                  <div className='grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-2'>
                    {londonData.map((image, index) => {
                      return (
                        <article
                          onClick={() => openGallery(image)}
                          key={index}
                          className='my-4'
                        >
                          <img
                            src={image.image}
                            alt={image.alt}
                            name='london'
                            className='duration-300 ease-in-out hover:scale-110 cursor-pointer object-contain'
                          />
                        </article>
                      );
                    })}
                  </div>
                </section>
              </section>

              {/* Forth concert */}
              <section className='mb-4'>
                <article className='flex justify-between'>
                  <h3 className='text-xl font-semibold'>BBC Singers Concert</h3>
                  <h4 className='text-xl font-semibold'>
                    Hull - UK City of Culture - 2019
                  </h4>
                </article>
                <section className='max-w-full'>
                  <div className='flex sm:grid sm:grid-cols-2 md:grid-cols-3 w-fit gap-2'>
                    {hullData.map((image, index) => {
                      return (
                        <article
                          onClick={() => openGallery(image)}
                          key={index}
                          className='my-4'
                        >
                          <img
                            src={image.image}
                            alt={image.alt}
                            name='hull'
                            className='md:w-[200px] duration-300 ease-in-out hover:scale-110 cursor-pointer'
                          />
                        </article>
                      );
                    })}
                  </div>
                </section>
              </section>

              {/* Fifth concert */}
              <section className='mb-4'>
                <article className='flex justify-between'>
                  <h3 className='text-xl font-semibold'>
                    BBC Scottish Symphony Orchestra
                  </h3>
                  <h4 className='text-xl font-semibold'>2019</h4>
                </article>

                <section className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-4'>
                  {/* 1 */}
                  <section className='grid gap-2 h-fit'>
                    <div onClick={() => openGallery(scotlandData[0])}>
                      <img
                        className='h-auto max-w-full rounded-lg duration-300 ease-in-out hover:scale-110 cursor-pointer'
                        src={scotlandData[0].image}
                        alt={scotlandData[0].alt}
                      />
                    </div>
                    <div onClick={() => openGallery(scotlandData[2])}>
                      <img
                        className='h-auto max-w-full rounded-lg duration-300 ease-in-out hover:scale-110 cursor-pointer'
                        src={scotlandData[2].image}
                        alt={scotlandData[2].alt}
                      />
                    </div>
                  </section>
                  {/* 2 */}
                  <section className='grid gap-2 h-fit'>
                    <div onClick={() => openGallery(scotlandData[3])}>
                      <img
                        className='h-auto max-w-full rounded-lg duration-300 ease-in-out hover:scale-110 cursor-pointer'
                        src={scotlandData[3].image}
                        alt={scotlandData[3].alt}
                      />
                    </div>
                    <div onClick={() => openGallery(scotlandData[8])}>
                      <img
                        className='h-auto max-w-full rounded-lg duration-300 ease-in-out hover:scale-110 cursor-pointer'
                        src={scotlandData[8].image}
                        alt={scotlandData[8].alt}
                      />
                    </div>
                    <div onClick={() => openGallery(scotlandData[7])}>
                      <img
                        className='h-auto max-w-full rounded-lg duration-300 ease-in-out hover:scale-110 cursor-pointer'
                        src={scotlandData[7].image}
                        alt={scotlandData[7].alt}
                      />
                    </div>
                  </section>
                  {/* 3 */}
                  <section className='grid gap-2 h-fit'>
                    <div onClick={() => openGallery(scotlandData[1])}>
                      <img
                        className='h-auto max-w-full rounded-lg'
                        src={scotlandData[1].image}
                        alt={scotlandData[1].alt}
                      />
                    </div>
                    <div onClick={() => openGallery(scotlandData[4])}>
                      <img
                        className='h-auto max-w-full rounded-lg duration-300 ease-in-out hover:scale-110 cursor-pointer'
                        src={scotlandData[4].image}
                        alt={scotlandData[4].alt}
                      />
                    </div>
                  </section>
                  {/* 4 */}
                  <section className='grid gap-2 h-fit'>
                    <div onClick={() => openGallery(scotlandData[5])}>
                      <img
                        className='h-auto max-w-full rounded-lg duration-300 ease-in-out hover:scale-110 cursor-pointer'
                        src={scotlandData[5].image}
                        alt={scotlandData[5].alt}
                      />
                    </div>
                    <div onClick={() => openGallery(scotlandData[6])}>
                      <img
                        className='h-auto max-w-full rounded-lg duration-300 ease-in-out hover:scale-110 cursor-pointer'
                        src={scotlandData[6].image}
                        alt={scotlandData[6].alt}
                      />
                    </div>
                    <div
                      className='hidden md:block'
                      onClick={() => openGallery(scotlandData[2])}
                    >
                      <img
                        className='h-auto max-w-full rounded-lg duration-300 ease-in-out hover:scale-110 cursor-pointer'
                        src={scotlandData[7].image}
                        alt={scotlandData[7].alt}
                      />
                    </div>
                  </section>
                </section>
              </section>
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export default GalleryPage;
