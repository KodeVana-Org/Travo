import React from 'react';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';

import About_banner from "../../assets/images/about-banner.png";

export default function About() {
  return (
    <div className="mx-96 mt-16 mb-16">
      <div className='grid grid-cols-3 justify-between'>
        <div className='col-span-2 my-auto'>
          <h1 className="text-4xl font-extrabold mb-7">Discover the <span className='px-1 text-white bg-[#029D9D]'>World</span> with Travo</h1>
          <p className="text-lg mb-14">
            Travo is not just a travel agency; it's a gateway to unforgettable experiences. Our curated tours
            are designed for every type of traveler, from the adventurous solo explorer to families seeking quality
            time together.
          </p>
          <Link className='px-4 py-2.5 text-xl font-semibold text-white bg-[#029D9D] hover:text-[#029D9D] hover:bg-white border-2 border-[#029D9D] rounded-md' to={'/tours'}>Book Tour Now</Link>
        </div>
        <div className='col-span-1'>
          <Img
            className="w-full"
            src={About_banner}
            alt="Travo Hero"
          />
        </div>
      </div>
      <p className="text-lg mb-6">
        Join our weekly adventures led by experienced guides who are not only experts in their field but also
        dedicated to ensuring you have the time of your life. Choose from public tours for a sociable journey
        or private tours for a more intimate experience.
      </p>
      <p className="text-lg mb-8">
        At Travo, we celebrate diversity and understand the needs of introverted travelers. Our goal is to make
        every journey enjoyable, providing the right balance of social interactions and personal space.
      </p>
      <p className="text-xl text-center font-semibold">Embark on your next adventure with Travo!</p>
    </div>
  )
}

