import request from 'supertest';
import app from '../src/index';

describe('Express App', () => {
  it('GET / should return a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello from the login-service root!' });
  });

  it('POST /api/message should return a backend message', async () => {
    const response = await request(app).post('/api/send');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello from the backend!' });
  });

  it('GET /non-existent-route should return 404', async () => {
    const response = await request(app).get('/non-existent-route');
    expect(response.status).toBe(404);
  });
});