const { joinQuestionsAndAnswer } = require('../../src/helpers');

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
