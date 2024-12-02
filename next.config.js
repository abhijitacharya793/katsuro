/** @type {import('next').NextConfig} */
module.exports = {
  // output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};
