const { questions, users, responses } = require('../../models');

module.exports = [
  {
    method: 'POST',
    path: '/response',
    handler: (request, reply) => {
      const { userName, response, questionId } = request.payload;
      const responseId = `${userName}_${questionId}`;
      questions.findOne({ where: { questionId } }).then((result) => {
        if (result !== null) {
          users.findOne({ where: { userName } }).then((userResult) => {
            if (userResult !== null) {
              responses.upsert({
                userName, response, responseId, questionId,
              })
                .then(() => reply('response added/modified').code(200))
                .catch(err => reply(err).code(501));
            } else throw new Error('User doesn\'t exist');
          }).catch(err => reply(err));
        } else throw new Error('Question doesn\'t exist');
      }).catch(err => reply(err));
    },
  },
];

