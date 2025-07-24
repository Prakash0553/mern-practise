import React, { useRef } from "react";
import { useGetTop5ProductsQuery } from './productApi';
import { baseUrl } from "../../app/mainApi";
import { useNavigate } from "react-router";




export default function Swipper() {
  const { isLoading, error, data } = useGetTop5ProductsQuery();
  const sliderRef = useRef();
  const nav = useNavigate();

  
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error.data?.message || error?.error}</h1>

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 200;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-5 py-6 my-20 pb-20 relative" style={{ backgroundColor: "#f6f1eb" }}>

        <div className="mt-12">
            <h5 className="font-[1.25rem] text-center">Explore From Our Amazing Collection of</h5>
            <h5 className="text-[2rem] font-bold text-center">Best Selling Books This Year</h5>
        </div>
      {/* Slider Items */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-12 mt-9"
      >
        {data?.products && data.products.map(({ _id, image, title }) => (
          <div
            onClick={() => nav(`/products/${_id}`)}
            key={_id}
            className="min-w-[160px] bg-white rounded-xl shadow-md p-4 text-center"
          >
            <img
              src={`${baseUrl}${image}`}
              alt="image-1"
              className="w-26 h-28 object-cover mx-auto mb-2"
            />
            <h2 className="text-sm font-medium text-gray-800 ">{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
