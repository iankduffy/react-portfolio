export default {
  name: "blogPostContainer",
  type: "object",
  title: "blogPostContainer",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading"
    },
    {
      name: "text",
      type: "blockContent",
      title: "text"
    },
    {
      name: "blogs",
      type: "array",
      title: "Blogs",
      of: [{
        name: "blogPost",
        title: "Post",
        type: "reference",
        to: [{ type: 'post' }] }]
    }
  ]
};