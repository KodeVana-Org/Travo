const UserDetails = require('../models/profile');
const User = require('../models/userModel');

const updateUserDetails = async (userId, userDetailsData) => {
  try {
    let existingUserDetails = await UserDetails.findOne({ user: userId });

    if (existingUserDetails) {
      // Update existing UserDetails if it exists
      existingUserDetails = await UserDetails.findOneAndUpdate(
        { user: userId },
        { $set: userDetailsData },
        { new: true }
      );
      return { message: 'UserDetails updated', userDetails: existingUserDetails };
    } else {
      // Create new UserDetails if it doesn't exist
      const newUserDetails = new UserDetails({ ...userDetailsData, user: userId });
      await User.findByIdAndUpdate(userId, { $push: { userDetails: newUserDetails._id } });
      await newUserDetails.save();
      return { message: 'UserDetails created', userDetails: newUserDetails };
    }
  } catch (error) {
    console.error('Error updating/creating UserDetails:', error);
    throw new Error('Server error');
  }
};

//     const newUserDetails = new UserDetails(userDetailsData);
//     await newUserDetails.save();

//     // Update User model by pushing the new user details' ID
//     await User.findByIdAndUpdate(userId, { $push: { userDetails: newUserDetails._id } });

//     return newUserDetails; // Return the created user details
//   } catch (error) {
//     console.error('Error adding user details and updating user:', error);
//     throw error;
//   }
// };

module.exports = updateUserDetails;