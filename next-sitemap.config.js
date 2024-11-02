// next-sitemap.config.js

module.exports = {
  siteUrl: process.env.SITE_URL || "outright-react-2024.vercel.app", // Replace with your actual URL
  generateRobotsTxt: true, // Automatically generate robots.txt
  sitemapSize: 5000, // (Optional) Split large sitemaps
  changefreq: "weekly", // Change frequency for all pages (optional)
  priority: 0.7, // Default priority for all pages (optional)
  generateIndexSitemap: false, // Disable index sitemap generation for smaller sites
};
