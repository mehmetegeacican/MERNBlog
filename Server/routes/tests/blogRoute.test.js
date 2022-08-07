const request = require('supertest');
const app = require('../../app');
const baseURL = "http://localhost:4000";

/**
 * BEFORE EACH
 */
 let blogs;
 beforeEach(() => {
   pets = [
     { id: 1 },
     { id: 2 },
     { id: 3},
   ];
   app.locals.blogs = blogs;
 });

/**
 * TEST, GET REQUEST
 */
 describe('GET REQUESTS', () => {
    test('get /api/v1/blogs', async () => {
      request(baseURL).get('/api/v1/blogs').then((res) => {
      expect(res.statusCode).toBe(200);
    })
    });
});

/**
 * TEST, GET REQUEST VIA ID
 */
 describe('POST REQUESTS', () => {
  test('post /api/v1/blogs', async () => {
    request(baseURL).post('/api/v1/blogs/').send({
      title: "Test",
      description: "Test",
      body: "Test"
    }).then((res) => {
    expect(res.statusCode).toBe(200);
  })
  });
});

