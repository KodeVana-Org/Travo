import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

import toursData from '../components/home/tours/data';

export default function Tour() {
  const { id } = useParams();
  const tour = toursData.find((tour) => tour.id === parseInt(id));

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className="mx-96 my-16 flex justify-between">
        <div className="flex w-[50%]">
          <p className="text-xl mb-4">{tour.details}</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{tour.name}</h2>
          <div className="mx-auto mb-8" style={{ maxWidth: '700px' }}>
            <img src={tour.image} alt="" className="rounded-md" style={{ maxHeight: '1200px', maxWidth: '100%', display: 'block' }} />
          </div>
          <div className="mb-4">
            <Link to={`/payment/${id}`} className="text-white bg-[#029D9D] hover:text-[#029D9D] border-2 border-[#029D9D] hover:bg-white outline-none font-semibold rounded-md text-lg px-5 py-3">Book Now</Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
