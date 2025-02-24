import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import './GetInTouch.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_PUBLIC_KEY)
.then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        toast.success('Email sent successfully!');
        form.current.reset();    // reset the from dataa in ui
      },
      (error) => {
        console.error('Failed to send email:', error);
        toast.error("Email sending failed.");
      }
    );
  };

  return (
    <section id='contactPage'>
      <div className='contact'>
        
        <span className='contactDesc'>
          Please fill out this form below to discuss any work opportunities
        </span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            className='name'
            placeholder='Your Name'
            name='your_name'
            required
          />
          <input
            type='email'
            className='email'
            placeholder='Your Email'
            name='your_email'
            required
          />
          <textarea
            className='msg'
            rows='10'
            placeholder='Your Message'
            name='message'
            required
          />
          <button className='flex items-center justify-center p-4 w-full rounded-lg  hover:text-blue-500 transition border-2 border-lime-400' type='submit'>
            Submit
          </button>
          </form>
         
        
      </div>
    </section>
  );
};

export default Contact;