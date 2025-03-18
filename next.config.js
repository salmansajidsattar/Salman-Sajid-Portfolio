/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   netlify: {
    excludeStaticForms: true, // Disables Netlify Forms
  },
};

module.exports = nextConfig;
