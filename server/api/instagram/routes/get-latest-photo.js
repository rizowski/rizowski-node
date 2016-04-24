import client from '../clients/instagram-client';


export default {
  path: '/ig/latest-photo',
  method: 'GET',
  handler: (req, res) =>{
    let result = client.getPhotos();
    res(result);
  }
};
