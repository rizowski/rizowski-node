export default{
  method: 'GET',
  path: '/projects/{id}',
  config:{
    tags: ['api', 'projects']
  },
  handler: (req, res) =>{
    res();
  }
}
