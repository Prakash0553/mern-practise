import { Button } from '@material-tailwind/react'
import oneImage from '../assests/ourPicks.webp'
import { Link } from 'react-router-dom'



export default function TopPicks() {
  return (

    <div className='flex  h-[22rem]  flex-col md:flex-row justify-between items-center gap-6 
                    px-6 md:px-10 py-10 my-16
                    bg-gradient-to-b from-[#fff7e6] via-[#fff3d6] to-[#fffdfa] w-full'>

       <div className="max-w-lg">
         <h5 className="text-2xl sm:text-2xl lg:text-3xl font-semibold pb-3">Our picks for you</h5>
         <p className='text-sm sm:text-base'>We will curate special book recommendations for you based on your genre preferences</p>
         <h6 className='mt-3 mb-5  text-xs sm:text-sm '>Login or create account to get started.</h6>

         <Link to={`/sign-up`}><Button  color='blue' className='flex justify-center items-center mx-auto lg:mx-0'>Register</Button> </Link>
         
         
       </div>

      <div className="h-full flex-col overflow-y-hidden lg:flex-row ">
       <img src={oneImage} alt="Our picks" className="h-full object-contain " />
      </div>

    </div>

  )
}
