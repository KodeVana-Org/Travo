import  { useState } from 'react';
import axios from 'axios';
const AddProfile = () => {
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [other, setOther] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userDetailsData = {
        image,
        address,
        phoneNumber,
        other,
      };
  
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await axios.post('http://localhost:6969/api/profile', userDetailsData, config);
      console.log('Data saved successfully:', response.data);
      alert("data post successfully")
      // Handle any success messages or state updates as needed
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error messages or actions in case of a failed request
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
        type="number"
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


export default AddProfile;
