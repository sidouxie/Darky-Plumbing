import React from "react";

const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://darky-plumbing.ml</loc>
    <lastmod>2020-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    </url>
    <url>
    <loc>https://darky-plumbing.ml/about</loc>
    <lastmod>2020-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    </url>
    <url>
    <loc>https://darky-plumbing.ml/services</loc>
    <lastmod>2020-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    </url>
    <url>
    <loc>https://darky-plumbing.ml/politiques-de-confidentialite</loc>
    <lastmod>2020-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    </url>
    <url>
     <loc>https://darky-plumbing.ml/services/plomberie-sanitaire</loc>
     <lastmod>2020-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    </url>
    <url>
     <loc>https://darky-plumbing.ml/services/chauffage-centrale</loc>
     <lastmod>2020-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
    </url>
    <url>
     <loc>https://darky-plumbing.ml/services/installation-piscine</loc>
     <lastmod>2020-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
    </url>
    <url>
     <loc>https://darky-plumbing.ml/services/assainissement</loc>
     <lastmod>2020-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
    </url>
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap());
    res.end();
  }
}

export default Sitemap;
