export default {
  name: 'blog-migration',
  // Note: This ID might be different based on your schema structure
  documentId: '00a9ba86-7f3f-41c7-8c46-4c852824abe4',
  fields: [
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      description: 'Body content',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
        },
      ]
    },
  ],
  async up() {
    // Fetch all documents that have the old 'body' structure
    const documents = await client.fetch("*[_type == 'blog' && defined(body)]");

    // Transform the 'body' field for each document
    const transformedDocuments = documents.map(doc => {
      return {
        ...doc,
        body: [
          {
            _type: 'block',
            // Convert markdown content to block content
            // You might need to adjust this based on your markdown structure
            children: [
              {
                _type: 'span',
                text: doc.body,
              },
            ],
          },
        ],
      };
    });

    // Update the documents in the database
    await Promise.all(transformedDocuments.map(doc => sanityClient.patch(doc._id).set({ body: doc.body }).commit()));
  },
};