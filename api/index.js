import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();


const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URI).then(() => console.log(`Database is connected`)).then(() => {
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
}).catch((err) => console.log(`Error in connecting with Database : ${err}`));

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});