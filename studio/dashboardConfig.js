export default {
  widgets: [
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
                  buildHookId: '5fecb7d0f646511300581f50',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ena3yvnk',
                  apiId: 'c6861b4e-3b51-4546-9f4e-1d85f0717ad2'
                },
                {
                  buildHookId: '5fecb7d122d8c20089107390',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cadoiq83',
                  apiId: 'd3382bd1-b4d9-4098-97db-2ff10c78e363'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wtran/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cadoiq83.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
