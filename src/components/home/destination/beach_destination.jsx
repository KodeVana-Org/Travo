import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/destination_card.css'

import destination_1 from '../../../assets/beach_destination-1.jpg'
import destination_2 from '../../../assets/beach_destination-2.jpg'
import destination_3 from '../../../assets/beach_destination-3.jpg'
import destination_4 from '../../../assets/beach_destination-4.jpg'
import destination_5 from '../../../assets/beach_destination-5.jpg'
import destination_6 from '../../../assets/beach_destination-6.jpg'
import destination_7 from '../../../assets/beach_destination-7.jpg'

export default function Beach() {
  return (
    <div className='text-center relative'>
        <div className='mt-16 grid grid-cols-2 gap-7 justify-between'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/male'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_1}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Male</h3>
              <h2 className='text-3xl font-bold text-white'>Maldives</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/bangkok'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_2}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Bangkok</h3>
              <h2 className='text-3xl font-bold text-white'>Thailand</h2>
            </span>
          </Link>
        </div>
        <div className='mt-7 grid grid-cols-3 gap-7 justify-between'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/kuala_lumpur'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_3}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Kuala Lumpur</h3>
              <h2 className='text-3xl font-bold text-white'>Malaysia</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/kathmandu'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_4}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Kathmandu</h3>
              <h2 className='text-3xl font-bold text-white'>Nepal</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/goa'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_5}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Goa</h3>
              <h2 className='text-3xl font-bold text-white'>India</h2>
            </span>
          </Link>
        </div>
        <div className='mt-7 grid grid-cols-2 gap-7 justify-between'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/male'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_6}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Lakshadweep</h3>
              <h2 className='text-3xl font-bold text-white'>Islands</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/bangkok'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_7}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Alibaug</h3>
              <h2 className='text-3xl font-bold text-white'>Maharashtra</h2>
            </span>
          </Link>
        </div>
      </div>
  )
}
