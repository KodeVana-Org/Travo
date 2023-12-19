import { Link } from 'react-router-dom'

import TourCards from './tours/tourCards'

function PopularTours() {
  return (
    <div className="mb-40 mx-96">
      <h3 className='text-4xl text-center text-[#FCC603]'>Trending Tours</h3>
      <div className=''>
        <div className='flex justify-between items-center'>
          <span>
            <h1 className='mt-7 mb-7 text-4xl font-bold'>Let&lsquo;s create a memory in 2023</h1>
            <p>New places, new friends and new experience all in one stop</p>
          </span>
          <span className='flex gap-7  items-center'>
            <Link className='font-medium text-[#029D9D] bg-white border-2 border-[#029D9D] hover:text-white hover:bg-[#029D9D] transition-all duration-200 px-3 py-2 rounded-md'
            to={'/tours'}
            >View All</Link>
          </span>
        </div>
        <div className=''>
          <TourCards />
        </div>
      </div>
    </div>
  )
}

export default PopularTours