import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = 3001;

// Serve React static files from frontend/build
app.use(express.static(path.join(__dirname, '../client/build')));

// API route
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
});

// Serve React landing page
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;