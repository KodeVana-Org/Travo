import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
  const [purchasePlaces, setPurchasePlaces] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const purchasePlacesResponse = await axios.get('http://localhost:6969/api/purchase-places', config);
        if (purchasePlacesResponse.data && purchasePlacesResponse.data.purchasePlaces) {
          setPurchasePlaces(purchasePlacesResponse.data.purchasePlaces);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
          window.location.reload('/me'); // Refresh the page after a short delay
        }, 1500);
      } catch (error) {
        setMessage('Failed to delete place');
        console.error(error);
      }
    }
  };

  return (
    <div className="container mx-auto px-96 mt-4">
     
      {purchasePlaces ? (
        <div className="grid grid-cols-1 gap-4">
          <h2 className="text-xl font-semibold">Purchase Places:</h2>
          <ul className="divide-y divide-gray-200">
            {purchasePlaces.map((place, index) => (
              <li key={index} className="py-4">
                <p className="text-lg font-semibold">Place Name: {place.placeName}</p>
                <p className="text-gray-600">Amount: {place.amount}</p>
                {/* Add other place details here */}
                <div>
                <button onClick={() => handleDelete(place._id)} className='bg-blue-500 text-white mt-2 px-4 py-2 rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500'>Cancel Order</button>
            {message && <p>{message}</p>}
           </div>
              </li>
              
            ))}
          </ul>
        </div>
      ) : (
        <p>No purchase places found.</p>
      )}
    </div>
  );
};

export default Profile;
