const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  esModule: true,
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
  reactStrictMode: true,
  images: {
    domains: []
  }
})
