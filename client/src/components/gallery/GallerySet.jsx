import React, { useContext, useState } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function GallerySet({
  selectedGallery,
  selectedImage,
  setSelectedImage,
  setSelectedGallery,
}) {
  const { toggleGallery, setToggleGallery } = useContext(ToggleContext);

  console.log('selectedGallery', selectedGallery);
  console.log('selectedImage', selectedImage);

  const closeGallery = () => {
    setToggleGallery(false);
  };

  const changeImage = (image) => {
    setSelectedImage(image);
  };

  return (
    <section className='grid h-screen grid-rows-rev overflow-hidden relative pb-2 bg-black dark:bg-white'>
      <div className='hidden md:block absolute top-2 right-2 z-20'>
        <AiOutlineCloseCircle
          size={30}
          className='cursor-pointer text-white '
          onClick={closeGallery}
        />
      </div>
      <h2 className='hidden md:block absolute text-center text-white dark:text-black text-xl my-4 font-semibold w-full z-0'>
        {selectedImage.alt}
      </h2>

      {/* Main image */}
      <section className='grid h-full items-center bg-black dark:bg-white'>
        <article className='py-16 md:px-16 '>
          <img
            className='w-full max-h-[70vh] object-cover'
            src={selectedImage.image}
            alt={selectedImage.alt}
          />
        </article>

        <h2 className='md:hidden text-center text-white dark:text-black text-xl font-semibold w-full'>
          {selectedImage.alt}
        </h2>
      </section>
      {/* Gallery */}
      <section className='grid grid-flow-col bg-black'>
        {selectedGallery.map((image, index) => {
          return (
            <article
              onClick={() => changeImage(image)}
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
      </section>
      <div className='md:hidden pb-32 z-20 text-center mx-6'>
        <button
          onClick={closeGallery}
          className='cursor-pointer bg-white w-full py-2 duration-300 ease-in-out hover:scale-110 focus:bg-slate-500 text-black dark:bg-black dark:text-white rounded-2xl font-semibold'
        >
          CLOSE
        </button>
      </div>
    </section>
  );
}

export default GallerySet;
