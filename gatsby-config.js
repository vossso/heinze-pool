module.exports = {
  siteMetadata: {
    title: "Heinze Pool",
    description:
      "Seit über 50 Jahren bieten wir Ihnen aus unserem Standort in Hannover ein umfassendes Dienstleistungsspektrum rund um das Thema Pool. Hierbei unterstützen wir Sie vor, während und nach dem Poolbau in Rat und Tat.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          {
            resolve: `gatsby-plugin-typescript`,
            options: {
              isTSX: true, // defaults to false
              jsxPragma: `jsx`, // defaults to "React"
              allExtensions: true, // defaults to false
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      // options: {
      //   modulePath: `${__dirname}/src/cms/cms.js`,
      // },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["global.scss"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          maxWidth: 2000,
          quality: 100,
          backgroundColor: `transparent`,
        }
      }
    },
    `gatsby-transformer-sharp`,
  ],
};
