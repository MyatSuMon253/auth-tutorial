/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.html$/,
      use: "html-loader", // Or 'ignore-loader' if you want to ignore HTML files
    });
    return config;
  },
};

export default nextConfig;
