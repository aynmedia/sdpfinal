/** @format */

'use client';

import { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

const GetQuoteModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // Honeypot field
    productName: product?.title?.rendered || 'Selected Product',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      productName:
        typeof product?.title === 'object'
          ? product.title.rendered
          : product?.title || 'Selected Product',
    }));
  }, [product]);

  useEffect(() => {
    if (countdown !== null) {
      if (countdown <= 0) {
        onClose();
        setCountdown(null);
        window.location.reload();
      } else {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [countdown, onClose]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      newErrors.email = 'Valid email required';
    }
    if (!formData.phone.match(/^\d{10}$/)) {
      newErrors.phone = 'Valid number required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');

    if (!validate()) return;

    if (formData.honeypot) return; // bot detected

    setIsSubmitting(true);

    try {
      const response = await fetch('/quotemail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage('Quote request sent successfully!');
        setCountdown(5);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          honeypot: '',
          productName:
            typeof product?.title === 'object'
              ? product.title.rendered
              : product?.title || 'Selected Product',
        });
      } else {
        alert(data.error || 'Failed to send. Try again.');
      }
    } catch (err) {
      alert('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 py-16 overflow-y-auto'>
      <div className='bg-white w-full max-w-sm p-4 rounded-lg shadow-xl my-auto'>
        <div className='flex justify-between items-center mb-3'>
          <h2 className='text-base font-semibold text-gray-800'>Quick Quote</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'>
            <X className='w-4 h-4' />
          </button>
        </div>

        <div className='mb-3 pb-2 border-b border-gray-100'>
          <p className='text-xs text-gray-500'>Product:</p>
          <p className='text-sm font-medium text-primary truncate'>
            {formData.productName}
          </p>
        </div>

        {countdown !== null ? (
          <div className='flex flex-col items-center justify-center py-6 text-center'>
            <CheckCircle className='w-10 h-10 text-green-500 mb-3' />
            <p className='text-green-600 font-medium'>
              Quote request sent successfully!
            </p>
            <p className='text-sm text-gray-500 mt-2'>
              This window will close in {countdown} second
              {countdown !== 1 ? 's' : ''}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-3'>
            {/* Honeypot Field */}
            <input
              type='text'
              name='honeypot'
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              autoComplete='off'
            />

            <div>
              <label className='text-xs font-medium text-gray-700 mb-1 block'>
                Your Name
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='John Smith'
                className='w-full px-3 py-1.5 text-sm border rounded-md'
              />
              {errors.name && (
                <p className='text-xs text-red-500'>{errors.name}</p>
              )}
            </div>

            <div className='grid grid-cols-2 gap-2'>
              <div>
                <label className='text-xs font-medium text-gray-700 mb-1 block'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='email@example.com'
                  className='w-full px-3 py-1.5 text-sm border rounded-md'
                />
                {errors.email && (
                  <p className='text-xs text-red-500'>{errors.email}</p>
                )}
              </div>

              <div>
                <label className='text-xs font-medium text-gray-700 mb-1 block'>
                  Phone
                </label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='1234567890'
                  className='w-full px-3 py-1.5 text-sm border rounded-md'
                />
                {errors.phone && (
                  <p className='text-xs text-red-500'>{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className='block text-xs font-medium text-gray-700 mb-1'>
                Message (optional)
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Your requirements...'
                rows='2'
                className='w-full px-3 py-1.5 text-sm border rounded-md resize-none'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full flex items-center justify-center gap-1 py-1.5 bg-primary text-white text-sm rounded hover:bg-primary-dark font-medium'>
              {isSubmitting ? (
                <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
              ) : (
                <>
                  <Send className='w-3 h-3' />
                  Send Request
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default GetQuoteModal;
