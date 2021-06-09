module.exports = {
  // next.config.js
  // ...abbreviated
  async exportPathMap(defaultPathMap) {
    const pathMap = {
      "/": { page: "/home" },
      "/about": { page: "/text", query: { slug: "about" } },
      "/politiques-de-confidentialite": {
        page: "/text",
        query: { slug: "politiques-de-confidentialite" },
      },
      "/services": { page: "/text", query: { slug: "services" } },
      "/services/plomberie-sanitaire": {
        page: "/text",
        query: { slug: "plomberie-sanitaire" },
      },
      "/services/chauffage-centrale": {
        page: "/text",
        query: { slug: "chauffage-centrale" },
      },
      "/services/installation-piscine": {
        page: "/text",
        query: { slug: "installation-piscine" },
      },
      "/services/assainissement": {
        page: "/text",
        query: { slug: "assainissement" },
      },
    };

    return pathMap;
  },
  // ...abbreviated

  future: {
    webpack5: true,
  },
  target: "serverless",
};
