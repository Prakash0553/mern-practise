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
    <footer className="bg-blue-gray-900 w-full text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 items-start">
          {/* Company Info */}
          <div className="md:col-span-1 text-center md:text-left">
            <Typography variant="h5" className="text-white mb-3">
              BookEase
            </Typography>
            <Typography className="text-blue-gray-300 text-sm leading-relaxed">
              Your one-stop shop for everything you love. Best deals, fast delivery, and top-notch customer support.
            </Typography>
          </div>

          {/* Categories */}
          <div className="text-center md:text-left">
            <Typography variant="h6" className="text-white mb-3">
              Categories
            </Typography>
            <ul className="space-y-2 text-sm text-blue-gray-200">
              <li><a href="/category/Romance" className="hover:text-white">Romance</a></li>
              <li><a href="/category/fashion" className="hover:text-white">Comedy</a></li>
              <li><a href="/category/home" className="hover:text-white">Adventure</a></li>
              <li><a href="/category/books" className="hover:text-white">Mystery</a></li>
              <li><a href="/category/sports" className="hover:text-white">Horror</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-center md:text-left">
            <Typography variant="h6" className="text-white mb-3">
              Customer Service
            </Typography>
            <ul className="space-y-2 text-sm text-blue-gray-200">
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-white">FAQs</a></li>
              <li><a href="/shipping" className="hover:text-white">Shipping & Returns</a></li>
              <li><a href="/support" className="hover:text-white">Support Center</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <Typography variant="h6" className="text-white mb-3">
              Follow Us
            </Typography>
            <div className="flex justify-center md:justify-start gap-3">
              <IconButton variant="text" color="white" size="sm">
                <FaFacebook />
              </IconButton>
              <IconButton variant="text" color="white" size="sm">
                <FaInstagram />
              </IconButton>
              <IconButton variant="text" color="white" size="sm">
                <FaTwitter />
              </IconButton>
              <IconButton variant="text" color="white" size="sm">
                <FaYoutube />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t border-blue-gray-700 pt-4 text-center text-sm text-blue-gray-400">
          &copy; {new Date().getFullYear()} BookEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
