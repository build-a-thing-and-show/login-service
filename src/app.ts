import express, { Request, Response } from 'express';
import authRoutes from './routes/auth.routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use('/api/auth', authRoutes); // API routes

// Test route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Login Service is Running' });
});

export default app;