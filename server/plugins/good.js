import good from 'good';
import reporter from 'good-console';

export default {
  register: good,
  options: {
    opsInterval: 5000,
    requestHeaders: true,
    reporters: [{
      reporter,
      events: {
        // ops: '*',
        response: '*',
        log: '*',
        error: '*',
        request: '*'
      }
    }]
  }
};
