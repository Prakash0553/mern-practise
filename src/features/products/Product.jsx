
import { useNavigate, useParams } from "react-router"
import { useGetProductQuery } from "./productApi";
import { baseUrl } from "../../app/mainApi";
import { Button, Card, IconButton, Rating } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToCart } from "../carts/cartSlice";
import AddReview from "../user/AddReview.jsx";
import ReviewList from "../user/ReviewList.jsx";


// single product ko lagi
export default function Product() {

  const { id } = useParams();
  const { user } = useSelector((state) => state.userSlice);
  const { data, isLoading, error } = useGetProductQuery(id); //single product tanni

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error.data?.message || error?.error}</h1>



  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start py-5">
        <div className="w-full">
          <img src={`${baseUrl}${data.image}`} alt="" className="w-full h-auto object-cover rounded-xl" />
        </div>
        <div className="space-y-3">
          <h2 className="font-medium">{data.title}</h2>
          <p className="text-red-400">Rs.{data.price}</p>
          <Rating readonly value={Math.round(data.rating)} />
          <p>{data.description}</p>
        </div>
        <ProductAddToCart product={data} /> {/* product add garni belama product ko data pathauni */}
      </div>

      {user && user?.role === 'User' && <AddReview id={data._id} />}
      <ReviewList product={data} />
    </div>
  )
}



function ProductAddToCart({ product }) { {/* as a props data leko */}
  const nav = useNavigate();
  const { carts } = useSelector((state) => state.cartSlice); {/* sabai carts lai tanxa */}
  const isExistCart = carts.find((cart) => cart._id === product._id); {/* cart id ra product id barabar xa vani tyo product tyai xa vanera bujhni */}

  const [count, setCount] = useState(isExistCart?.qty || 1); {/* paila add gareko xa(exist garxa) vani qty ko nuber auxa natra 1 auxa */}
  const { user } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(setToCart({ title: product.title, image: product.image, price: product.price, qty: count, _id: product._id }));
    nav('/carts');
  }
  return (
    <Card className="flex flex-col items-center gap-4 p-6 shadow-md rounded-xl w-full ">
      <h1 className="text-lg font-medium">Product Add</h1>
      <div className="flex items-center gap-3">

        <IconButton
          onClick={() => setCount(count - 1)}
          disabled={count === 1}
          size="sm">
          <i className="fas fa-minus" />
        </IconButton>

        <h1>{count}</h1>

        <IconButton
          onClick={() => setCount(count + 1)}
          size="sm">
          <i className="fas fa-add" />
        </IconButton>

      </div>
      <Button
        onClick={handleCart}
        // user xaina vaney button disabled
        //admin ni huna vayena add to cart garnalai
        disabled={!user || user?.role === 'Admin'}>Add To Cart</Button>
    </Card>
  )
}
 // handlecart click garda dispatch ley setToCart lai call garxa 
 //settocart ley tapai ley pathako object(id ,qty au sabai data) linxa