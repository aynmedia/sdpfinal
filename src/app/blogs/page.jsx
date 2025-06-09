/** @format */

import Image from 'next/image';
import React from 'react';
import blogs from '@/../public/images/blogs.jpg';
import { stripHtml } from 'string-strip-html';
import Link from 'next/link';

export const metadata = {
  title: 'SD Pneumatics Blog | Industry News & Updates',
  description:
    'Read the latest news, updates, and insights from SD Pneumatics. Stay informed about industrial air solutions, technology, and company news.',
  openGraph: {
    title: 'SD Pneumatics Blog | Industry News & Updates',
    description:
      'Read the latest news, updates, and insights from SD Pneumatics. Stay informed about industrial air solutions, technology, and company news.',
    url: 'https://yourdomain.com/blogs',
    siteName: 'SD Pneumatics',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'SD Pneumatics Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

async function getAllPosts() {
  try {
    const res = await fetch(
      'https://sdpneumatics.in/backend/wp-json/wp/v2/posts?_embed=true&per_page=100'
    );
    if (!res.ok) throw new Error('Failed to fetch posts');
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}
const page = async () => {
  const posts = await getAllPosts();

  return (
    <div className=' '>
      <div className='flex flex-col gap-6 w-full h-[50vh] justify-center items-center overflow-hidden relative'>
        <Image
          src={blogs}
          layout='fill'
          alt='logo'
          objectFit='cover'
          className='absolute top-0 left-0 w-full h-full'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#06091B] to-transparent flex items-center justify-center'>
          <h1 className='text-white text-4xl font-bold'>Our Blog & Updates</h1>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 pt-12 pb-8 my-12'>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => {
            const featuredImage =
              post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
              '/default-image.jpg';
            const truncatedExcerpt =
              stripHtml(post.excerpt.rendered).result.slice(0, 100) + '...';

            return (
              <article
                key={post.id}
                className='border rounded-lg overflow-hidden  transition-shadow hover:shadow-xl'>
                {/* Featured Image */}
                {featuredImage && (
                  <Image
                    width={400}
                    height={250}
                    src={featuredImage}
                    alt={post.title.rendered}
                    className='w-full h-[250px] object-cover'
                  />
                )}

                {/* Post Content */}
                <div className='p-6'>
                  <h2
                    className='text-xl font-bold mb-2'
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div
                    className='mb-4 text-gray-600'
                    dangerouslySetInnerHTML={{ __html: truncatedExcerpt }}
                  />
                  <div className='text-sm text-gray-500 mb-4'>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className='text-blue-600 hover:underline inline-flex items-center'>
                    Read more
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
