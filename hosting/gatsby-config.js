const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: '<%site-url%>',
    title: `<%site-name%>`,
    description: `<%site-description%>`,
    author: `<%site-author%>`,
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/gatsby-routes.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-1410569287706137`
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        api: path.join(__dirname, 'src/api'),
        config: path.join(__dirname, 'src/config'),
        services: path.join(__dirname, 'src/services'),
        ui: path.join(__dirname, 'src/ui')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/ui/markdown`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              }
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: []
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: '<%site-url%>',
        sitemap: '<%site-url%>/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: []
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '<%analytics-id%>',
        head: true
      }
    }
  ]
}
