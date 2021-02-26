export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "siteTitle",
      type: "string",
      title: "Site Title"
    },
    {
      name: "siteDesc",
      type: "string",
      title: "Site Description"
    },
    {
      name: 'homePage',
      type: 'reference',
      title: 'Home Page',
      description: 'Choose page to be the frontpage',
      to: { type: 'pages' }
    },
    {
      name: "footerText",
      type: "string",
      title: "Footer text"
    }
  ]
};