import client from '../clients/instagram-client';


export default {
  path: '/instagram/latest-photo',
  method: 'GET',
  config:{
    tags: ['api', 'instagram', 'accounts']
  },
  handler: (req, res) =>{
    let result = client.getLatestPhoto();
    res(result);
  }
};
