export default {
  name: "pages",
  type: "document",
  title: "Pages",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    }, {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'splashScreen' },
        { type: 'aboutMe' },
        { type: 'textGroup' },
        { type: 'articleFullWidthBanner' }, 
        { type: 'blogPostContainer'}
      ],
    }
  ], 
  preview: {
    select: {
      title: 'title',
      content: 'content'
    }
  }
};