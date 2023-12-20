import  { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileInfo = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('http://localhost:6969/api/me', config);
        // console.log(response)
        setProfileData(response.data.additionalDetails);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {profileData && (
        <div className='text-center mt-9 text-xl'>
          <h2>Name: {profileData.name}</h2>
          <p>Email: {profileData.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
