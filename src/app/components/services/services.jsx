/** @format */
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
const navigationData = [
  {
    title: 'Setup and Initial Operation',
    items: [
      {
        title: 'Commissioning',
        excerpt:
          'Initial setup and commissioning of equipment, ensuring everything is installed correctly, configured for optimal performance, and ready for immediate use. Our team ensures a seamless start-up process for maximum efficiency.',
        slug: 'commissioning',
        image: '/images/services/SDP_Service1_Img1.jpg',
      },
    ],
  },
  {
    title: 'On-Site and Mobile Support',
    items: [
      {
        title: 'Field Service',
        excerpt:
          'On-site technical support and maintenance, delivered by expert technicians who provide quick, on-the-spot solutions to keep your equipment running smoothly, reducing downtime and boosting productivity.',
        slug: 'field-service',
        image: '/images/services/SDP_Service2_Img2.jpg',
      },
      {
        title: 'Rental Devices',
        excerpt:
          'Temporary equipment rental solutions designed to meet your immediate needs. We offer a wide range of rental devices, ensuring you can access the right tools without long-term commitments.',
        slug: 'rental-devices',
        image: '/images/services/SDP_Service3_Img3.jpg',
      },
    ],
  },
  {
    title: 'Repairs and Restoration',
    items: [
      {
        title: 'General Overhaul',
        excerpt:
          'Comprehensive system overhaul services that restore your equipment to optimal performance. Our expert team inspects, repairs, and upgrades systems to extend their life and efficiency.',
        slug: 'general-overhaul',
        image: '/images/services/SDP_Service4_Img4.jpg',
      },
      {
        title: 'Repair',
        excerpt:
          'Equipment repair and maintenance services to ensure your machinery runs at peak performance. We diagnose and resolve issues quickly to minimize downtime and get you back to work.',
        slug: 'repair',
        image: '/images/services/SDP_Service5_Img5.jpg',
      },
      {
        title: 'Replacements',
        excerpt:
          'Part replacement services that keep your equipment in top shape. We offer high-quality replacements to ensure optimal performance and prevent unexpected breakdowns.',
        slug: 'replacements',
        image: '/images/services/SDP_Service6_Img6.jpg',
      },
    ],
  },
  {
    title: 'Preventive and Routine Care',
    items: [
      {
        title: 'Inspection',
        excerpt:
          'Detailed equipment inspections aimed at identifying potential issues before they become problems. Regular inspections help prevent unexpected breakdowns and ensure continuous, safe operation.',
        slug: 'inspection',
        image: '/images/services/SDP_Service7_Img7.jpg',
      },
      {
        title: 'Maintenance',
        excerpt:
          'Scheduled maintenance services to ensure your equipment is running at its best. Regular maintenance helps to extend the life of your machines and keeps operations smooth and efficient.',
        slug: 'maintenance',
        image: '/images/services/SDP_Service8_Img8.jpg',
      },
      {
        title: 'Service Agreement',
        excerpt:
          'Customizable service agreements that provide ongoing maintenance and support tailored to your specific needs. Enjoy peace of mind knowing your equipment is always in top condition.',
        slug: 'service-agreement',
        image: '/images/services/SDP_Service9_Img9.jpg',
      },
    ],
  },
  {
    title: 'Support and Assistance',
    items: [
      {
        title: 'Technical Support',
        excerpt:
          'Expert technical support for troubleshooting and resolving complex issues. Our team is available to provide immediate assistance to ensure your operations continue without disruption.',
        slug: 'technical-support',
        image: '/images/services/SDP_Service10_Img10.jpg',
      },
      {
        title: 'Training',
        excerpt:
          'Comprehensive training for equipment handling, ensuring your team is well-equipped to operate and maintain machinery safely and efficiently. Learn best practices and troubleshoot issues effectively.',
        slug: 'training',
        image: '/images/services/SDP_Service11_Img11.jpg',
      },
    ],
  },
  {
    title: 'Parts and Equipment Management',
    items: [
      {
        title: 'Spare Parts',
        excerpt:
          'High-quality spare parts for your equipment, ensuring reliability and performance. We provide a wide range of genuine parts to keep your machinery operating smoothly.',
        slug: 'spare-parts',
        image: '/images/services/SDP_Service12_Img12.jpg',
      },
    ],
  },
  {
    title: 'Specialized Off-Site Services',
    items: [
      {
        title: 'In-House Services',
        excerpt:
          'Expert services provided in-house at our facilities. We offer advanced technical support and repairs in a controlled environment to ensure optimal outcomes for your equipment.',
        slug: 'in-house-services',
        image: 'SDP_Service13_Img13.jpg',
      },
    ],
  },
];

