import request from 'request';
import _ from 'lodash';

const token = process.env.IG_TOKEN;

const client ={
  getPhotos: () =>{
    return new Promise((resolve, reject) =>{
      request({
        url: `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`,
        headers: {
          accept: 'application/json'
        }
      }, (err, res, body) => {
          if(err) return reject(err);
          let result = JSON.parse(body);
          return resolve(_.get(result, 'data'));
        });
    });
  },
  getLatestPhoto(){
    return client.getPhotos()
      .then((images) =>{
        return _.get(images, '[0].images.standard_resolution.url')
      })
  }
};

export default client;
