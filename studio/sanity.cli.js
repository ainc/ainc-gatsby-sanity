// sanity.cli.js
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'y716vocf',
  },
  graphql: [
    {
      workspace: 'production-workspace',
      dataset: 'production',
      id: 'production',

    },
    {
      workspace: 'development-workspace',
      dataset: 'development',
      id: 'development'
    }
  ]
})