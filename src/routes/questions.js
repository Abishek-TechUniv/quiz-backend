const rp = require('request-promise');
const constants = require('../constants');
const { questions } = require('../../models');
const { joinQuestionsAndAnswer, insert } = require('../helpers');

module.exports = [
  {
    path: '/questions',
    method: 'GET',
    handler: (request, reply) => {
      questions.findAll().then(result => reply(result));
    },
  },
  {
    path: '/questions',
    method: 'POST',
    handler: (request, reply) => {
      rp({
        method: 'GET',
        url: constants.questions,
      }).then(result => JSON.parse(result))
        .then(resultObj => resultObj.allQuestions)
        .then(allQuestions => joinQuestionsAndAnswer(allQuestions))
        .then(questionsWithAns => insert(questionsWithAns))
        .then(() => reply('Populated the database').code(201))
        .catch(err => reply(err).code(501));
    },
  },
];

