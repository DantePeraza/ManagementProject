import Image from 'next/image';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-sm py-8 px-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="text-center mb-4">
          <h1 className="text-white text-2xl font-bold tracking-wide">FARIAS</h1>
          <p className="text-xs">Management</p>
        </div>

        {/* Business Hours */}
        <div className="text-center mb-4">
          <p>Sun: 1 PM - 5 PM</p>
          <p>Mon - Fri: 9 AM - 6 PM</p>
          <p>Sat: 10 AM - 5 PM</p>
        </div>

        {/* Address & Contact */}
        <div className="text-center mb-4">
          <p>8503 East Monte Cristo Rd</p>
          <p>Edinburg, TX 78542</p>
          <p>Phone: 956.802.2564</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-4 text-xs mb-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Disclaimer</a>
          <a href="#" className="hover:text-white">Accessibility</a>
          <a href="#" className="hover:text-white">Site Map</a>
          <a href="#" className="hover:text-white">Do Not Sell My Personal Information</a>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between w-full max-w-5xl items-center">
          

          {/* Designer Info */}
          <p className="text-xs text-center">
            Website Designed by Jobey Farias, Ramon Bernal, Dante Peraza  &copy; {new Date().getFullYear()}
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF size={16} /></a>
            <a href="#" className="hover:text-white"><FaGoogle size={16} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
