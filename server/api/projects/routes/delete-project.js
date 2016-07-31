export default{
  method: 'DELETE',
  path: '/projects',
  config:{
    tags: ['api', 'projects']
  },
  handler: (req, res) =>{
    res();
  }
}
