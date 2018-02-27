const server = require('../../src/server');

describe('post to /response should return', () => {
  test('200 statusCode for successful request', (done) => {
    const request = {
      method: 'POST',
      url: '/users',
      payload: { userName: 'Abishek', questionId: 12, response: 'New Delhi' },
    };
    server.inject(request, (reply) => {
      expect(reply.statusCode).toEqual(200);
      done();
    });
  });
});
