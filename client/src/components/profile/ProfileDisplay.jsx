import  { useEffect, useState } from 'react';
import axios from 'axios';
import PurchasePlaces from './getPurchasePlaces';

const ProfileDisplay = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get('http://localhost:6969/api/profile', config);

        const { data } = response;

        if (data?.responseData?.userDetails) {
          // console.log("userdetails is:", data.responseData.userDetails);
          setUserDetails(data.responseData.userDetails);
          // console.log("data inside userDetails is>", userDetails)
        }
        
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error('Requested data not found');
        } else {
          console.error('Error fetching profile:', error.message);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userDetails ? (
        <div className='mx-auto text-center '>
          {userDetails.profilePic && (
            <img src={userDetails.profilePic} alt="Profile Pic" className='rounded-md h-36 mt-5 mx-auto w-40'/>
          )}
          <div className='mt-5 text-2xl'>
          <p>Phone Number: {userDetails.phoneNumber || 'Not provided'}</p>
          <p>Other Details: {userDetails.otherDetails || 'Not provided'}</p>
          <p>Address: {userDetails.address || 'Not provided'}</p>
        </div>
        </div>
      ) : (
        <p>No user details found.</p>
      )}
  <PurchasePlaces />
  </div>
  );
};

export default ProfileDisplay;