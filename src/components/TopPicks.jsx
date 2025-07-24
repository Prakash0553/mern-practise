import { Button } from '@material-tailwind/react'
import React from 'react'
import oneImage from '../assests'

export default function TopPicks() {
  return (
    <div>
        <div>
            <h5 className="text-[1.6rem] font-stretch-150% pb-3 ">Our picks for you</h5>
            <p className='text-[1rem] '>We will curate special book recommendations for you based on your genre preferences</p>
            <h6 className='mt-3 mb-5 '>Login or create account to get started.</h6>
            <Button color='blue'>Register</Button>
        </div>

        <div>
            <img src="" alt="" srcset="" />
        </div>
    </div>
  )
}
