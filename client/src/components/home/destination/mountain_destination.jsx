import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/destination_card.css'

import Destination_Data from '../../../assets/js/data_destinations.js'

export default function Mountain() {
  const Destination1 = Destination_Data[10]
  const Destination2 = Destination_Data[5]
  const Destination3 = Destination_Data[11]
  const Destination4 = Destination_Data[17]
  const Destination5 = Destination_Data[16]
  const Destination6 = Destination_Data[12]
  
  return (
    <div className='text-center relative'>
      <div className='mt-16 grid grid-cols-2 gap-7 justify-between'>
        <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
          <Img
            className='h-full w-full destination-card-image'
            src={Destination1.image}
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
              src={Destination2.image}
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
              src={Destination3.image}
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
              src={Destination4.image}
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
              src={Destination5.image}
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
            src={Destination6.image}
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
