import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/destination_card.css'

import Destination_Data from '../../../assets/js/data_destinations.js'

export default function Waterfall() {
  const Destination1 = Destination_Data[4]
  const Destination2 = Destination_Data[15]
  const Destination3 = Destination_Data[21]
  const Destination4 = Destination_Data[13]
  const Destination5 = Destination_Data[3]
  const Destination6 = Destination_Data[1]
  
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
              <h3 className='text-2xl text-[#FCC603]'>Angel Falls</h3>
              <h2 className='text-3xl font-bold text-white'>Venezuela</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination2.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Victoria Falls</h3>
              <h2 className='text-3xl font-bold text-white'>Zambia</h2>
            </span>
          </Link>
        </div>
        <div className='mt-7 grid grid-cols-2 gap-7 justify-between'>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination3.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Niagara Falls</h3>
              <h2 className='text-3xl font-bold text-white'>US</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination4.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Iguazu Falls</h3>
              <h2 className='text-3xl font-bold text-white'>Argentina</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination5.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>Gullfoss</h3>
              <h2 className='text-3xl font-bold text-white'>Iceland</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination6.image}
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
