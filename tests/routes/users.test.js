const server = require('../../src/server');

describe('post username to /users should return', () => {
  test('200 statusCode for successful request', (done) => {
    const request = {
      method: 'POST',
      url: '/users',
      payload: { userName: 'Abisej' },
    };
    server.inject(request, (reply) => {
      expect(reply.statusCode).toEqual(200);
      done();
    });
  });
});
