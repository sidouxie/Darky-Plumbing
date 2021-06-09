const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://darky-plumbing.ml",
  pagesDirectory: path.resolve(__dirname, "../out/"),
  targetDirectory: path.resolve(__dirname, "../out/"),
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
