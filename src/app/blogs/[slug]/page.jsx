/** @format */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogs from '@/../public/images/blogs.jpg';
async function getAllPostSlugs() {
  const res = await fetch(
    'https://sdpneumatics.in/backend/wp-json/wp/v2/posts?per_page=100'
  );
  const posts = await res.json();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPostData(slug) {
  const res = await fetch(
    `https://sdpneumatics.in/backend/wp-json/wp/v2/posts?slug=${slug}&_embed=true`
  );
  const posts = await res.json();
  return posts[0];
}

export async function generateStaticParams() {
  const paths = await getAllPostSlugs();
  return paths;
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getPostData(slug);

  if (!post) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-2xl font-bold'>Post not found</h1>
          <Link
            href='/blog'
            className='text-blue-600 hover:underline mt-4 inline-block'>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <>
      <div className='flex flex-col gap-6 w-full h-[30vh] justify-center items-center overflow-hidden relative'>
        <Image
          src={blogs}
          layout='fill'
          alt='logo'
          objectFit='cover'
          className='absolute top-0 left-0 w-full h-full'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 to-transparent flex items-center justify-center'>
          <h1 className='text-white text-4xl font-bold'>Our Blog & Updates</h1>
        </div>
      </div>
      <article className='container mx-auto px-4 py-32'>
        <div className='max-w-4xl mx-auto'>
          {featuredImage && (
            <Image
              width={700}
              height={700}
              src={featuredImage}
              alt={post.title.rendered}
              className='w-full h-[400px] object-cover rounded-lg mb-8'
            />
          )}
          <h1
            className='text-4xl font-bold mb-4'
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className='text-gray-600 mb-6'>
            Published on {new Date(post.date).toLocaleDateString()}
          </div>
          <div
            className='prose max-w-none'
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          <div className='mt-8'>
            <Link href='/blogs' className='text-blue-600 hover:underline'>
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export const dynamic = 'force-static';
