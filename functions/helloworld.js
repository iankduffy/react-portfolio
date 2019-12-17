import axios from 'axios'

exports.handler = function(event, context, callback) {
  axios.get(`https://graph.instagram.com/me/media?&fields=id,caption,media_type,media_url,permalink&access_token=${process.env.INSTAGRAM}&count=4`)
  .then(({ data: { data: posts } }) => {
    callback(null, {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(
        posts.map(i => ({
          id: i.id,
          link: i.link,
          images: i.images,
          videos: i.videos,
          caption: i.caption.text,
        })),
      ),
    })
  })
  .catch((e) => {
    return e
  })
};