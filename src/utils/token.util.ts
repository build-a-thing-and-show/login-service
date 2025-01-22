import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export const generateToken = (userId: string, username: string): string => {
    return jwt.sign({ id: userId, username }, SECRET_KEY, { expiresIn: '1h' });
};