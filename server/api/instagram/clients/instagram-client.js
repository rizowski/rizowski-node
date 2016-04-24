import request from 'request';

const token = process.env.IG_TOKEN;

export default {
  getPhotos: () =>{
    request
      .get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`, (err, res, body) =>{
        console.log(JSON.parse(body).data[0].images.standard_resolution.url);
      });
  }
};
