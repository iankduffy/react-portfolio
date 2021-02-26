export default {
  name: "splashScreen",
  type: "object",
  title: "Full Page Hero Screen",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading"
    },
    {
      name: "tagline",
      type: "string",
      title: "tagline"
    }, 
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
      options: {
        hotspot: true,
      }
    }
  ]
};