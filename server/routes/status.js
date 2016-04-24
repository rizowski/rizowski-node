export default {
  method: 'GET',
  path: '/status',
  handler: (req, res) =>{
    res({ message: 'HELLO WORLD!' });
  }
};
