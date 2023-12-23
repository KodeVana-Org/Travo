import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/destination_card.css'

import Destination_Data from '../../../assets/js/data_destinations.js'

export default function Iceberg() {
  const Destination1 = Destination_Data[18]
  const Destination2 = Destination_Data[19]
  const Destination3 = Destination_Data[2]
  const Destination4 = Destination_Data[22]
  const Destination5 = Destination_Data[7]
  const Destination6 = Destination_Data[24]
  
  return (
    <div className='text-center relative'>
      <div className='mt-16 grid grid-cols-2 gap-7 justify-between'>
        <div className='grid grid-rows-2 gap-7'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination1.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Baffin Island</h3>
              <h2 className='text-3xl font-bold text-white'>Greenland</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination2.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Resurrection Bay</h3>
              <h2 className='text-3xl font-bold text-white'>Alaska</h2>
            </span>
          </Link>
        </div>
        <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
          <Img
            className='h-full w-full destination-card-image'
            src={Destination3.image}
            alt=''
          />
          <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
            <h3 className='text-2xl text-[#FCC603]'>Reykjavík</h3>
            <h2 className='text-3xl font-bold text-white'>Iceland</h2>
          </span>
        </Link>
        <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
          <Img
            className='h-full w-full destination-card-image'
            src={Destination4.image}
            alt=''
          />
          <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
            <h3 className='text-2xl text-[#FCC603]'>Harbin</h3>
            <h2 className='text-3xl font-bold text-white'>China</h2>
          </span>
        </Link>
        <div className='grid grid-rows-2 gap-7'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination5.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Cotswolds</h3>
              <h2 className='text-3xl font-bold text-white'>England</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination6.image}
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
