const server = require('../../src/server');

beforeAll(() => {
  const request = {
    method: 'POST',
    url: '/users',
    payload: { userName: 'Abishek' },
  };
  server.inject(request);
});

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

describe('calcuating result of user', () => {
  test('should return error code if user does not exist', (done) => {
    const request = {
      method: 'POST',
      url: '/calculate',
      payload: { userName: 'abishek_ss' },
    };
    server.inject(request, (reply) => {
      expect(reply.statusCode).toEqual(500);
      done();
    });
  });

  test('should return success code if user exists', (done) => {
    const request = {
      method: 'POST',
      url: '/users',
      payload: { userName: 'Abishek' },
    };
    server.inject(request, (reply) => {
      expect(reply.statusCode).toEqual(200);
      done();
    });
  });
});
