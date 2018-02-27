const hapi = require('hapi');

const Routes = require('./routes');

const server = new hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

server.route(Routes);

if (!module.parent) {
  server.start((err) => {
    if (err) throw (err);
    global.console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
