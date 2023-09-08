module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/assets/Azure-Spring-Apps.svg' }],
    ],
    title: "Azure Spring Apps button Documentation",
    description: "From code to deployment in minutes",
    base: "/asa-middle-gallery/",
    themeConfig: {
        logo: '/assets/Azure-Spring-Apps.svg',
        repo: 'Azure/asa-middle-gallery',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        lastUpdated: 'Last Updated',
        sidebarDepth: 1,
        smoothScroll: true,
        nav: [
         { text: "Home", link: '/' }
        ],
      displayAllHeaders: true,
      sidebar: [
          {
              title: '📘 Azure Spring Apps button',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                  {
                      title: 'Overview',
                      path: '/asa-button/overview',
                  },
                  {
                      title: 'Quick start',
                      path: '/asa-button/quick-start',
                  },
              ],
          }
      ]
    },
    plugins: [
      [
        'vuepress-plugin-clean-urls',
        {
          normalSuffix: '/',
          indexSuffix: '/',
          notFoundPath: '/404.html',
        },
      ],
    ]
  };
