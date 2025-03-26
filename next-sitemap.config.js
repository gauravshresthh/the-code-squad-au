/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.thecodesquad.com",
  generateRobotsTxt: true, // Generates a robots.txt file
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin", "/private"], // Exclude private routes
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private"],
      },
    ],
  },
};
