import request from 'supertest';
import express, { Express, RequestHandler } from 'express';
import app from '../src/index';

jest.mock('../src/index', () => ({
  default: jest.fn().mockReturnValue({
    get: jest.fn<Express['get']>(),
    listen: jest.fn(),
  }),
}));

describe('GET /', () => {
  it('should return "This Application is under construction. Please be patient."', async () => {
    const mockRequestHandler = jest.fn();
    (app.get as jest.Mock).mockImplementation((path: string, handler: RequestHandler) => {
      if (path === '/hello') {
        handler({ query: {} }, { send: jest.fn() });
      }
    });
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('should return "This Application is under construction. Please be patient.');
  });
});
