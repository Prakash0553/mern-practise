import { useNavigate } from 'react-router';
import { baseUrl } from '../../app/mainApi';
import { useGetProductsQuery } from './productApi';
import { Button, Rating } from '@material-tailwind/react';
import { useEffect, useState, useRef } from 'react';

export default function ProductList() {
  const nav = useNavigate();
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const loadMoreRef = useRef(null);

  const { isLoading, error, data } = useGetProductsQuery({ page });

  // Append new products to the list
  useEffect(() => {
    if (data) {
      setAllProducts((prev) => [...prev, ...data]);
    }
  }, [data]);

  // Infinite Scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const current = loadMoreRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [isLoading]);

  if (error) return <h1>{error.data?.message || error?.error}</h1>;

  return (
    <div className='my-16 px-4'>
      <h1 className='font-bold text-2xl'>All Avaible Books</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-6'>

        {allProducts.map(({ _id, title, price, image, rating }) => (
          <div
            onClick={() => nav(`/products/${_id}`)}
            key={_id}
            className='shadow-lg hover:shadow-2xl cursor-pointer rounded-md overflow-hidden'
          >
            <div className='h-[250px] w-full '>
              <img
                className='h-full w-full object-cover'
                src={`${baseUrl}${image}`}
                alt={title}
                loading="lazy"
              />
            </div>

            <div className='px-4 py-2 space-y-1'>
              <h2 className='font-medium truncate'>{title}</h2>
              <p className='text-red-400'>Rs.{price}</p>
              <Rating readonly value={Math.round(rating)} />
            </div>
          </div>
        ))}
      </div>

      {/* Infinite scroll target */}
      <div ref={loadMoreRef} className="h-6"></div>

      {/* Manual "Explore More" button */}
      <div className='flex justify-center mt-6'>
        <Button onClick={() => setPage((prev) => prev + 1)} loading={isLoading}>
          Explore More
        </Button>
      </div>
    </div>
  );
}
