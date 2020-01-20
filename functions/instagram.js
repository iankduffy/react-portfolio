import axios from 'axios'

exports.handler = function(event, context, callback) {
  axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=1906409028.b570245.7f5a7328e69b495d80ea715740b84c8e&fields=id,caption,media_type,media_url,permalink&count=4`)
  .then((res) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res.data.data),
      headers: {
        'Cache-Control': 'public, s-maxage=86400',
      },
    });
  })
  .catch((e) => {
    callback(null, {
      statusCode: 200,
      body: e,
    });
  })
};