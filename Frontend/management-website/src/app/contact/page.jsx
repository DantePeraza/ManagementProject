"use client"
import DetailsBar from "@/components/DetailsBar";
import InputSide from "@/components/InputSide";
import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-whitesmoke pb-12">
      <div className="flex flex-col mt-10 text-center">
        <b className="text-3xl text-blue-900">Contact Us</b>
        <p className="text-base text-blue-950">Any questions about the Apartment? Just write us a message</p>
      </div>
      <div className="w-2/3 min-w-[600px] grid grid-cols-1 md:grid-cols-[1fr_1.5fr] bg-white p-2 rounded-md gap-2 md:w-3/4 md:max-w-[500px] md:gap-0">
        <DetailsBar /> 
        <InputSide />
      </div>
    </div>
  );
}