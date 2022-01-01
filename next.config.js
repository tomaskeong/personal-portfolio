/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    CMS_API_URL: process.env.CMS_API_URL,
    CMS_URL: process.env.CMS_URL,
  },
  images: {
    domains: ['localhost'],
  },
}
