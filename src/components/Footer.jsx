import React from "react";
import { Typography, IconButton } from "@material-tailwind/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function EcommerceFooter() {
  return (
    <footer className=" bg-blue-gray-900 w-full  text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto">

      <div className=" px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                      gap-8  place-items-center md:place-items-start">

        {/* Company Info */}
        <div className="flex flex-col items-center">
          <Typography variant="h5" className="text-white mb-2">
            BookEase
          </Typography>
          <Typography className="text-blue-gray-300 text-sm">
            Your one-stop shop for everything you love. Best deals, fast delivery, and top-notch customer support.
          </Typography>
        </div>

        {/* Categories */}
        <div>
          <Typography variant="h6" className="text-white mb-2">
            Categories
          </Typography>
          <ul className="space-y-1 text-sm text-blue-gray-200 flex flex-col items-center">
            <li><a href="/category/Romance" className="hover:text-white">Romance</a></li>
            <li><a href="/category/fashion" className="hover:text-white">Comedy</a></li>
            <li><a href="/category/home" className="hover:text-white">Adventure</a></li>
            <li><a href="/category/books" className="hover:text-white">Mystery</a></li>
            <li><a href="/category/sports" className="hover:text-white">Horror</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <Typography variant="h6" className="text-white mb-2">
            Customer Service
          </Typography>
          <ul className="space-y-1 text-sm text-blue-gray-200 flex flex-col items-center">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="/support" className="hover:text-white">Support Center</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <Typography variant="h6" className="text-white mb-2">
            Follow Us
          </Typography>
          <div className="">
            <ul className="flex flex-col items-center">
                <li><IconButton variant="text" color="white" size="sm"><FaFacebook /></IconButton></li>
                <li><IconButton variant="text" color="white" size="sm"><FaInstagram /></IconButton></li>
                <li><IconButton variant="text" color="white" size="sm"><FaTwitter /></IconButton></li>
                <li><IconButton variant="text" color="white" size="sm"><FaYoutube /></IconButton></li>    
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-8 border-t border-blue-gray-700 pt-4 text-center text-sm text-blue-gray-400">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>

      </div>
    </footer>
  );
}
