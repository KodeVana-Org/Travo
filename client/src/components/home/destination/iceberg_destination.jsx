import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/destination_card.css'

import destination_1 from '../../../assets/iceberg_destination-1.jpg'
import destination_2 from '../../../assets/iceberg_destination-2.jpg'
import destination_3 from '../../../assets/iceberg_destination-3.jpg'
import destination_4 from '../../../assets/iceberg_destination-4.jpg'
import destination_5 from '../../../assets/iceberg_destination-5.jpg'
import destination_6 from '../../../assets/iceberg_destination-6.jpg'

export default function Iceberg() {
  return (
    <div className='text-center relative'>
      <div className='mt-16 grid grid-cols-2 gap-7 justify-between'>
        <div className='grid grid-rows-2 gap-7'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/bangkok'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_1}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Baffin Island</h3>
              <h2 className='text-3xl font-bold text-white'>Greenland</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/bangkok'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_2}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Resurrection Bay</h3>
              <h2 className='text-3xl font-bold text-white'>Alaska</h2>
            </span>
          </Link>
        </div>
        <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/male'}>
          <Img
            className='h-full w-full destination-card-image'
            src={destination_3}
            alt=''
          />
          <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
            <h3 className='text-2xl text-[#FCC603]'>Reykjavík</h3>
            <h2 className='text-3xl font-bold text-white'>Iceland</h2>
          </span>
        </Link>
        <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/male'}>
          <Img
            className='h-full w-full destination-card-image'
            src={destination_4}
            alt=''
          />
          <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
            <h3 className='text-2xl text-[#FCC603]'>Harbin</h3>
            <h2 className='text-3xl font-bold text-white'>China</h2>
          </span>
        </Link>
        <div className='grid grid-rows-2 gap-7'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/bangkok'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_5}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Cotswolds</h3>
              <h2 className='text-3xl font-bold text-white'>England</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destination/bangkok'}>
            <Img
              className='h-full w-full destination-card-image'
              src={destination_6}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Lake Minnewanka</h3>
              <h2 className='text-3xl font-bold text-white'>Canada</h2>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
