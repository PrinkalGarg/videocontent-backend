import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: String,
  name: String,
  description: String,
  videoUrl: String,
  Date: {
    type: Date,
    default: Date.now,
  },
});

const Video = mongoose.model('Video', videoSchema);
export default Video;