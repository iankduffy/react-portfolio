export default {
  name: "articleFullWidthBanner",
  type: "object",
  title: "Article Banner",
  fields: [
    {
      name: "blogPost",
      title: "Post",
      type: "reference",
      to: [{ type: 'post' }]
    },
  ]
};