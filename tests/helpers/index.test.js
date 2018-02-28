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
          options: ['New Delhi', 'MP', 'UP', 'Bangalore'],
          correctAns: 'New Delhi',
        }]);
        done();
      });
  });
});

describe('test insertion', () => {
  test('should bulk insert question to the database', () => {
    insert([{
      question: 'What is the capital of India',
      questionId: 12,
      options:
      ['New Delhi', 'MP', 'UP', 'Bangalore'],
    }, {
      question: 'What is the capital of Afghanistan',
      questionId: 23,
      options:
      ['New Delhi', 'MP', 'UP', 'Bangalore'],
    }]);
  });
});

describe('test calculation', () => {
  test('should throw error if user doesn\'t exist', (done) => {
    calculate('Abisheks').catch((result) => {
      expect(result.message).toBe('User doesn\'t exist');
      done();
    });
  });
});
