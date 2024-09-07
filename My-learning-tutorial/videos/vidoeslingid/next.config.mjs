/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
