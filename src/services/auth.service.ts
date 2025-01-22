import bcrypt from 'bcryptjs';
import { User } from '../models/user.model';

const users: User[] = []; // Dummy in-memory users

export const registerUser = (username: string, password: string): User => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { id: Date.now().toString(), username, password: hashedPassword };
    users.push(newUser);
    return newUser;
};

export const authenticateUser = (username: string, password: string): User | null => {
    const user = users.find(user => user.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        return user;
    }
    return null;
};