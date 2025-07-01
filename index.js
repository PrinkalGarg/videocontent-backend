import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/mongoose.js';
import userRoutes from './routes/login.js';
import postRoutes from './routes/postRoutes.js';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT;
try {
    await connectDB();
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
    
}
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
