import request from 'supertest';
import app from '../src/app';

describe('Auth Controller', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({ username: 'testuser', password: 'password' });

        expect(res.status).toBe(201);
        expect(res.body.message).toBe('User registered successfully');
    });

    it('should log in an existing user', async () => {
        // First, register the user
        await request(app)
            .post('/api/auth/register')
            .send({ username: 'testuser', password: 'password' });

        // Now, log the user in
        const res = await request(app)
            .post('/api/auth/login')
            .send({ username: 'testuser', password: 'password' });

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Login successful');
        expect(res.body.token).toBeDefined();
    });

    it('should return 401 for invalid credentials', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ username: 'wronguser', password: 'wrongpassword' });

        expect(res.status).toBe(401);
        expect(res.body.message).toBe('Invalid credentials');
    });
});