import expreess from 'express';
const postrouter = expreess.Router();
import authenticatemiddleware from '../middleware/authenticationmiddleware.js';
import { getAllVideosController, uploadVideoController } from '../controller/videocontroller.js';
import { uploadVideo } from '../middleware/uploadMiddleware.js';

postrouter.post('/upload', authenticatemiddleware, uploadVideo, uploadVideoController);
postrouter.get('/getvideo', authenticatemiddleware, getAllVideosController);

export default postrouter;