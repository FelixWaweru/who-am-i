/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // Creates the 'out' build folder
	images: { 
		unoptimized: true
	},
	assetPrefix: ".",
}

module.exports = nextConfig
