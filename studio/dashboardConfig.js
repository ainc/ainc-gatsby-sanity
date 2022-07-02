export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62bfc54cac36817195eb20fd',
                  title: 'Sanity Studio',
                  name: 'ainc-gatsby-sanity-studio',
                  apiId: 'a06b6437-cad7-4cdc-bbdf-688f59906a1e'
                },
                {
                  buildHookId: '62bfc54da2d427726dd7e354',
                  title: 'Portfolio Website',
                  name: 'ainc-gatsby-sanity',
                  apiId: '395eac55-3897-41ec-be29-b7b9c741fbd0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raney24/ainc-gatsby-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://ainc-gatsby-sanity.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
