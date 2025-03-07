'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InputSide() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);

    const response = await fetch('https://formspree.io/f/mgvawkzo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (response.ok) {
      router.push('/success');
    } else {
      alert('Failed to submit form');
    }
    setButtonLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative p-4 pb-24">
      <div className="w-11/12 flex flex-col space-y-4">
        <label className="text-gray-700">Name</label>
        <input
          type="text"
          required
          placeholder="First Last"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full text-gray-800 text-sm p-2 border-b-2 border-blue-700 outline-none"
        />
      </div>
      <div className="w-11/12 flex flex-col space-y-4 mt-4">
        <label className="text-gray-700">Email</label>
        <input
          type="email"
          required
          placeholder="sample@yahoo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full text-gray-800 text-sm p-2 border-b-2 border-blue-700 outline-none"
        />
      </div>
      <div className="w-11/12 flex flex-col space-y-4 mt-4">
        <label className="text-gray-700">Phone</label>
        <input
          type="tel"
          required
          placeholder="+9563451932"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full text-gray-800 text-sm p-2 border-b-2 border-blue-700 outline-none"
        />
      </div>
      <div className="w-11/12 flex flex-col space-y-4 mt-4">
        <label className="text-gray-700">Message</label>
        <textarea
          required
          placeholder="Write message (Please Include the Apartment #)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full text-gray-800 text-sm p-2 border-b-2 border-blue-700 outline-none"
        />
      </div>
      <div className="absolute bottom-5 right-5">
        {buttonLoading ? (
          <button className="px-6 py-3 bg-blue-900 text-white rounded-lg">Loading...</button>
        ) : (
          <input
            type="submit"
            value="Send Message"
            className="px-6 py-3 bg-blue-900 text-white rounded-lg cursor-pointer"
          />
        )}
      </div>
    </form>
  );
}
