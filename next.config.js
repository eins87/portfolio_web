/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'repository-images.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
        ]
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
};

module.exports = nextConfig;
