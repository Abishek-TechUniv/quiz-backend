const server = require('../../src/server');

beforeAll(() => {
  const request = {
    method: 'POST',
    url: '/users',
    payload: { userName: 'Abishek' },
  };

  const request2 = {
    method: 'POST',
    url: '/response',
    payload: { userName: 'Abishek', questionId: 12, response: 'New Delhi' },
  };
  server.inject(request);
  server.inject(request2);
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

describe('return scores', () => {
  test('should return success', (done) => {
    const request = {
      method: 'GET',
      url: '/scores',
    };
    server.inject(request, (reply) => {
      expect(reply.statusCode).toEqual(200);
      done();
    });
  });

  test('should return array of objects', (done) => {
    const request = {
      method: 'GET',
      url: '/scores',
    };
    server.inject(request, (reply) => {
      expect(typeof reply.result).toEqual('object');
      done();
    });
  });
});

describe('post score', () => {
  test('should return a number', (done) => {
    const request = {
      method: 'POST',
      url: '/score',
      payload: { userName: 'Abishek' },
    };
    server.inject(request, (reply) => {
      expect(typeof reply.result).toEqual('number');
      done();
    });
  });
});

describe('post response', () => {
  test('should return 201 status code', (done) => {
    const request = {
      method: 'POST',
      url: '/users/response',
      payload: { userName: 'Abishek' },
    };
    server.inject(request, (reply) => {
      expect(reply.statusCode).toEqual(201);
      done();
    });
  });

  test('should return an object', (done) => {
    const request = {
      method: 'POST',
      url: '/users/response',
      payload: { userName: 'Abishek' },
    };
    server.inject(request, (reply) => {
      expect(typeof JSON.parse(reply.payload)).toEqual('object');
      done();
    });
  });
});
