/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://mangoparkbd.com',
    generateRobotsTxt: true,
    sitemapSize: 7000, // Optional: split large sitemaps
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/404', '/500'],
  };
  