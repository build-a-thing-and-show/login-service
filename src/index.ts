import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Define a route
app.get('/', (req: Request, res: Response) => {
    res.send('BYE BYE World!!!!!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
