import React, { useState } from 'react';
// Components
import SmallCountrySelect from '../../utils/SmallCountrySelect';
// Utils
import { contactFormTemplate, statusResults } from '../../utils/Data';

function ContactForm() {
  const [contactSuccessMessage, setContactSuccessMessage] =
    useState(statusResults);
  const [contactErrorMessage, setContactErrorMessage] = useState(statusResults);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  const [formData, setFormData] = useState(contactFormTemplate);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('VALUE', value);

    if (name === 'email') {
      setContactErrorMessage({
        status: false,
        message: '',
      });
      setMainButtonContent(true);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //   setMainButtonContent(false);
    //   setLoadingAnimation(true);

    //   client
    //     .post(`/contacts/create`, formData, false)
    //     .then((res) => {
    //       console.log('res', res.data);
    //       setLoadingAnimation(false);
    //       setContactSuccessMessage({
    //         status: true,
    //         message: 'SUCCESS',
    //       });
    //     })
    //     .catch((err) => {
    //       setLoadingAnimation(false);
    //       setContactErrorMessage({
    //         status: true,
    //         message: err.response.data.data.contact,
    //       });
    //       console.error(
    //         'Unable to send contact message',
    //         err.response.data.data.contact
    //       );
    //     });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='lg:w-full lg:my-auto lg:px-2'>
        {/* <!-- Email input --> */}
        <div className='mb-1'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            name='email'
            className='block p-1 w-full text-base font-normal text-placeholder-text bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none'
            placeholder='Email address'
            onChange={handleChange}
            required
          />
        </div>
        {/* <!-- Phone input --> */}
        <div className='mb-1'>
          <label className='flex justify-between' htmlFor='phone'>
            <p>Phone:</p>
            <p>* optional</p>
          </label>
          <input
            type='tel'
            name='phone'
            className='block p-1 w-full text-base font-normal text-placeholder-text bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none'
            placeholder='Phone Number'
            onChange={handleChange}
          />
        </div>
        {/* <!-- FirstName input --> */}
        <div className='mb-1'>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            name='firstName'
            className='block p-1 w-full text-base font-normal text-placeholder-text bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none'
            placeholder='First Name'
            onChange={handleChange}
            required
          />
        </div>
        {/* <!-- LastName input --> */}
        <div className='mb-1'>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            className='block p-1 w-full text-base font-normal text-placeholder-text bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none'
            placeholder='LastName'
            onChange={handleChange}
            required
          />
        </div>
        {/* Country input */}
        <div className='mb-1'>
          <label htmlFor='country'>Country</label>
          <SmallCountrySelect handleChange={handleChange} />
        </div>

        {/* Message input */}
        <div className='mb-1 grid'>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            id='message'
            className='overflow-y-scroll resize-none scroll-smooth border border-solid border-gray-300 rounded p-1'
            rows='4'
            onChange={handleChange}
          ></textarea>
        </div>

        {/* <!-- Submit button --> */}
        <div className='my-2'>
          <button
            type='submit'
            className='bg-black dark:bg-white dark:text-black grid justify-center py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out w-full'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
          >
            <span>Send Message</span>
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
