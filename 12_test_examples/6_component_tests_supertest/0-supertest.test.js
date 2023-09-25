// supertest - tool for elegant component testing.
// allows to mock/fake an http request to a service,
// just like a client or other real service calling the tested service,
// and verify the responses follow our demands.
const request = require('supertest');
const assert = require('assert');

describe('GET /user', function () {
  it('responds with json', async () => {
    // Increase the timeout limit to 3000 milliseconds
    this.timeout(3000);

    // Arrange
    // In component testing we test the whole app in an outside-in approach
    // On the contrary to unit testing that are inside-out
    const { app } = require('./app');
    // Act, Assert
    await request(app)
      .get('/greet')
      .query({ name: 'Elementor' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({ body }) => {
        assert.deepStrictEqual(body, { hello: 'Elementor' });
      });
  });
});