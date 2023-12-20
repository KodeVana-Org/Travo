import  { useState } from 'react';
import axios from 'axios';
const ProfileUpdate = () => {
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [other, setOther] = useState('');

  const handleSubmit = async (e) => {
    const token = localStorage.getItem(token);
    e.preventDefault();
    try {
      const userDetailsData = {
        image,
        address,
        phoneNumber,
        other,
      };

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      let response;

      // If there is an image, it's a POST request, otherwise, it's a PUT request
      if (image) {
        response = await axios.post('/profile', userDetailsData);
      } else {
        response = await axios.put('/profile', userDetailsData);
      }

      console.log(response.data);
      // Handle success or update UI
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error or show error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="block w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="block w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="block w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Other Details"
        value={other}
        onChange={(e) => setOther(e.target.value)}
        className="block w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};


export default ProfileUpdate;