function NavigationSidebar({ activeTab, setActiveTab, isOpen, setIsOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        top-0 left-0 h-full bg-[#F4F4F4] border-r border-gray-200
        w-80 transform transition-transform duration-200 ease-in-out -z-1
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className='flex justify-between items-center p-4 border-b md:hidden'>
          <h2 className='font-medium text-gray-800'>Navigation</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className='h-6 w-6 text-gray-600' />
          </button>
        </div>
        <nav className='flex flex-col'>
          {navigationData.map((section, index) => (
            <button
              key={section.title}
              onClick={() => {
                setActiveTab(index);
                setIsOpen(false);
              }}
              className={`text-left px-6 py-12 border-l-4 hover:bg-gray-50 transition-colors ${
                activeTab === index
                  ? 'border-green-500 bg-[#F8F8F8] border-r-'
                  : 'border-transparent'
              }`}>
              <span
                className={`text-sm ${
                  activeTab === index
                    ? 'text-green-600 font-medium'
                    : 'text-gray-600'
                }`}>
                {section.title}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

function PostCard({ post }) {
  return (
    // <Link href={`/posts/${post.slug}`} className='block'>
    <div className='overflow-hidden transition-shadow'>
      <div className='flex flex-col sm:flex-row'>
        <div className='w-full sm:w-48 h-48 relative'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-cover rounded-sm'
          />
        </div>
        <div className='flex-1 p-6'>
          <h1 className='text-xl font-medium text-gray-800 hover:text-green-600 transition-colors mb-2'>
            {post.title}
          </h1>
          <p className='text-gray-600 mb-4'>{post.excerpt}</p>
          {/* <div className='flex items-center text-green-600 font-medium group'>
              READ MORE
              <svg
                className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'>
                <path d='M9 5l7 7-7 7' />
              </svg>
            </div> */}
        </div>
      </div>
    </div>
    // </Link>
  );
}

function MainContent({ activeTab }) {
  const currentSection = navigationData[activeTab];

  return (
    <div className='flex-1 p-4 md:p-8'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}>
          <h1 className='text-2xl md:text-3xl font-light text-gray-800 mb-6 md:mb-8'>
            {currentSection.title}
          </h1>

          <div className='space-y-4 md:space-y-6'>
            {currentSection.items.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' bg-white mx-auto max-w-7xl'>
      <h1 className='text-4xl font-bold mb-2  md:mt-24 '>
        Our Comprehensive Services
      </h1>
      <p className='mb-12 text-black/80'>
        we offer a wide range of expert services designed to ensure the optimal
        performance, longevity, and reliability of your equipment. From initial
        setup and commissioning to ongoing maintenance and technical support,
        our solutions are tailored to meet your specific needs. Whether you
        require on-site repairs, in-house servicing, or specialized training,
        our team is committed to providing efficient, high-quality service at
        every stage of your equipment’s lifecycle.
      </p>
      {/* Mobile Header */}
      <div className='sticky top-0 z-6 md:hidden bg-white border-b border-gray-200'>
        <div className='flex items-center justify-between p-4'>
          <button onClick={() => setIsOpen(true)} className='p-2 -ml-2'>
            <Menu className='h-6 w-6 text-gray-600' />
          </button>
          <span className='text-gray-800 font-medium'>Menu</span>
          <div className='w-8' /> {/* Spacer for centering */}
        </div>
      </div>

      <div className=' bg-[#F8F8F8] border'>
        <div className='flex'>
          <NavigationSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <MainContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default Services;
