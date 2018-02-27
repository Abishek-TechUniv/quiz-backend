const { users } = require('../../models');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: (request, reply) => {
      users.findOrCreate({
        where:
        { userName: request.payload.userName },
      })
        .then(() => reply('User in database').code(200))
        .catch(err => reply(err).code(501));
    },
  },
];

