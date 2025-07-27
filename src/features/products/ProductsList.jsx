import { useGetProductsQuery } from './productApi'
import { Button, Rating } from '@material-tailwind/react';
import { baseUrl } from '../../app/mainApi';
import { useNavigate } from 'react-router';
import React, { useState, useRef, useEffect } from 'react';

export default function ProductList() {
  const nav = useNavigate();
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, error, isFetching } = useGetProductsQuery({ page, limit });
  const totalPages = data?.pages || 1;

  const allProductsRef = useRef([]);
  const [allProducts, setAllProducts] = useState([]);

  // Merge and deduplicate products
  useEffect(() => {
    if (data?.products?.length) {
      const newProducts = data.products.filter(
        (newProd) => !allProductsRef.current.some((prod) => prod._id === newProd._id)
      );
      allProductsRef.current = [...allProductsRef.current, ...newProducts];
      setAllProducts([...allProductsRef.current]);
    }
  }, [data]);

  const handleShowMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  if (error) return <h1>{error.data?.message || error.error}</h1>;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-gray-800 mb-10 relative mt-4">
        <span className="relative z-10">Available Books</span>
        <span className="absolute left-1/2 -bottom-1 w-32 h-1 bg-red-400 rounded-full -translate-x-1/2"></span>
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {allProducts.map(({ _id, title, price, image, rating, quantity }) => (
          <div
            onClick={() => nav(`/products/${_id}`)}
            key={_id}
            className='bg-white shadow-md hover:shadow-xl cursor-pointer rounded-lg overflow-hidden transition duration-300'
          >
            <div className='aspect-[4/5] w-full overflow-hidden bg-gray-100'>
              <img
                src={`${baseUrl}${image}`}
                alt={title}
                className='h-full w-full object-cover object-center transition duration-300 hover:scale-105'
              />
            </div>

            <div className='px-4 py-2 space-y-1'>
              <h2 className='font-semibold text-gray-800 text-base truncate'>{title}</h2>
              <p className={`text-sm ${quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {quantity > 0 ? `In Stock: ${quantity}` : 'Out of Stock'}
              </p>
              <p className='text-red-500 font-medium'>Rs.{price}</p>
              <Rating readonly value={Math.round(rating)} />
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {page < totalPages && (
        <div className='text-center mt-8'>
          <Button
            onClick={handleShowMore}
            loading={isFetching}
            color='blue'
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
}
