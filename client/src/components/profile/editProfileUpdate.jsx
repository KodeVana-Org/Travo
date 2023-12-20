import  { useState } from 'react';
import FormComponent from './AddProfile'; // Replace this with your form component

const ProfileEdit = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className='text-center text-xl'>
      {!isEditing ? (
        <div>
          {/* Display user details */}
          {/* Add user details here */}
          <button onClick={handleEditClick} className="px-8 py-2 font-bold text-[#029D9D] hover:text-white bg-white border-2 border-white hover:bg-[#029D9D] rounded-md transition-all duration-200">Edit</button>
        </div>
      ) : (
        <div>
          <FormComponent />
          <button onClick={handleCancelEdit} className="px-8 py-2 font-bold text-[#029D9D] hover:text-white bg-white border-2 border-white hover:bg-[#029D9D] rounded-md transition-all duration-200">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProfileEdit;
