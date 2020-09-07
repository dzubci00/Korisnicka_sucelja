module.exports = {
  siteMetadata: {
    title: `NBA site`,
    description: `The title says it all.`,
    menuItems: [
      {
        text: "Home",
        link: "/",
        id: "18uhehdbsb"
      },
      {
        text: "Scores",
        link: "/scores",
        id: "18uhehdbaw"
      },
      {
        text: "News",
        link: "/news",
        id: "18uhehksao"
      },
      {
        text: "Teams",
        link: "/teams",
        id: "20uhehdbsb"
      },    
      {
        text: "Shop",
        link: "/shop",
        id: "18uhehkola"
      }
      
    ],
    author: 'DZDB'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-identity",
      options: {
        url: "https://app.netlify.com/sites/pensive-saha-7e8dfb",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Teaching HCI@FESB`,
        short_name: `HCI@FESB`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/nba.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-theme-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

  ],
}
