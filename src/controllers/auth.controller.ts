import { Request, Response } from 'express';
import { registerUser, authenticateUser } from '../services/auth.service';
import { sendMessageToBroker } from '../services/message-broker.service';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export const login = async (req: Request, res: Response) => {
    console.log("We are getting the request for login!");
    const { username, password } = req.body;
    const user = authenticateUser(username, password);

    if (!user) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

    // Optionally communicate with message-broker
    await sendMessageToBroker(`User ${user.username} logged in`);

    res.json({ message: 'Login successful', token });
};

export const register = (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = registerUser(username, password);
    res.status(201).json({ message: 'User registered successfully', user });
};
