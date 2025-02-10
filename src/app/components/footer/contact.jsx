/** @format */

import React, { useState } from 'react';
import Image from 'next/image';
import map from '@/../public/images/map.png';
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        setSubmitStatus('error');
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className='relative min-h-screen text-white py-16'>
      {/* Map Background */}
      <div className='absolute w-full h-full overflow-hidden'>
        <Image
          src={map}
          alt='Map Background'
          fill
          objectFit='contain'
          priority
          className='opacity-10'
        />
      </div>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Left Column */}
          <div className='space-y-8 animate-fade-in-up'>
            <div>
              <p className='text-gray-400'>Contacts</p>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight'>
                We are always ready
                <br />
                to help you and answer
                <br />
                your questions
              </h1>
            </div>

            <div className='space-y-6'>
              <div>
                <h2 className='text-xl font-semibold mb-2'>Head Office</h2>
                <p className='text-gray-400'>
                  # 456, 4th Main Road, 1st Stage 2nd Phase,
                  <br /> Manjunath Nagar, Rajaji Nagar, <br />
                  Bengaluru, Karnataka 560010
                </p>
                <p className='text-gray-400'>
                  sdpn2014@gmail.com
                  <br />
                  9986523331 | 9900726662
                </p>
              </div>

              <div>
                <h2 className='text-xl font-semibold mb-2'>Branch Office</h2>
                <p className='text-gray-400'>
                  Sumuka Arcade Neae Geeta Seva <br />
                  Asharama Bellary Road, Hospet <br />
                  Karnataka - 583201
                </p>
                <p className='text-gray-400'>
                  sdpn2014@gmail.com
                  <br />
                  9986523331 | 9980673338
                </p>
              </div>

              <div>
                <h2 className='text-xl font-semibold mb-2'>GSTIN</h2>

                <p>29AELPG4572Q1ZO</p>
              </div>

              <div>
                <h2 className='text-xl font-semibold mb-4'>Follow us</h2>
                <div className='flex space-x-4'>
                  {['twitter', 'facebook', 'linkedin', 'instagram'].map(
                    (social) => (
                      <a
                        key={social}
                        href={`https://${social}.com`}
                        className='w-10 h-10 border border-gray-700 hover:border-green-500 
                               flex items-center justify-center rounded-sm 
                               transition-colors duration-300'>
                        {social === 'twitter' && <X size={20} />}
                        {social === 'facebook' && <Facebook size={20} />}
                        {social === 'linkedin' && <Linkedin size={20} />}
                        {social === 'instagram' && <Instagram size={20} />}
                        <span className='sr-only'>{social}</span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className='bg-white p-8 rounded-lg animate-fade-in-up animation-delay-300'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              Get in Touch
            </h2>
            <p className='text-gray-600 mb-8'>
              Have a question or need assistance? We’re here to help! Whether
              you’re looking for expert advice, more information about our
              offerings, or simply want to connect, our team is ready to assist.
              Your feedback and inquiries are always welcome!
            </p>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <input
                  type='text'
                  name='fullName'
                  placeholder='Full name'
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border text-primary ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-red-500 
                  focus:border-transparent transition-all`}
                />
                {errors.fullName && (
                  <p className='mt-1 text-sm text-red-500'>{errors.fullName}</p>
                )}
              </div>

              <div>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border text-primary ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-red-500 
                  focus:border-transparent transition-all`}
                />
                {errors.email && (
                  <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border text-primary ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-red-500 
                  focus:border-transparent transition-all`}
                />
                {errors.subject && (
                  <p className='mt-1 text-sm text-red-500'>{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name='message'
                  placeholder='Message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-md border text-primary ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-red-500 
                  focus:border-transparent transition-all`}
                />
                {errors.message && (
                  <p className='mt-1 text-sm text-red-500'>{errors.message}</p>
                )}
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-[#5039bf] text-white py-3 px-6 rounded-md 
                         hover:bg-[#3e27a5] transition-colors duration-300 
                         font-medium disabled:opacity-50 disabled:cursor-not-allowed'>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className='text-green-500 text-center'>
                  Message sent successfully!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className='text-red-500 text-center'>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
