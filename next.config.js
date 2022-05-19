/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  // to support importing raw svg files as react components
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
