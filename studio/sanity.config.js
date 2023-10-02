import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import deskStructure from './deskStructure'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'
import { markdownSchema } from "sanity-plugin-markdown";
import { tags } from "sanity-plugin-tags";

export default defineConfig({
  title: "Awesome Inc Website",
  projectId: "y716vocf",
  dataset: "production",
  plugins: [
    markdownSchema(),
    tags(),
    deskTool({
      structure: deskStructure
    }),
    visionTool()
  ],
  schema: {
    types: schemas,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'settings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});