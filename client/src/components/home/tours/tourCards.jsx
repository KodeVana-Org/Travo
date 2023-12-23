import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/hideScrollbar.css'

import TourData from '../../../assets/js/data_tours.js'

import Clock from '../../../assets/icons/clock-9.png'
import Check from '../../../assets/icons/check.png'
import New from '../../../assets/icons/badge-plus.png'

export default function TourCards() {
  const Tour1 = TourData[0];
  const Tour2 = TourData[3];
  const Tour3 = TourData[9];
  
  return (
    <div className="mt-16 flex gap-7">
      <Link className='h-full rounded-md shadow-inner shadow-gray-300' to={'./'}>
        <Img
          className='w-96 h-64 rounded-t-md'
          src={Tour1.image}
          alt=''
        />
        <div className='p-5'>
          <h4 className='text-lg font-semibold'>Mountain Hiking Tour</h4>
          <p className='text-base opacity-60'>{Tour1.duration}</p>
          <p className='mt-3'>From</p>
          <h2 className='text-2xl font-bold'>${Tour1.price}.00</h2>
          <p className='mt-3'>*Price varies</p>
          <span className='flex gap-2'>
            <Img
              className='h-6 w-6'
              src={Clock}
              alt=''
            />
            <p>{Tour1.daysToGo}</p>
          </span>
          <div className='flex justify-between'>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={Check}
                alt=''
              />
              <p>Free cencellation</p>
            </span>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={New}
                alt=''
              />
              <p>{Tour1.isNew}</p>
            </span>
          </div>
        </div>
      </Link>
      <Link className='h-full rounded-md shadow-inner shadow-gray-300' to={'./'}>
        <Img
          className='w-96 h-64 rounded-t-md'
          src={Tour2.image}
          alt=''
        />
        <div className='p-5'>
          <h4 className='text-lg font-semibold'>Water Lack</h4>
          <p className='text-base opacity-60'>{Tour2.duration}</p>
          <p className='mt-3'>From</p>
          <h2 className='text-2xl font-bold'>${Tour2.price}.00</h2>
          <p className='mt-3'>*Price varies</p>
          <span className='flex gap-2'>
            <Img
              className='h-6 w-6'
              src={Clock}
              alt=''
            />
            <p>{Tour2.daysToGo}</p>
          </span>
          <div className='flex justify-between'>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={Check}
                alt=''
              />
              <p>Free cencellation</p>
            </span>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={New}
                alt=''
              />
              <p>{Tour2.isNew}</p>
            </span>
          </div>
        </div>
      </Link>
      <Link className='h-full rounded-md shadow-inner shadow-gray-300' to={'./'}>
        <Img
          className='w-96 h-64 rounded-t-md'
          src={Tour3.image}
          alt=''
        />
        <div className='p-5'>
          <h4 className='text-lg font-semibold'>Waterfall swimming</h4>
          <p className='text-base opacity-60'>{Tour3.duration}</p>
          <p className='mt-3'>From</p>
          <h2 className='text-2xl font-bold'>${Tour3.price}.00</h2>
          <p className='mt-3'>*Price varies</p>
          <span className='flex gap-2'>
            <Img
              className='h-6 w-6'
              src={Clock}
              alt=''
            />
            <p>{Tour3.daysToGo}</p>
          </span>
          <div className='flex justify-between'>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={Check}
                alt=''
              />
              <p>Free cencellation</p>
            </span>
            <span className='flex gap-2'>
              <Img
                className='h-6 w-6'
                src={New}
                alt=''
              />
              <p>{Tour3.isNew}</p>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
