import request from 'supertest';
import app from '../src/index';

jest.mock('../src/index', () => ({
  default: jest.fn().mockReturnValue({
    get: jest.fn(),
    listen: jest.fn(),
  }),
}));

describe('GET /', () => {
  it('should return "This Application is under construction. Please be patient."', async () => {
    app.get.mockImplementation((path, handler) => {
      if (path === '/') {
        handler({ query: {} }, { send: jest.fn() });
      }
    });
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('should return "This Application is under construction. Please be patient.');
  });
});
