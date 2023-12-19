/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["wkmzwtndexinmhbrjkzb.supabase.co"],
	},
	typescript: {
		// Disable type checking
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
