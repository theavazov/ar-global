/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withVideos(nextConfig);
