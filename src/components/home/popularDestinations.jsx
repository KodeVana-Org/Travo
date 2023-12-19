import { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom'

const Beach = lazy(() => import('./destination/beach_destination'));
const Mountain = lazy(() => import('./destination/mountain_destination'));
const Waterfall = lazy(() => import('./destination/waterfall_destination'));
const Iceberg = lazy(() => import('./destination/iceberg_destination'));

export default function PopularDestinations() {
  const [selectedCategory, setSelectedCategory] = useState('beach');

  const handleChangeCategory = (category) => () => {
    setSelectedCategory(category);
  };

  const renderDestination = () => {
    switch (selectedCategory) {
      case 'beach':
        return <Beach />;
      case 'mountain':
        return <Mountain />;
      case 'waterfall':
        return <Waterfall />;
      case 'iceberg':
        return <Iceberg />;
      default:
        return null;
    }
  };

  return (
    <div className='mb-40 px-96'>
      <h3 className='text-4xl text-center text-[#FCC603]'>Popular Destinations</h3>
      <div className='h-fit flex justify-between items-center'>
        <h1 className='mt-7 text-4xl font-bold'>Choose your place</h1>
        <ul className='flex gap-2 text-lg font-medium items-center'>
          <button
            className='px-3 py-1 group'
            onClick={handleChangeCategory('beach')}>
            <li>Beach</li>
            <div className='h-0.5 w-4/5 opacity-0 group-hover:opacity-100 bg-[#FCC603] transition-all duration-200'></div>
          </button>
          <button
            className='px-3 py-1 group'
            onClick={handleChangeCategory('mountain')}>
            <li>Mountain</li>
            <div className='h-0.5 w-4/5 opacity-0 group-hover:opacity-100 bg-[#FCC603] transition-all duration-200'></div>
          </button>
          <button
            className='px-3 py-1 group'
            onClick={handleChangeCategory('waterfall')}>
            <li>Waterfall</li>
            <div className='h-0.5 w-4/5 opacity-0 group-hover:opacity-100 bg-[#FCC603] transition-all duration-200'></div>
          </button>
          <button
            className='px-3 py-1 group'
            onClick={handleChangeCategory('iceberg')}>
            <li>Icebergs</li>
            <div className='h-0.5 w-4/5 opacity-0 group-hover:opacity-100 bg-[#FCC603] transition-all duration-200'></div>
          </button>
          <Link
            className='px-3 py-1 group'
            to={'destinations'}
          >
            <li>View All</li>
            <div className='h-0.5 w-4/5 opacity-0 group-hover:opacity-100 bg-[#FCC603] transition-all duration-200'></div>
          </Link>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {renderDestination()}
      </Suspense>
    </div>
  );
}

