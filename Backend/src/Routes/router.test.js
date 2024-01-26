const request = require('supertest');
const express = require('express');
const router = require('./router');
const getAllUrl = require('../Repository/getAllUrl');
const findShortUrl = require('../Repository/findShortUrl');
const findUrl = require('../Repository/findUrl');
const UpdateUrlCount = require('../Repository/updateUrlCount');
const CreateUrl = require('../Repository/createUrl');

jest.mock('../Repository/getAllUrl');
jest.mock('../Repository/findShortUrl');
jest.mock('../Repository/findUrl');
jest.mock('../Repository/updateUrlCount');
jest.mock('../Repository/createUrl');

const app = express();
app.use(express.json());
app.use('/', router);

describe('Test the root path', () => {
  it('should respond to the GET method', async () => {
    getAllUrl.mockResolvedValueOnce(['url1', 'url2']); // Mocking the data
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ AllUrls: ['url1', 'url2'] });
  });
});

describe('Test /findurl endpoint', () => {
  it('should respond to the POST method', async () => {
    const mockShortUrl = 'mockedShortUrl';
    findShortUrl.mockResolvedValueOnce(mockShortUrl); // Mocking the data

    const response = await request(app).post('/findurl').send({ url: 'https://example.com' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ url: mockShortUrl });
  });
});

describe('Test /shorten endpoint', () => {
  it('should respond to the POST method - url already in database', async () => {
    const mockUrl = 'https://example.com';
    findUrl.mockResolvedValueOnce(mockUrl); // Mocking the data
    UpdateUrlCount.mockResolvedValueOnce(mockUrl); // Mocking the data

    const response = await request(app).post('/shorten').send({ url: mockUrl });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ url: mockUrl });
  });

  it('should respond to the POST method - url not in database', async () => {
    const mockUrl = 'https://example.com';
    findUrl.mockResolvedValueOnce(null); // Mocking the data
    CreateUrl.mockResolvedValueOnce(mockUrl); // Mocking the data

    const response = await request(app).post('/shorten').send({ url: mockUrl });

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ url: mockUrl });
  });
});