const rp = require('request-promise');
const constants = require('../constants');
const models = require('../../models');


const joinQuestionsAndAnswer = questions => new Promise((resolve, reject) => {
  const questionsAndAns = questions.map(question => ({
    questionId: question.questionId,
    question: question.question,
    optA: question.option1,
    optB: question.option2,
    optC: question.option3,
    optD: question.option4,
  }));

  const questionAnsPromiseArr = [];

  questionsAndAns.forEach((question) => {
    const answerUrl = `${constants.answers}${question.questionId}`;
    const answerPromise = rp({
      method: 'GET',
      url: answerUrl,
    });
    questionAnsPromiseArr.push(answerPromise);
  });

  Promise.all(questionAnsPromiseArr)
    .then((ansObj) => {
      for (let i = 0; i < questionsAndAns.length; i += 1) {
        questionsAndAns[i].correctAns = JSON.parse(ansObj[i]).answer;
      }
    })
    .then(() => { resolve(questionsAndAns); })
    .catch((reason) => { reject(new Error(reason.message)); });
});

const insert = (questions) => {
  models.questions.destroy({ truncate: true })
    .then(() => models.questions.bulkCreate(questions));
};

const calculate = userName => models.responses.findAll({ where: { userName } })
  .then((respArr) => {
    const promiseArr = [];
    if (respArr.length === 0) throw new Error('User doesn\'t exist');
    respArr.forEach(({ questionId, response }) => {
      promiseArr.push(models.questions.findOne({
        where:
          { questionId, correctAns: response },
      }));
    });

    return Promise.all(promiseArr)
      .then(matchArr => matchArr.filter(x => x).length)
      .catch(err => err);
  });
module.exports = {
  joinQuestionsAndAnswer, insert, calculate,
};

