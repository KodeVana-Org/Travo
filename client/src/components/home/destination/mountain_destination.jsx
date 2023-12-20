import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/destination_card.css'

import destination_1 from '../../../assets/mountain_destination-1.jpg'
import destination_2 from '../../../assets/mountain_destination-2.jpg'
import destination_3 from '../../../assets/mountain_destination-3.jpg'
import destination_4 from '../../../assets/mountain_destination-4.jpg'
import destination_5 from '../../../assets/mountain_destination-5.jpg'
import destination_6 from '../../../assets/mountain_destination-6.jpg'

export default function Mountain() {
  return (
    <div className='text-center relative'>
      <div className='mt-16 grid grid-cols-2 gap-7 justify-between'>
        <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
          <Img
            className='h-full w-full destination-card-image'
            src={destination_1}
            alt=''
          />
          <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
            <h3 className='text-2xl text-[#FCC603]'>Shillong</h3>
            <h2 className='text-3xl font-bold text-white'>India</h2>
          </span>
        </Link>
        <div className='grid grid-rows-2 gap-7'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_2}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Hallstatt</h3>
              <h2 className='text-3xl font-bold text-white'>Austria</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_3}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Lecco</h3>
              <h2 className='text-3xl font-bold text-white'>Italy</h2>
            </span>
          </Link>
        </div>
        <div className='grid grid-rows-2 gap-7'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_4}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Wengen</h3>
              <h2 className='text-3xl font-bold text-white'>Switzerland</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_5}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Berchtesgaden</h3>
              <h2 className='text-3xl font-bold text-white'>Germany</h2>
            </span>
          </Link>
        </div>
        <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
          <Img
            className='h-full w-full destination-card-image'
            src={destination_6}
            alt=''
          />
          <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
            <h3 className='text-2xl text-[#FCC603]'>Queenstown</h3>
            <h2 className='text-3xl font-bold text-white'>New Zealand</h2>
          </span>
        </Link>
      </div>
    </div>
  )
}
