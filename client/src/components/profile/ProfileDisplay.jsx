import  { useEffect, useState } from 'react';
import axios from 'axios';


const ProfileDisplay = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get('http://localhost:6969/api/profile');
        console.log(response);
        setUserDetails(response.data.userDetails);
        setPurchaseDetails(response.data.purchaseDetails);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
    {userDetails ? (
      <div>
        {/* Display user details */}
        <h2>User Details:</h2>
        <p>Name: {userDetails.name}</p>
        <p>Email: {userDetails.email}</p>
        {/* Add other user details here */}
      </div>
    ) : (
      <p>No user details found.</p>
    )}

    {purchaseDetails ? (
      <div>
        {/* Display purchase details */}
        <h2>Purchase Details:</h2>
        <ul>
          {purchaseDetails.map((purchase, index) => (
            <li key={index}>
              {/* Display individual purchase details */}
              <p>Product: {purchase.product}</p>
              <p>Price: {purchase.price}</p>
              {/* Add other purchase details here */}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>No purchase details found.</p>
    )}
  </div>
  );
};

export default ProfileDisplay;