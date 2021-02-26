export default {
  name: "textGroup",
  type: "object",
  title: "Text Group",
  fields: [
    {
      name: "textBlocks", 
      title: "Text Blocks", 
      type: "array", 
      of: [
        {
          name: "textBlock", 
          type: "object", 
          title: "Block", 
          fields: [
            {
              name: "text",
              type: "blockContent",
              title: "text"
            },
          ]
        }
      ]
    },
  ]
};