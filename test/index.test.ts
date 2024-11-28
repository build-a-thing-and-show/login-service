import request from 'supertest';
import express, { Express, Request, Response, NextFunction } from 'express-serve-static-core';
import app from '../src/index';

jest.mock('../src/index', () => ({
  default: jest.fn().mockReturnValue({
    get: jest.fn(),
    listen: jest.fn(),
  }),
}));

describe('GET /', () => {
  it('should return "This Application is under construction. Please be patient."', async () => {
    const mockResponse: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    (app.get as jest.Mock).mockImplementation((path: string, handler: RequestHandler) => {
      if (path === '/') {
        handler({ query: {} } as Request, mockResponse as Response, jest.fn() as NextFunction);
      }
    });

    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('This Application is under construction. Please be patient.');
  });
});
