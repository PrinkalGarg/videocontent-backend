import e from 'express';
import Video from '../model/video.js';

export const uploadVideoController = async (req, res) => {
  try {
    const { title, description,name } = req.body;

    if (!req.file) {
      return res.status(400).json('No video file uploaded');
    }

    const newVideo = await Video.create({
      title,
      description,
      name,
      videoUrl: req.file.path,
    });
    res.status(201).json('Video uploaded successfully');
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const getAllVideosController = async (req, res) => {
  try {
    const videos = await Video.find().sort({ name: 1 });;
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json(err.message);
  }
}