import expreess from 'express';
const userrouter = expreess.Router();
import { register,
  loginP as login,
  profile, } from '../controller/usercontroller.js';
import authenticatemiddleware from '../middleware/authenticationmiddleware.js';

userrouter.post('/register', register);
userrouter.post('/login', login);
userrouter.get('/profile', authenticatemiddleware,profile); 
export default userrouter;