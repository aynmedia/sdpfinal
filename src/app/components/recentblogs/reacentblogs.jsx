/** @format */

'use client';
import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LatestPostsWidget() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(new Set());
  const observerRef = useRef(null);
  const postsRef = useRef({});

  const handleIntersection = useCallback(
    (entries) => {
      const newVisiblePosts = new Set(visiblePosts);
      let hasChanges = false;

      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !newVisiblePosts.has(entry.target.dataset.postId)
        ) {
          newVisiblePosts.add(entry.target.dataset.postId);
          hasChanges = true;
        }
      });

      if (hasChanges) {
        setVisiblePosts(newVisiblePosts);
      }
    },
    [visiblePosts]
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '50px',
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

  useEffect(() => {
    posts.forEach((post) => {
      const element = postsRef.current[post.id];
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [posts]);

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        setLoading(true);
        const res = await fetch(
          'https://sdpneumatics.in/backend/wp-json/wp/v2/posts?per_page=3&_embed'
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        const processedPosts = data.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          slug: post.slug,
          date: post.date,
          featuredImage:
            post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
            '/placeholder-image.jpg',
          authorName: post._embedded?.author?.[0]?.name || 'Unknown Author',
          excerpt: post.excerpt?.rendered || '',
        }));

        setPosts(processedPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestPosts();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-64 bg-primary text-white'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center p-4 bg-primary text-white'>
        <p className='text-red-400'>Failed to load posts: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className='mt-4 px-4 py-2 bg-[#5039bf] rounded-lg hover:bg-[#3e27a5]transition-colors'>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className='bg-white text-primary px-4 py-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-4xl font-bold text-left'>
            Latest News from SD Pneumatics
          </h1>
          <button
            onClick={() => (window.location.href = '/blogs')}
            className='px-4 py-2 border border-[#5039bf] text-[#5039bf] rounded-lg hover:bg-[#3e27a5] hover:text-white transition-colors'>
            View All
          </button>
        </div>
        <p className='text-gray-500 mb-8'>
          Stay informed about the latest developments, cutting-edge
          technologies, and company news from SD Pneumatics.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {posts.map((post) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={post.id}
              className='block hover:scale-105 transition-transform duration-300'>
              <div
                ref={(el) => (postsRef.current[post.id] = el)}
                data-post-id={post.id}
                className={`
                  bg-white overflow-hidden 
                  transform transition-all duration-500 ease-out
                  ${
                    visiblePosts.has(post.id.toString())
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }
                `}>
                <div className='relative w-full h-80 rounded-xl'>
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className='object-cover rounded-md'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw '
                    priority={false}
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-3 line-clamp-2'>
                    {post.title}
                  </h3>
                  {/* <p className='text-sm text-gray-600 mb-3 line-clamp-3'>
                    {post.excerpt}
                  </p> */}
                  <div className='text-sm text-gray-400'>
                    <span>{post.authorName}</span>
                    <span className='mx-2'>•</span>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
