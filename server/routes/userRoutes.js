import express from 'express'
import userAuth from '../middleware/userAuth.js';
import { getUserData,setUserRole } from '../controllers/userController.js';
import { getAllTutors, getTutorById } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData);

userRouter.post("/setRole",userAuth,setUserRole)

userRouter.get('/tutors', userAuth, getAllTutors);
userRouter.get('/tutors/:id', getTutorById);



export default userRouter; 