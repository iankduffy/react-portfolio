import axios from 'axios'

exports.handler = function(event, context, callback) {
  axios.get(`https://graph.instagram.com/me/media?&fields=id,caption,media_type,media_url,permalink&access_token=${process.env.INSTAGRAM}&count=4`)
  .then(({data}) => {
    callback(null, {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
      },
      body: data,
    })
  })
  .catch((e) => {
    console.log('alert')
  })
};