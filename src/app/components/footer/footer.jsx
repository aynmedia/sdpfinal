/** @format */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Twitter, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';
import logo from '@/../public/images/logo.png';
import map from '@/../public/images/map.png';
import ContactSection from './contact';
const Footer = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <footer className='bg-[#001233] text-white pt-16 pb-8'>
      <div className='min-h-screen'>
        <ContactSection />
      </div>
      <div>
        <div className='w-full my-12 max-w-7xl mx-auto'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.649754521723!2d77.54788289999999!3d12.9942393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d93e7b9c72b%3A0x7245c24d79dcdff4!2sS.D.%20PNEUMATICS!5e0!3m2!1sen!2sin!4v1736910768577!5m2!1sen!2sin'
            width='100%'
            height='350'
            style={{ border: '0' }}
            allowFullScreen='no-referrer-when-downgrade'
            loading='lazy'></iframe>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 pt-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Company Info */}
          <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeInUp}>
            <Image src={logo} alt='Logo' width={100} height={100} />
            <p className='text-gray-300 mb-6'>
              Dedicated to providing high-quality pneumatic solutions that drive
              efficiency and innovation across industries.
            </p>
          </motion.div>

          {/* What we do */}
          <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeInUp}>
            <h3 className='text-xl font-semibold mb-6'>
              What we are dealing with
            </h3>
            <ul className='space-y-4'>
              {['Anesta Iwata', 'Kobelco', 'Oxygen Generators', 'Others'].map(
                (service, index) => (
                  <li key={index} className='text-gray-300'>
                    {service}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='gap-6'>
            <h3 className='text-xl font-semibold mb-6'>Offices</h3>
            <p className='text-gray-300 mb-4'>
              Join us in driving the future of pneumatics with cutting-edge
              technology and a customer-first approach.
            </p>
            <Image src={map} alt='Logo' width={400} height={400} />
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='mt-16 pt-8 border-t border-gray-800 text-center text-gray-400'>
          <p>© {new Date().getFullYear()} SD Pneumatics, All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
