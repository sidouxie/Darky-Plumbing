const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  const links = [
    { url: "/about/", changefreq: "daily", priority: 0.3 },
    {
      url: "/politiques-de-confidentialite/",
      changefreq: "daily",
      priority: 0.3,
    },
    { url: "/services/", changefreq: "daily", priority: 0.3 },
    {
      url: "/services/plomberie-sanitaire",
      changefreq: "daily",
      priority: 0.3,
    },
    { url: "/services/chauffage-centrale", changefreq: "daily", priority: 0.3 },
    {
      url: "/services/installation-piscine",
      changefreq: "daily",
      priority: 0.3,
    },
    { url: "/services/assainissement", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
