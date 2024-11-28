import request from 'supertest';
import app from '../src/index'; // Assuming your main app file is named 'app.ts'

describe('GET /', () => {
  it('should return "This Application is under construction. Please be patient."', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('This Application is under construction. Please be patient.');
  });
});
