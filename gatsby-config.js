module.exports = {
  siteMetadata: {
    title: 'Diaz Real Estate, LLC',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-48293725-4",
        head: true,
        cookieDomain: "https://www.diazre.com/",
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://diazre.us19.list-manage.com/subscribe/post?u=3344b9f1941a28dcd26265a07&amp;id=acdfdaf584',
      },
    }
  ],
}
