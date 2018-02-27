const server = require('../../src/server');

describe('get details from /questions should return', () => {
  test('200 statusCode for successful request', (done) => {
    const request = {
      method: 'GET',
      url: '/questions',
    };
    server.inject(request, (reply) => {
      expect(reply.statusCode).toEqual(200);
      done();
    });
  });

  test('an array of questions', (done) => {
    const request = {
      method: 'GET',
      url: '/questions',
    };
    server.inject(request, (reply) => {
      expect(typeof reply.result).toBe('object');
      done();
    });
  });
});

describe('post details to /questions should return', () => {
  test('201 statusCode for successful request', (done) => {
    const request = {
      method: 'POST',
      url: '/questions',
    };
    server.inject(request, (reply) => {
      expect(reply.statusCode).toEqual(201);
      done();
    });
  });
});

