/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'NCHC KASM WORKSPACE REGISTRY',
    description: 'The nchc store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://nchcdev.github.io/workspace_registry/',
    contactUrl: 'https://github.com/nchcdev/workspace_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/workspace_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
