/** @format */

'use client';
import {
  ArrowDownToLine,
  MessageCircle,
  ReceiptIndianRupee,
} from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import GetQuoteModal from './../GetQuoteModal';

const AnestIwataProducts = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('date-asc');
  const productsPerPage = 100;
  const ANEST_IWATA_CATEGORY_ID = 3;
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Fetch Categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoryRes = await fetch(
          'https://sdpneumatics.in/backend/wp-json/wp/v2/categories'
        );
        if (!categoryRes.ok) throw new Error('Failed to fetch categories');
        const categoryData = await categoryRes.json();

        const anestIwataCategories = categoryData.filter(
          (c) => c.parent === ANEST_IWATA_CATEGORY_ID
        );
        console.log(anestIwataCategories);
        setCategories(anestIwataCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError(error.message);
      }
    }
    fetchCategories();
  }, []);

  // Fetch Products
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);

        const params = new URLSearchParams({
          page: currentPage.toString(),
          per_page: productsPerPage.toString(),
          categories: selectedCategory || ANEST_IWATA_CATEGORY_ID,
        });

        const [sortField, sortDirection] = sortBy.split('-');
        params.append('orderby', sortField);
        params.append('order', sortDirection === 'asc' ? 'asc' : 'desc');

        const res = await fetch(
          `https://sdpneumatics.in/backend/wp-json/wp/v2/products?${params.toString()}`
        );

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const totalPagesHeader = res.headers.get('X-WP-TotalPages');
        const totalProductsHeader = res.headers.get('X-WP-Total');

        setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader) : 0);
        setTotalProducts(
          totalProductsHeader ? parseInt(totalProductsHeader) : 0
        );

        const data = await res.json();
        console.log(data);
        const productWithImages = await Promise.all(
          data.map(async (product) => {
            try {
              if (product.featured_media) {
                const mediaRes = await fetch(
                  `https://sdpneumatics.in/backend/wp-json/wp/v2/media/${product.featured_media}`
                );
                if (mediaRes.ok) {
                  const mediaData = await mediaRes.json();
                  return {
                    ...product,
                    featured_media:
                      mediaData.source_url || '/api/placeholder/300/300',
                  };
                }
              }
              return { ...product, featured_media: '/api/placeholder/300/300' };
            } catch {
              return { ...product, featured_media: '/api/placeholder/300/300' };
            }
          })
        );

        setPosts(productWithImages);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage, selectedCategory, sortBy]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const renderHTML = (content) => {
    if (!content) return '';
    return { __html: content };
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      {/* Header */}
      <div className='mb-8 text-center'>
        <h2 className='text-2xl font-bold text-gray-900'>
          Kobelco Products ({totalProducts})
        </h2>
        <p className='text-gray-600 mt-2'>
          Browse our collection of high-quality Kobelco products
        </p>
      </div>

      {/* Sub-Categories Filter */}
      {categories.length > 0 && (
        <div className='bg-primary mb-8'>
          <div className='flex flex-wrap justify-center gap-2 p-4'>
            <button
              onClick={() => handleCategorySelect(ANEST_IWATA_CATEGORY_ID)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === ANEST_IWATA_CATEGORY_ID
                  ? 'bg-white text-primary'
                  : 'text-white hover:bg-white/10'
              }`}>
              All Anest Iwata
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/10'
                }`}>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sort Controls */}
      <div className='mb-6 flex justify-end'>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className='px-4 py-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary'>
          <option value='date-asc'>Oldest First</option>
          <option value='date-desc'>Newest First</option>
          <option value='title-asc'>Title A-Z</option>
          <option value='title-desc'>Title Z-A</option>
        </select>
      </div>

      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary'></div>
        </div>
      ) : error ? (
        <div className='flex justify-center items-center h-64'>
          <p className='text-red-500'>
            Error loading products: {error}. Please try again later.
          </p>
        </div>
      ) : (
        <>
          {/* Products Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            {posts.map((post) => (
              <div
                key={post.id}
                className='bg-white overflow-hidden transition-transform hover:transform hover:scale-105 border p-4 rounded-md'>
                <div className='aspect-w-16 aspect-h-9'>
                  <Image
                    width={600}
                    height={600}
                    src={post.featured_media}
                    alt={post.title?.rendered || 'Product Image'}
                    className='w-full h-48 object-contain'
                  />
                </div>

                <div className='p-4 flex gap-4 flex-col'>
                  {post.title?.rendered && (
                    <h3
                      className='text-md font-semibold mb-2 text-gray-900'
                      dangerouslySetInnerHTML={renderHTML(post.title.rendered)}
                    />
                  )}

                  {post.excerpt?.rendered && (
                    <div
                      className='text-gray-600 text-sm line-clamp-3'
                      dangerouslySetInnerHTML={renderHTML(
                        post.excerpt.rendered
                      )}
                    />
                  )}
                  {post.acf &&
                    post.acf.solution &&
                    post.acf.solution.rendered && (
                      <div
                        className='text-gray-600 text-sm mb-2'
                        dangerouslySetInnerHTML={renderHTML(
                          post.acf.solution.rendered
                        )}
                      />
                    )}
                  <div
                    className='text-gray-600 text-sm mb-2 flex flex-row gap-2 hover:text-green-600 transition-colors cursor-pointer'
                    onClick={() => {
                      setSelectedProduct(post);
                      setShowQuoteModal(true);
                    }}>
                    <ArrowDownToLine className='h-4 w-4' />
                    <span className='font-bold'>Get Quote</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className='flex justify-center items-center gap-4 mt-8'>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className='px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300 transition-colors'>
                Previous
              </button>
              <span className='text-gray-700'>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className='px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300 transition-colors'>
                Next
              </button>
            </div>
          )}
        </>
      )}
      <GetQuoteModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default AnestIwataProducts;
