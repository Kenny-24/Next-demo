/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    // Required:
    appDir: true,
  },

  images: {
    domains: ['img1.baidu.com', 'img2.baidu.com', 'img0.baidu.com'],
  },
};

module.exports = nextConfig;
