import { Img } from 'react-image'
import { Link } from 'react-router-dom'

import '../../../styles/destination_card.css'

import Destination_Data from '../../../assets/js/data_destinations.js'

export default function Beach() {
  const Destination1 = Destination_Data[0]
  const Destination2 = Destination_Data[1]
  const Destination3 = Destination_Data[2]
  const Destination4 = Destination_Data[3]
  const Destination5 = Destination_Data[4]
  const Destination6 = Destination_Data[5]
  const Destination7 = Destination_Data[6]
  
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
              <h3 className='text-2xl text-[#FCC603]'>{Destination1.place}</h3>
              <h2 className='text-3xl font-bold text-white'>{Destination1.country}</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination2.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>{Destination2.place}</h3>
              <h2 className='text-3xl font-bold text-white'>{Destination2.country}</h2>
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
              <h3 className='text-2xl text-[#FCC603]'>{Destination3.place}</h3>
              <h2 className='text-3xl font-bold text-white'>{Destination3.country}</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination4.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>{Destination4.place}</h3>
              <h2 className='text-3xl font-bold text-white'>{Destination4.place}</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination5.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>{Destination5.place}</h3>
              <h2 className='text-3xl font-bold text-white'>{Destination5.country}</h2>
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
              <h3 className='text-2xl text-[#FCC603]'>{Destination6.place}</h3>
              <h2 className='text-3xl font-bold text-white'>{Destination6.country}</h2>
            </span>
          </Link>
          <Link className='relative overflow-hidden destination-card rounded-md' to={'/destinations'}>
            <Img
              className='h-full w-full destination-card-image'
              src={Destination7.image}
              alt=''
            />
            <span className='p-10 w-full text-left absolute bottom-0 left-0 z-10'>
              <h3 className='text-2xl text-[#FCC603]'>{Destination7.place}</h3>
              <h2 className='text-3xl font-bold text-white'>{Destination7.country}</h2>
            </span>
          </Link>
        </div>
      </div>
  )
}
