/** @format */
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  companyEmail: z.string().email('Invalid email address'),
  companyName: z.string().min(1, 'Company name is required'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  jobTitle: z.string().min(1, 'Job title is required'),
  country: z.string().min(1, 'Please select your country'),
  category: z.string().min(1, 'Please select a category'),
  areaOfInterest: z.string().min(1, 'Please select an area of interest'),
  requestDetails: z
    .string()
    .min(10, 'Please provide more details about your request'),
  marketingConsent: z.boolean().default(false),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    // Handle form submission
    console.log(data);
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
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
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
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
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
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
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
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
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
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
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
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
            {errors.jobTitle && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.jobTitle.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Country/Territory *
            </label>
            <select
              {...register('country')}
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'>
              <option value=''>Select Country/Territory...</option>
              <option value='us'>United States</option>
              <option value='ca'>Canada</option>
              <option value='uk'>United Kingdom</option>
              <option value='au'>Australia</option>
            </select>
            {errors.country && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Category *
            </label>
            <select
              {...register('category')}
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'>
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
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'>
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
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
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
                className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
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
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'>
              {isSubmitting ? 'Submitting...' : 'Submit Contact Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
