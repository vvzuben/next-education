/** @type {import('next').NextConfig} */
const path = require('path')

const url = new URL(process.env.WORDPRESS_ENDPOINT)

const wp = {
  protocol: url.protocol.trim().replace(':', ''),
  port: url.port,
  hostname: url.hostname,
}

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'sass')],
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/resources/frequently-asked-questions',
        destination: '/resources/faqs',
      },
      {
        source: '/about-us/vacancies/:slug',
        destination: '/vacancies/:slug',
      },
      {
        source: '/policies/:slug',
        destination: '/page/:slug',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: process.env.WORDPRESS_API_ENDPOINT + '/wp-admin/',
        permanent: true,
      },
    ]
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },

      {
        protocol: wp.protocol,
        hostname: wp.hostname,
        port: wp.port,
        pathname: '/wp-content/uploads/**',
      },
    ]
  },
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  }
}

module.exports = nextConfig
