import express from 'express'
import userAuth from '../middleware/userAuth.js';
import { getUserData,setUserRole } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData);

userRouter.post("/setRole",userAuth,setUserRole)

export default userRouter; 