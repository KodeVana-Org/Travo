import  { useEffect, useState } from 'react';
import axios from 'axios';


const ProfileDisplay = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem(token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get('/profile');
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
      {/* Display userDetails and purchaseDetails */}
      {/* Render user's profile and purchase details */}
    </div>
  );
};

export default ProfileDisplay;