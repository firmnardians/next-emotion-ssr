/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['pbs.twimg.com', 'wasap.netlify.app', 'folderin.com'],
	},
};

module.exports = nextConfig;
