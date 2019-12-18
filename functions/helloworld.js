import axios from 'axios'

exports.handler = function(event, context, callback) {
  // https://graph.instagram.com/me/media?&fields=id,caption,media_type,media_url,permalink&access_token=IGQVJXdG1paFpfb3JoSHNId2ZAUSnNlakNjcmhHWEc5WEx2ZAnM2Vm9EMGFjdndfT0NkXzltZAGhtWE5VRXplbV9UcjZAzSDNiV0djTEhoTGFxUXRCSk9nWEJHcUFBWk5WYmJfblpoTV96VHhPb09zdFNJV25BMTlzM25iRHdZA
  axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.INSTAGRAM}&fields=id,caption,media_type,media_url,permalink&count=4`)
  .then((res) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res.data.data.data),
    });
  })
  .catch((e) => {
    console.log(e)
  })
};