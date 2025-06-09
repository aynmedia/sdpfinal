/** @format */
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Popup from '../components/popup';
import { useState } from 'react';
const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  companyEmail: z.string().email('Invalid email address'),
  companyName: z.string().min(1, 'Company name is required'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  jobTitle: z.string().min(1, 'Job title is required'),
  stateOrUT: z.string().min(1, 'Please select your state or union territory'),
  category: z.string().min(1, 'Please select a category'),
  areaOfInterest: z.string().min(1, 'Please select an area of interest'),
  requestDetails: z
    .string()
    .min(10, 'Please provide more details about your request'),
  marketingConsent: z.boolean().default(false),
});

export default function ContactForm() {
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      honeypot: '', // honeypot field to prevent bot submissions
    };

    try {
      const response = await fetch('/contactmail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setPopupMessage('Form submitted successfully!');
        setPopupType('success');
        reset();
      } else {
        setPopupMessage('Failed to submit form. Please try again.');
        setPopupType('error');
      }
    } catch (error) {
      console.error(error);
      setPopupMessage('An error occurred while submitting the form.');
      setPopupType('error');
    }
  };

  return (
    <div className='min-h-screen'>
      <div className='max-w-3xl mx-auto bg-white rounded-lg shadow p-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>
            How can we help you?
          </h1>
          <p className='mt-2 text-gray-600'>
            Let us know how we can help you with your projects, and our team
            will contact you shortly.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                First Name *
              </label>
              <input
                {...register('firstName')}
                className='mt-1 block w-full rounded-md border px-3 py-2'
              />
              {errors.firstName && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Last Name *
              </label>
              <input
                {...register('lastName')}
                className='mt-1 block w-full rounded-md border px-3 py-2'
              />
              {errors.lastName && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Company Email *
            </label>
            <input
              {...register('companyEmail')}
              type='email'
              className='mt-1 block w-full rounded-md border px-3 py-2'
            />
            {errors.companyEmail && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.companyEmail.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Company Name *
            </label>
            <input
              {...register('companyName')}
              className='mt-1 block w-full rounded-md border px-3 py-2'
            />
            {errors.companyName && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Phone Number *
            </label>
            <input
              {...register('phoneNumber')}
              type='tel'
              className='mt-1 block w-full rounded-md border px-3 py-2'
            />
            {errors.phoneNumber && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Job Title *
            </label>
            <input
              {...register('jobTitle')}
              className='mt-1 block w-full rounded-md border px-3 py-2'
            />
            {errors.jobTitle && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.jobTitle.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              State / Union Territory *
            </label>
            <select
              {...register('stateOrUT')}
              className='mt-1 block w-full rounded-md border px-3 py-2'>
              <option value=''>Select State / UT...</option>
              <option value='Andhra Pradesh'>Andhra Pradesh</option>
              <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
              <option value='Assam'>Assam</option>
              <option value='Bihar'>Bihar</option>
              <option value='Chhattisgarh'>Chhattisgarh</option>
              <option value='Goa'>Goa</option>
              <option value='Gujarat'>Gujarat</option>
              <option value='Haryana'>Haryana</option>
              <option value='Himachal Pradesh'>Himachal Pradesh</option>
              <option value='Jharkhand'>Jharkhand</option>
              <option value='Karnataka'>Karnataka</option>
              <option value='Kerala'>Kerala</option>
              <option value='Madhya Pradesh'>Madhya Pradesh</option>
              <option value='Maharashtra'>Maharashtra</option>
              <option value='Manipur'>Manipur</option>
              <option value='Meghalaya'>Meghalaya</option>
              <option value='Mizoram'>Mizoram</option>
              <option value='Nagaland'>Nagaland</option>
              <option value='Odisha'>Odisha</option>
              <option value='Punjab'>Punjab</option>
              <option value='Rajasthan'>Rajasthan</option>
              <option value='Sikkim'>Sikkim</option>
              <option value='Tamil Nadu'>Tamil Nadu</option>
              <option value='Telangana'>Telangana</option>
              <option value='Tripura'>Tripura</option>
              <option value='Uttar Pradesh'>Uttar Pradesh</option>
              <option value='Uttarakhand'>Uttarakhand</option>
              <option value='West Bengal'>West Bengal</option>
              <option value='Andaman and Nicobar Islands'>
                Andaman and Nicobar Islands
              </option>
              <option value='Chandigarh'>Chandigarh</option>
              <option value='Dadra and Nagar Haveli and Daman and Diu'>
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value='Delhi'>Delhi</option>
              <option value='Jammu and Kashmir'>Jammu and Kashmir</option>
              <option value='Ladakh'>Ladakh</option>
              <option value='Lakshadweep'>Lakshadweep</option>
              <option value='Puducherry'>Puducherry</option>
            </select>
            {errors.stateOrUT && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.stateOrUT.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Category *
            </label>
            <select
              {...register('category')}
              className='mt-1 block w-full rounded-md border px-3 py-2'>
              <option value=''>Select...</option>
              <option value='sales'>Sales Inquiry</option>
              <option value='support'>Technical Support</option>
              <option value='partnership'>Partnership</option>
            </select>
            {errors.category && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.category.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Area of Interest *
            </label>
            <select
              {...register('areaOfInterest')}
              className='mt-1 block w-full rounded-md border px-3 py-2'>
              <option value=''>Select...</option>
              <option value='products'>Products</option>
              <option value='services'>Services</option>
              <option value='solutions'>Solutions</option>
            </select>
            {errors.areaOfInterest && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.areaOfInterest.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Request Details *
            </label>
            <textarea
              {...register('requestDetails')}
              rows={4}
              className='mt-1 block w-full rounded-md border px-3 py-2'
            />
            {errors.requestDetails && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.requestDetails.message}
              </p>
            )}
          </div>

          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input
                {...register('marketingConsent')}
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-blue-600'
              />
            </div>
            <div className='ml-3'>
              <label className='text-sm text-gray-600'>
                Yes, please keep me informed of news and functionality
                transforming my industry, including special event invitations,
                surveys, newsletters, product and service incentives.
              </label>
            </div>
          </div>

          <div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50'>
              {isSubmitting ? 'Submitting...' : 'Submit Contact Request'}
            </button>
          </div>
        </form>{' '}
        {popupMessage && <Popup message={popupMessage} type={popupType} />}
      </div>
    </div>
  );
}
