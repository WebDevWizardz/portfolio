const fs = require("fs");
const path = require("path");

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.karolinahess.com/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>`;

fs.writeFileSync(
  path.resolve(__dirname, "public", "sitemap.xml"),
  sitemapContent,
  "utf8"
);
console.log("sitemap.xml został wygenerowany.");
