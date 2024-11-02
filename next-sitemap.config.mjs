// next-sitemap.config.mjs
export default {
  siteUrl: process.env.SITE_URL || "https://www.outright-react-2024.vercel.app",
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  // ...other options
};
