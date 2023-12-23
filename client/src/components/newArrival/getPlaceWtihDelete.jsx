import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../navbar';
import { toast } from 'react-toastify';
const PlaceList = () => {
  const [places, setPlaces] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get('http://localhost:6969/v1/get-places');
        const fetchedPlaces = response.data; // Assuming it returns an array of place objects
        setPlaces(fetchedPlaces);
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    fetchPlaces();
  }, []);

  const handleDelete = async (id) => {
    console.log(id)
    const confirmDelete = window.confirm('Are you sure you want to cancel this order?');
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:6969/api/place-delete/${id}`);
        setMessage(response.data.message);
        toast.success('Place deleted successfully'); 
        setTimeout(() => {
          window.location.reload(); 
        }, 1500);
      } catch (error) {
        setMessage('Failed to delete place');
        console.error(error);
      }
    }
  };


  return (
    <>
    <NavBar />
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">places you added !</h2>
      <div className="flex flex-wrap -mx-4">
      {places.length ? (
  places.map((place, index) => (
    <div key={index} className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div className="relative overflow-hidden">
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-64 object-cover mb-2 transition duration-300 transform hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 px-4 text-white">
          <h2 className="text-xl font-semibold">{place.name}</h2>
          <h3 className="text-lg">Price: {place.price}</h3>
          <p className="text-sm">{place.details}</p>
          <Link onClick={() => handleDelete(place._id)}
            className="px-8  py-2 text-center font-bold text-[#029D9D] hover:text-white bg-black border-2 border-white hover:bg-[#029D9D] rounded-md transition-all duration-200"
            
          >
            Remove Place
          </Link>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  ))
) : (
  <p>No places found.</p>
)}
      </div>
    </div>
    </>
  );
};

export default PlaceList;
