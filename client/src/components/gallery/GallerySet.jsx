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
    <section className='grid h-screen grid-rows-rev overflow-hidden bg-red-400 relative pb-2'>
      <div className='absolute top-2 right-2 z-20'>
        <AiOutlineCloseCircle
          size={30}
          className='cursor-pointer text-white '
          onClick={closeGallery}
        />
      </div>
      <h2 className='absolute text-center text-white text-xl font-semibold w-full z-0'>{selectedImage.alt}</h2>

      {/* Main image */}
      <section className='grid h-full bg-black'>
        <article className='py-8 px-16 '>
          <img
            className='w-full max-h-[70vh] object-cover'
            src={selectedImage.image}
            alt={selectedImage.alt}
          />
        </article>
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
    </section>
  );
}

export default GallerySet;
