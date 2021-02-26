export default {
  name: "aboutMe",
  type: "object",
  title: "About Me Section",
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
    }, {
      name: "skills", 
      type: "array", 
      of: [
        {
        name: "skill", 
        type: "object", 
        title: "Skills", 
        fields: [
          {
            name: "skillTitle",
            type: "string", 
            title: "Skill Title"
          }, 
          {
            name: "skillImg",
            type: "image", 
            title: "Skill Image"
          }
        ]
      }
    ], 
    }
  ]
};