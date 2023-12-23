import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/destination_card.css'

import Destination_Data from '../../../assets/js/data_destinations.js'

export default function Beach() {
  const Destination1 = Destination_Data[0]
  const Destination2 = Destination_Data[9]
  const Destination3 = Destination_Data[20]
  const Destination4 = Destination_Data[6]
  const Destination5 = Destination_Data[14]
  const Destination6 = Destination_Data[8]
  const Destination7 = Destination_Data[23]
  
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
              <h3 className='text-2xl text-[#FCC603]'>Male</h3>
              <h2 className='text-3xl font-bold text-white'>Maldives</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination2.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Bangkok</h3>
              <h2 className='text-3xl font-bold text-white'>Thailand</h2>
            </span>
          </Link>
        </div>
        <div className='mt-7 grid grid-cols-3 gap-7 justify-between'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination3.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Kuala Lumpur</h3>
              <h2 className='text-3xl font-bold text-white'>Malaysia</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination4.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Kathmandu</h3>
              <h2 className='text-3xl font-bold text-white'>Nepal</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination5.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Goa</h3>
              <h2 className='text-3xl font-bold text-white'>India</h2>
            </span>
          </Link>
        </div>
        <div className='mt-7 grid grid-cols-2 gap-7 justify-between'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination6.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Lakshadweep</h3>
              <h2 className='text-3xl font-bold text-white'>Islands</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination7.image}
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
