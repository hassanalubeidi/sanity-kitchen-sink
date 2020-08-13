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
                  buildHookId: '5f353df92f59d9f262907de9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xcdbcdbf',
                  apiId: '6cf1675d-bee5-493d-84b6-694e64357115'
                },
                {
                  buildHookId: '5f353df9df86b807bff6d335',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zxjprx4p',
                  apiId: 'dba8b258-b3ad-4b39-a575-d451c0ea3be8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hassanalubeidi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zxjprx4p.netlify.app', category: 'apps'}
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
