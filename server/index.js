import { Server } from 'hapi';
import registerPlugins from './plugins';

const server = new Server();

server.connection({ 
  host: process.env.IP,
  port: process.env.PORT || 3000 
});

export default registerPlugins(server)
  .then(server => {
    console.log(`Server running at: ${server.info.uri}`);
    return server.start()
      .then((server) => server);
  })
  .catch(e => console.error(e.stack || e ));
