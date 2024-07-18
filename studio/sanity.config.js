import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import deskStructure from './deskStructure'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'
import { markdownSchema } from "sanity-plugin-markdown";
import { tags } from "sanity-plugin-tags";
import {RobotIcon, RocketIcon} from '@sanity/icons'

export default defineConfig([{
  title: " Production",
  projectId: "y716vocf",
  name: 'production-workspace',
  basePath: '/production',
  dataset: 'production',
  icon: RocketIcon,
  plugins: [
    markdownSchema(),
    tags(),
    structureTool({
      structure: deskStructure,
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
},
{
  title: "Development",
  projectId: "y716vocf",
  name: 'development-workspace',
  basePath: '/development',
  dataset: 'development',
  icon: RobotIcon,
  plugins: [
    markdownSchema(),
    tags(),
    structureTool({
      structure: deskStructure,
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
}
]);