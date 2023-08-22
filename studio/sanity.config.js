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
});