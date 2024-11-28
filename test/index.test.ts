import request from 'supertest';
import express, { Express, Request, Response } from 'express';
import app from '../src/index';

describe('GET /', () => {
  it('should respond with "Hello, World!"', async () => {
    const mockResponse = {
      send: jest.fn(),
    };

    (app.get as jest.MockedFunction<typeof app.get>).mockImplementation((_, res) => {
      res = mockResponse; // Assign the mock response object to the res parameter
      res.send('Hello, World!');
    });

    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
