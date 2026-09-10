export default {
    name: "features",
    title: "Features",
    type: "object",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "features",
            type: "array",
            title: "Features",
            of: [{
                type: "object",
                fields: [
                    {
                        name: "title",
                        type: "string",
                        title: "Title",
                    },
                    {
                        name: "text",
                        type: "text",
                        title: "Text",
                    },
                ],
            }],
        }
    ]
}