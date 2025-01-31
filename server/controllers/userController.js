import userModel from "../models/userModel.js"

export const getUserData = async (req, res)=>{
  try{
    const {userId} = req.body;

    const user = await userModel.findById(userId);

    if(!user){
     
      return res.status(400).json({success: false, message: 'User not found'});
    }

    
   return res.status(200).json({
    success: true,
    userData: {
      name: user.name,
      role:user.role,
      tutorData:user.tutorData,
      isAccountVerified: user.isAccountVerified
    }     
  });


  }catch(error){
    return res.status(400).json({ success: false, message: error.message });
  }

  

}

export const setUserRole = async (req, res) => {
  try {
    // The userId is now coming from the middleware (req.body.userId)
    const { role, tutorFields } = req.body;
    const userId = req.body.userId;

    console.log("role", role);

    // Check if the role is either 'student' or 'tutor'
    if (!['student', 'tutor'].includes(role)) {
      return res.status(400).json({ success: false, message: 'Invalid role. Allowed values are "student" or "tutor".' });
    }

    // Find the user by ID
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    // Set the user's role
    user.role = role;

    // Optionally, you can also handle tutor-specific fields here if needed
    if (role === 'tutor') {
      // Assuming tutorFields is provided and you want to save them
      user.tutorData = tutorFields;  // Store tutor-specific data (you can add this field to your schema if needed)
    }else{
      user.tutorData = null;
    }
    

    await user.save(); // Save the updated user data

    return res.status(200).json({
      success: true,
      message: 'Role updated successfully',
      userData: {
        name: user.name,
        role: user.role,
        isAccountVerified: user.isAccountVerified
      }
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
