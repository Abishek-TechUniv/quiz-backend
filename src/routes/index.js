const questions = require('./questions');
const users = require('./users');
const responses = require('./responses');

module.exports = [].concat(questions, users, responses);
