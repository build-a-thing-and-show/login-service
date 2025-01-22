import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = 5000;

// API route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the login-service root!' });
});

app.post('/api/message', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;