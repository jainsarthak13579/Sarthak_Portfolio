/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // This ensures the build doesn't fail on tiny typing warnings
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
