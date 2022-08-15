/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['pbs.twimg.com', 'wasap.dev', 'folderin.com'],
	},
};

module.exports = nextConfig;
