const createMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = createMDX(nextConfig);