import { Link } from 'react-router-dom'
import { Img } from 'react-image';

import RotatingReactangle from '../elements/rotatingReactangle';
import RotatingSphere from '../elements/rotatingSphere';
import RotatingTriangle from '../elements/rotatingTriangle';

import hero_banner from '../../assets/images/hero-banner.png'

export default function Hero() {
  return (
    <div className='relative mt-16 mb-40 px-96 flex justify-between'>
      <div className='my-auto'>
        <h3 className='text-5xl text-[#FCC603]'>Just hit the road</h3>
        <h1 className='mt-7 text-5xl font-extrabold leading-tight'>The whole <br /> <span className='px-1 text-white bg-[#029D9D]'>world</span> in one <br /> place</h1>
        <p className='mt-7 text-lg'>Traveling arround the world has become much <br /> easier with the <span className='border-b-2 border-[#FCC603]'>Travo</span></p>
        <div className='mt-7 flex gap-3'>
          <Link className='px-6 py-3 font-bold text-white hover:text-[#029D9D] border-2 border-[#029D9D] bg-[#029D9D] hover:bg-white rounded-md transition-all duration-200' to={'/contact'}>Contact Us</Link>
          <Link className='px-6 py-3 font-bold text-[#FCC603] hover:text-[#029D9D] border-2 border-[#FCC603] hover:border-[#029D9D] rounded-md transition-all duration-200' to={'/about'}>Learn More</Link>
        </div>
      </div>
      <div>
        <Img
          src={hero_banner}
          alt="Travel Image"
        />
      </div>
      <span className='absolute top-0 left-1/2'>
        <RotatingReactangle />
      </span>
      <span className='absolute bottom-20 right-1/2'>
        <RotatingSphere />
      </span>
      <span className='absolute top-20 right-10'>
        <RotatingTriangle />
      </span>
    </div>
  )
}
