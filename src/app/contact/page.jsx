/** @format */

import React from 'react';
import contact from '@/../public/images/contact.jpg';
import Image from 'next/image';
import ContactForm from './form';

export const metadata = {
  title: 'Contact SD Pneumatics | Get in Touch',
  description:
    'Contact SD Pneumatics for industrial air solutions, product inquiries, support, and more. Reach out to our team in Bangalore, India.',
  openGraph: {
    title: 'Contact SD Pneumatics | Get in Touch',
    description:
      'Contact SD Pneumatics for industrial air solutions, product inquiries, support, and more. Reach out to our team in Bangalore, India.',
    url: 'https://yourdomain.com/contact',
    siteName: 'SD Pneumatics',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Contact SD Pneumatics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return (
    <div>
      <div className='flex flex-col gap-6 w-full h-[70vh] justify-center items-center overflow-hidden relative'>
        <Image
          src={contact}
          layout='fill'
          alt='logo'
          objectFit='cover'
          className='absolute top-0 left-0 w-full h-full'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 to-transparent flex items-center justify-center'>
          <h1 className='text-white text-4xl font-bold'>
            How can we help you?
          </h1>
        </div>
      </div>
      <div className='min-h-screen max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='bg-white -mt-24 z-10'>
          <ContactForm />
        </div>
        <div className='md:mt-12 mt-4'>
          <div>
            <h1 className='text-4xl font-bold mb-4'>Location</h1>
            <p>
              456, 4th Main Rd, Manjunath Nagar,
              <br /> Basaveshwar Nagar,
            </p>
            <p>Bengaluru, Karnataka 560010</p>
            <p>+91 99865 23331</p>
            <p>Mon-Sat, 9:00am-8:00pm</p>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.951930188895!2d77.59052321500674!3d12.971598714893553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1e25aff0a7dccb%3A0x4ac680428cca0452!2sBengaluru%2C%20Karnataka%20560010!5e0!3m2!1sen!2sin!4v1687351423844!5m2!1sen!2sin'
              width='600'
              height='450'
              allowFullScreen=''
              loading='lazy'
              className='my-12'
              referrerPolicy='no-referrer-when-downgrade'></iframe>
          </div>
          <div>
            <h1 className='text-4xl font-bold my-4'>Report Concerns</h1>
            <p>
              If you have any concerns or queries, please feel free to contact
              us at care@sdpneumatics.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
