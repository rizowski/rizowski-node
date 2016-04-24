import client from '../clients/instagram-client';


export default {
  path: '/instagram/latest-photo',
  method: 'GET',
  handler: (req, res) =>{
    let result = client.getPhotos();
    res(result);
  }
};
