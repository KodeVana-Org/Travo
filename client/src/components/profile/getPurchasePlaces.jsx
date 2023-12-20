import { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [purchasePlaces, setPurchasePlaces] = useState(null);

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
