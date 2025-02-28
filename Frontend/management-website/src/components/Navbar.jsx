'use client';

import Image from "next/image"


export default function Navbar(){


  const image = "<Image priority src={FMLogo} alt=FariasManagementLogo/>"
  return (
    <>
      <nav className="w-full pt-8 pb-12">
        <ul className="list-none flex flex-row space-x-4 w-full justify-around text-center items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/rentals">For Rent</a>
          </li>
          <li>
            <a href="/residents">Residents</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
          <a href="/payment">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</button>
          </a>
          </li>
        </ul>
      </nav>
    </>
  )
}