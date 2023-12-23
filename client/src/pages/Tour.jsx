import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

import ToursData from '../assets/js/data_tours.js';

export default function Tour() {
  const { id } = useParams();
  const tour = ToursData.find((tour) => tour.id === parseInt(id));

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className="mx-96 my-16">
        <div className='grid grid-cols-2 gap-10'>
          <div className="">
            <h2 className="text-3xl font-bold mb-4">{tour.name}</h2>
            <p className="text-lg mb-4">{tour.details}</p>
          </div>
          <div>
            <div className="mx-auto mb-8" style={{ maxWidth: '700px' }}>
              <img src={tour.image} alt="" className="rounded-md" style={{ maxHeight: '1200px', maxWidth: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
        <Link to={`/payment/${id}`} className="px-5 py-3 text-white bg-[#029D9D] hover:text-[#029D9D] border-2 border-[#029D9D] hover:bg-white outline-none font-semibold rounded-md text-lg">Book Now</Link>
        <Link to='/tours' className="ml-16 px-5 py-3 text-white bg-[#029D9D] hover:text-[#029D9D] border-2 border-[#029D9D] hover:bg-white outline-none font-semibold rounded-md text-lg">Back</Link>
      </div>
      
      <Footer></Footer>
    </div>
  );
}