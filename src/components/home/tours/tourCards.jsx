import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/hideScrollbar.css'

import Clock from '../../../assets/icons/clock-9.png'
import Check from '../../../assets/icons/check.png'
import New from '../../../assets/icons/badge-plus.png'

import Tour_1 from '../../../assets/tour-1.jpg'
import Tour_2 from '../../../assets/tour-4.jpg'
import Tour_3 from '../../../assets/tour-10.jpg'

export default function TourCards() {
  return (
    <div className="mt-16 flex gap-7">
      <Link className='h-full rounded-md shadow-inner shadow-gray-300' to={'./'}>
        <Img
          className='w-96 h-64 rounded-t-md'
          src={Tour_1}
          alt=''
        />
        <div className='p-5'>
          <h4 className='text-lg font-semibold'>Mountain Hiking Tour</h4>
          <p className='text-base opacity-60'>2 weeks group tour</p>
          <p className='mt-3'>From</p>
          <h2 className='text-2xl font-bold'>$895.00</h2>
          <p className='mt-3'>*Price varies</p>
          <span className='flex gap-2'>
            <Img
              className='h-6 w-6'
              src={Clock}
              alt=''
            />
            <p>7 Days to go</p>
          </span>
          <div className='flex justify-between'>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={Check}
                alt=''
              />
              <p>Free cencelation</p>
            </span>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={New}
                alt=''
              />
              <p>New on Travo</p>
            </span>
          </div>
        </div>
      </Link>
      <Link className='h-full rounded-md shadow-inner shadow-gray-300' to={'./'}>
        <Img
          className='w-96 h-64 rounded-t-md'
          src={Tour_2}
          alt=''
        />
        <div className='p-5'>
          <h4 className='text-lg font-semibold'>Water Lack</h4>
          <p className='text-base opacity-60'>1 week group tour</p>
          <p className='mt-3'>From</p>
          <h2 className='text-2xl font-bold'>$895.00</h2>
          <p className='mt-3'>*Price varies</p>
          <span className='flex gap-2'>
            <Img
              className='h-6 w-6'
              src={Clock}
              alt=''
            />
            <p>9 Days to go</p>
          </span>
          <div className='flex justify-between'>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={Check}
                alt=''
              />
              <p>Free cencelation</p>
            </span>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={New}
                alt=''
              />
              <p>New on Travo</p>
            </span>
          </div>
        </div>
      </Link>
      <Link className='h-full rounded-md shadow-inner shadow-gray-300' to={'./'}>
        <Img
          className='w-96 h-64 rounded-t-md'
          src={Tour_3}
          alt=''
        />
        <div className='p-5'>
          <h4 className='text-lg font-semibold'>Waterfall swimming</h4>
          <p className='text-base opacity-60'>3 days group tour</p>
          <p className='mt-3'>From</p>
          <h2 className='text-2xl font-bold'>$895.00</h2>
          <p className='mt-3'>*Price varies</p>
          <span className='flex gap-2'>
            <Img
              className='h-6 w-6'
              src={Clock}
              alt=''
            />
            <p>4 Days to go</p>
          </span>
          <div className='flex justify-between'>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={Check}
                alt=''
              />
              <p>Free cencelation</p>
            </span>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={New}
                alt=''
              />
              <p>New on Travo</p>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
