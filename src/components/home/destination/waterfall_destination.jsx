import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/destination_card.css'

import destination_1 from '../../../assets/waterfall_destination-1.jpg'
import destination_2 from '../../../assets/waterfall_destination-2.jpg'
import destination_3 from '../../../assets/waterfall_destination-3.jpg'
import destination_4 from '../../../assets/waterfall_destination-4.jpg'
import destination_5 from '../../../assets/waterfall_destination-5.jpg'
import destination_6 from '../../../assets/waterfall_destination-6.jpg'

export default function Waterfall() {
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
              <h3 className='text-2xl text-[#FCC603]'>Angel Falls</h3>
              <h2 className='text-3xl font-bold text-white'>Venezuela</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/bangkok'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_2}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Victoria Falls</h3>
              <h2 className='text-3xl font-bold text-white'>Zambia</h2>
            </span>
          </Link>
        </div>
        <div className='mt-7 grid grid-cols-2 gap-7 justify-between'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/kuala_lumpur'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_3}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Niagara Falls</h3>
              <h2 className='text-3xl font-bold text-white'>US</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/kathmandu'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_4}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Iguazu Falls</h3>
              <h2 className='text-3xl font-bold text-white'>Argentina</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/goa'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_5}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Gullfoss</h3>
              <h2 className='text-3xl font-bold text-white'>Iceland</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/male'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_6}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Tugela Falls</h3>
              <h2 className='text-3xl font-bold text-white'>South Africa</h2>
            </span>
          </Link>
        </div>
      </div>
  )
}
