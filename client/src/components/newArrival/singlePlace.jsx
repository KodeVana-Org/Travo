import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePlace = () => {
  const { id } = useParams(); 
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(`http://localhost:6969/v1/places/${id}`);
        setPlace(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching place:', error);
        setLoading(false);
      }
    };

    fetchPlace();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : place ? (
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
        </div>
      </div>
      ) : (
        <p>Place not found</p>
      )}
    </div>
  );
};

export default SinglePlace;
