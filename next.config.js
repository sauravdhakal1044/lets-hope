/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    EMAILJS_SERVICE: process.env.EMAILJS_SERVICE,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY
  }
}

module.exports = nextConfig
