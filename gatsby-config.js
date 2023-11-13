/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `QRSwift`,
    siteUrl: `https://qrswift.unicorndonkeys.com`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/image/png/favicon.png"
    },
  },
  {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        "a", // Google Analytics / GA
        "a", // Google Ads / Adwords / AW
        "a", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ]
    }
  }
]
};