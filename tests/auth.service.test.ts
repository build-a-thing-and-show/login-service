import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key'; // Ideally, should be in environment variables

// Mock user data for illustration
const users = [
    { id: 1, username: 'testuser', password: '$2a$10$E4l.r8UBk3BFTB.eXmmZ1uOwvA9j7AtpWkHpd2JlSHz9W9YI8wwRO' } // password: 'password'
];

export const authenticateUser = (username: string, password: string) => {
    const user = users.find(u => u.username === username);
    if (!user) return null;
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    return isPasswordCorrect ? user : null;
};

export const generateToken = (userId: number, username: string) => {
    return jwt.sign({ id: userId, username: username }, SECRET_KEY, { expiresIn: '1h' });
};