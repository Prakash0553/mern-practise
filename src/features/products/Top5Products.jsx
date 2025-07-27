import React from 'react';
import { Carousel } from "@material-tailwind/react";
import { useGetTop5ProductsQuery } from './productApi';
import { baseUrl } from '../../app/mainApi';
import { useNavigate } from 'react-router-dom';

export default function Top5Products() {
  const { isLoading, error, data } = useGetTop5ProductsQuery();
  const nav = useNavigate();

  if (isLoading) return <h1 className="text-center my-10 text-lg">Loading top products...</h1>;
  if (error) return <h1 className="text-center text-red-500">{error.data?.message || error?.error}</h1>;

  return (
    <div className="w-full px-0">
      <Carousel
        //autoplay
        className="h-[375px] w-full overflow-hidden shadow-lg"
      >
        {data?.products?.map(({ _id, image, title }) => (
          <div
            key={_id}
            onClick={() => nav(`/products/${_id}`)}
            className="cursor-pointer w-full h-full"
          >
            <img
              src={`${baseUrl}${image}`}
              alt={title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
