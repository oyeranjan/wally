/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['assets.aceternity.com','th.wallhaven.cc','w.wallhaven.cc','images.unsplash.com']
    },
   async  rewrites() {
        return [
            {
                source: "/search",
                destination: "https://wallhaven.cc/api/v1/search"
            }, 
            {
                source: '/api/images/:path*',
                destination: 'https://w.wallhaven.cc/full/:path*',
            },
        ]
    },
    distDir: 'build',
};

export default nextConfig;
