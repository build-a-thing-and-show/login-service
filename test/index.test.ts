import request from 'supertest';
import app from '../src/index';

// Start the server before the tests and store the server object
let server: any;
cost PORT = 3000;
beforeAll(() => {
  server = app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});

// Close the server after all tests
afterAll(() => {
  server.close();
});

describe('GET /', () => {
  it('should return "This Application is under construction. Please be patient."', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('This Application is under construction. Please be patient.');
    server.close();
  });
});
