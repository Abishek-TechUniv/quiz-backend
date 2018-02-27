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
      calculate(request.payload.userName)
        .then(ans => reply(ans).code(201))
        .catch(err => reply(err).code(500));
    },
  },
];

