const { users } = require('../../models');
const { calculate } = require('../helpers');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: (request, reply) => {
      users.findOrCreate({
        where:
        { userName: request.payload.userName },
      })
        .then(() => reply('User in database').code(200));
    },
  },
  {
    method: 'POST',
    path: '/calculate',
    handler: (request, reply) => {
      const { userName } = request.payload;
      calculate(userName)
        .then(ans => users.update({ score: ans }, { where: { userName } }))
        .then(([noRows]) => reply(`${noRows} rows affected`).code(201))
        .catch(err => reply(err).code(500));
    },
  },
  {
    method: 'GET',
    path: '/scores',
    handler: (request, reply) => {
      users.findAll({
        order: [
          ['score', 'DESC'],
        ],
      })
        .then((resultArr) => {
          const resultOutput = resultArr.map(result =>
            ({ userName: result.userName, score: result.score }));
          reply(resultOutput).code(200);
        });
    },
  },
];

