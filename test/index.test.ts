import request from 'supertest';
import express, { Express, Request, Response } from 'express';
import app from '../src/index';

jest.mock('express', () => ({
  Router: jest.fn().mockReturnThis(),
  Request: jest.fn(),
  Response: jest.fn(),
}));

jest.mock('../src/index', () => ({
  default: {
    get: jest.fn(),
  },
}));

describe('GET /', () => {
  it('Should return the correct message for the GET method', async () => {
    app.get.mockImplementation((_, res) => {
      res.send('Incorrect value');
    });
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
