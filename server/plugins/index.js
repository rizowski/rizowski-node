import Promise from 'bluebird';

const plugins = [
  require('blipp'),
  require('inert'),
  require('vision'),
  require('./hapi-router'),
  require('./good'),
  require('./hapi-swaggered'),
  require('./hapi-swaggered-ui')
];

export default server => {
  return server
    .register(plugins, { routes: { prefix: '/api' } })
    .then(() => server);
};
