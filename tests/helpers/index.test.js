const {
  joinQuestionsAndAnswer,
  insert,
  calculate,
} = require('../../src/helpers');

const server = require('../../src/server');


beforeAll(() => {
  const request = {
    method: 'POST',
    url: '/users',
    payload: { userName: 'Abishek' },
  };

  const responseRequest = {
    method: 'POST',
    url: '/response',
    payload: { userName: 'Abishek', questionId: 12, response: 'New Delhi' },
  };

  server.inject(request);
  server.inject(responseRequest);
});


describe('test that joinQuestionsAndAnswer', () => {
  test('should return a promise', () => {
    expect(joinQuestionsAndAnswer([{}])).toBeInstanceOf(Promise);
  });

  test('should resolve the promise on then', (done) => {
    joinQuestionsAndAnswer([
      {
        question: 'What is the capital of India',
        questionId: 12,
        option1: 'New Delhi',
        option2: 'MP',
        option3: 'UP',
        option4: 'Bangalore',
      }])
      .then((questions) => {
        expect(questions).toEqual([{
          question: 'What is the capital of India',
          questionId: 12,
          optA: 'New Delhi',
          optB: 'MP',
          optC: 'UP',
          optD: 'Bangalore',
          correctAns: 'New Delhi',
        }]);
        done();
      });
  });
});

describe('test insertion', () => {
  test('should bulk insert question to the database', () => {
    insert([{
      question: 'What is the capital of India', questionId: 12, option1: 'New Delhi', option2: 'MP', option3: 'UP', option4: 'Bangalore',
    }, {
      question: 'What is the capital of Afghanistan', questionId: 23, option1: 'Kabul', option2: 'Tirana', option3: 'Algiers', option4: 'Andorra la Vella',
    }]);
  });
});

describe('test calculation', () => {
  test('should return a number if user exists', (done) => {
    calculate('Abishek').then((result) => {
      expect(typeof result).toBe('number');
      done();
    });
  });

  test('should throw error if user doesn\'t exist', (done) => {
    calculate('Abisheks').catch((result) => {
      expect(result.message).toBe('User doesn\'t exist');
      done();
    });
  });
});
