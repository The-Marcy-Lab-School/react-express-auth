const request = require('supertest');
const Router = require('../router');
// const app = require('../server');

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1);
  });
});

const mockEvent = {};

describe('events endpoint', () => {
  test('should return all events', async () => {
    const res = await request(Router).get('/events');
    expect(res.statusCode).toEqual(200);
  });
});
