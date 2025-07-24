import { useNavigate } from 'react-router';
import { baseUrl } from '../../app/mainApi';
import { useGetProductsQuery } from './productApi'
import { Button, Rating } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
//import { baseUrl } from '../../app/mainApi';


export default function ProductList() {
  const nav = useNavigate();
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);

  const { isLoading, error, data } = useGetProductsQuery({page});
  
  useEffect(() => {
    if (data) {
      setAllProducts((prev) => [...prev, ...data]);
    }
  }, [data]);

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error.data?.message || error?.error}</h1>

  return (
    <div className='my-16'>
    <div className='grid grid-cols-5 my-6 gap-4'>

      {allProducts.map(({ _id, title, price, image, rating }) => { // productController ko getProducts bata select garda auxa
        return <div
        onClick={() => nav(`/products/${_id}`)}
        key={_id} className='shadow-lg hover:shadow-2xl cursor-pointer'>

          <div className='h-[250px] w-full px-4'>
            <img className='h-full object-cover' src={`${baseUrl}${image}`} alt="" />
          </div>

          <div className='px-4 py-2 space-y-1'>
            <h2 className='font-medium'>{title}</h2>
            <p className='text-red-400'>Rs.{price}</p>
            <Rating readonly value={Math.round(rating)} />
          </div>

        </div>
      })}

    </div>

    <div className='flex justify-center'>
      <Button  loading={isLoading} onClick={() => setPage((prev) => prev + 1)}>Explore More</Button>
      </div>
    </div>
  )
}