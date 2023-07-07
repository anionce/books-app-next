/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'storage.googleapis.com',
				port: '',
			},
		],
	},
};

module.exports = nextConfig;
