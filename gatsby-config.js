/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Merricx",
    author: "merricx",
    description: "My personal blog",
    siteUrl: "https://merri.cx",
    social: {
      twitter: "@merrricx",
    },
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-25367QS0RQ"],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷",
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path 
            }
          }
          allMarkdownRemark {
            nodes {
              fields {
                slug
              }
              frontmatter {
                date
              }
            }
          }
        }`,
        resolveSiteUrl: () => "https://merri.cx/",
        resolvePages: ({
          allSitePage: { nodes: allSitePages },
          allMarkdownRemark: { nodes: allMarkdownRemark }
        }) => {
          const blogPostsPages = allMarkdownRemark.reduce(
            (acc, node) => ({
              ...acc,
              [node.fields.slug]: node.frontmatter,
            }),
            {},
          );

          return allSitePages.map((page) => ({
            ...page,
            ...blogPostsPages[page.path],
          }));
        },
        serialize: ({ path, date }) => {
          if (date) {
            return {
              url: path,
              lastmod: date,
              priority: 0.7,
              changefreq: "daily",
            };
          } else {
            return {
              url: path,
              priority: 0.5,
              changefreq: "daily",
            };
          }
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Merricx Blog`,
        short_name: `Merricx`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0984e3`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
