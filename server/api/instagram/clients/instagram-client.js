import request from 'request';

const token = process.env.IG_TOKEN;

export default {
  getPhotos: () =>{
    return new Promise((resolve, reject) =>{
      request
        .get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`, (err, res, body) => {
          if(err) return reject(err);
          return resolve(JSON.parse(body).data[0].images.standard_resolution.url);
        });
    });
  }
};
