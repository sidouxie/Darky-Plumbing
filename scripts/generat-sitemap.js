const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://darky-plumbing.ml",
  pagesDirectory: path.resolve(__dirname, "../out/static/"),
  targetDirectory: path.resolve(__dirname, "../out/static/"),
  ignoredExtensions: [
    "png",
    "map",
    "json",
    "xml",
    "jpeg",
    "icon",
    "svg",
    "jpg",
  ],
  ignoredPaths: ["404"],
});
