import React, { useState } from 'react';
import axios from 'axios';

const ProfileUpdate = () => {
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [other, setOther] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDetailsData = {
        image,
        address,
        phoneNumber,
        other,
      };
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await axios.post('/profile', userDetailsData);
      console.log(response.data);
      // Handle success or update UI
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error or show error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for image, address, phoneNumber, and other details */}
      {/* Use state setters to update state */}
      {/* Submit button */}
    </form>
  );
};

export default ProfileUpdate;
