/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };
module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizeFonts: true,
  },
  netlify: {
    excludeStaticForms: true, // Disable Netlify Forms processing
  },
};

module.exports = nextConfig;
