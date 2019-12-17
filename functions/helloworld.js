import axios from 'axios'

exports.handler = function(event, context, callback) {
    const data = axios.get(`https://graph.instagram.com/me/media?&fields=id,caption,media_type,media_url,permalink&access_token=${process.env.INSTAGRAM}`)
    .then(data => {return data})
    console.log("hi Ian")
};