import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // template_dblod0r
  // service_23asg16
  // vbNpBdZiiC3OGI7yq

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError(true);
      return;
    }

    setLoading(true);
    emailjs
      .send(
        'service_23asg16',
        'template_dblod0r',
        {
          from_name: form.name,
          to_name: 'Vishal',
          from_email: form.email,
          to_email: 'vishal.urankar@yahoo.com',
          message: form.message,
        },
        'vbNpBdZiiC3OGI7yq'
      )
      .then(
        () => {
          setLoading(false);
          setError(false);
          toast.success('Thank you. Will get back soon.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setError(false);
          toast.error('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <Toaster
        position='bottom-center'
        toastOptions={{
          // Define default options
          className: '',
          duration: 3000,
          style: {
            background: '#151030',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          action=''
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8 text-start'
        >
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white text-sm font-medium mb-4'>
              Your Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {error && !form.name && (
              <p className='text-red-600 text-sm font-medium mt-2'>
                Please enter your name
              </p>
            )}
          </label>

          <label htmlFor='' className='flex flex-col'>
            <span className='text-white text-sm font-medium mb-4'>
              Your Email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {error && !form.email && (
              <p className='text-red-600 text-sm font-medium mt-2'>
                Please enter your email
              </p>
            )}
          </label>

          <label htmlFor='' className='flex flex-col'>
            <span className='text-white text-sm font-medium mb-4'>
              Your Message
            </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {error && !form.message && (
              <p className='text-red-600 text-sm font-medium mt-2'>
                Please enter your message
              </p>
            )}
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
