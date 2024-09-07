import { withNextVideo } from 'next-video/process';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    webpack(config) {
        // Add the file-loader rule for video files
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|ogv)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/videos',
                    outputPath: 'static/videos',
                    name: '[name].[hash].[ext]',
                },
            },
        });

        // Return the modified config
        return config;
    },
};

export default withNextVideo(nextConfig);
