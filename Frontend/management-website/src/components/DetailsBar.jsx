'use client';

import React from 'react';
import { Phone, Mail, Linkedin } from 'react-feather';
import Link from 'next/link';

export default function DetailsBar() {
  return (
    <div className="bg-blue-900 rounded-lg relative p-8 flex flex-col items-center pb-24 md:pb-20">
      <div className="flex flex-col items-center text-center">
        <p className="text-white text-lg font-bold">Contact Information</p>
        <p className="text-white text-sm leading-5 mt-1">
          Fill up the form and our team will get back to you within 24 hours
        </p>
      </div>
      
      <div className="mt-6 space-y-3">
        <Link href="tel:+233543201893" className="flex items-center space-x-2 text-white">
          <Phone size={15} color="rgb(253, 252, 255)" />
          <span>+(956)802-2564</span>
        </Link>
        <Link href="mailto:aljay3334@gmail.com" className="flex items-center space-x-2 text-white">
          <Mail size={15} color="rgb(253, 252, 252)" />
          <span>Jobeyfarias01@gmail.com</span>
        </Link>
      </div>
      
      <div className="relative mt-8">
        <div className="w-12 h-12 bg-blue-500 rounded-full z-10 ml-2"></div>
        <div className="absolute w-8 h-8 bg-white rounded-full ml-2 top-4"></div>
      </div>
      
      <div className="absolute bottom-8 flex space-x-4">
        <Link href="https://www.linkedin.com/in/jobeyfarias/" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-pink-500">
          <Linkedin color="#fff" size={20} />
        </Link>
      </div>
    </div>
  );
}
