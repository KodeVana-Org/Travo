import  { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('details', details);
      formData.append('isNew', isNew);
        console.log(formData);
      await axios.post('http://localhost:6969/v1/add-places', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccess(true);
      setLoading(false);
      console.log('Image uploaded successfully with additional data');
    } catch (error) {
      console.error('Error uploading image with additional data:', error);
    }
  };

  return (
    <div className="flex text-center p-4 bg-gray-100 rounded-lg shadow-lg">
        <div className='ml-96'>
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="mb-2 text-xl inline-block text-neutral-700 "
          >
          select file 
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            onChange={handleImageChange} 
        //    id="formFile"
          />
      </div>
      {/* <input type="file" onChange={handleImageChange} /> */}
      <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 py-2 px-3 border rounded-lg"
      />
      </div>
      <div>
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="mb-2 py-2 px-3 border rounded-lg"
      />
      </div>
      <div>
      <input
        type="text"
        placeholder="Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="mb-2 py-2 px-3 border rounded-lg"
      />
      </div>
      
      <label>
        Is New:
        <input
          type="checkbox"
          checked={isNew}
          onChange={(e) => setIsNew(e.target.checked)}
          className='mt-2'
        />
      </label>
      <div>
      {/* <button onClick={handleImageUpload}
            className=" mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Submit</button> */}
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
        </div>
      ) : success ? (
        <p className="text-green-500">Submitted Successfully!</p>
      ) : (
        <button
          onClick={handleImageUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload Image
        </button>
      )}
      </div>
      
      </div>
    </div>
  );
};

export default ImageUpload;
