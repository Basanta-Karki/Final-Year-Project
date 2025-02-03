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
    const { role, tutorFields } = req.body;
    const userId = req.body.userId;

    if (!['student', 'tutor'].includes(role)) {
      return res.status(400).json({ success: false, message: 'Invalid role. Allowed values are "student" or "tutor".' });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    user.role = role;

    if (role === 'tutor') {
      user.tutorData = tutorFields;
      user.isApproved = false; // Admin needs to approve tutor
    } else {
      user.tutorData = null;
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: 'Role updated successfully',
      userData: {
        name: user.name,
        role: user.role,
        isAccountVerified: user.isAccountVerified,
        isApproved: user.isApproved,
      },
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};



export const getAllTutors = async (req, res) => {
  try {
    const tutors = await userModel.find({ role: 'tutor' }).select('-password');

    

    if (tutors.length === 0) {
      console.log("No tutors found in DB!");
    }

    return res.status(200).json({
      success: true,
      tutors,
    });
  } catch (error) {
    console.error("Error fetching tutors:", error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getTutorById = async (req, res) => {
  console.log("Fetching tutor with ID:", req.params.id); // Debugging log
  try {
    const tutor = await userModel.findById(req.params.id).select('-password');
    if (!tutor) {
      return res.status(404).json({ success: false, message: "Tutor not found" });
    }
    return res.status(200).json({ success: true, tutor });
  } catch (error) {
    console.error("Error fetching tutor by ID:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

