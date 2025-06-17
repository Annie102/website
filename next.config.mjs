/** @type {import('next').NextConfig} */
// const repoName = 'website'; // 🔁 替換成你的實際 repo 名稱

// export default {
//   output: 'export',
//   basePath: '/' + repoName,
//   assetPrefix: '/' + repoName + '/',
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true, 
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/website',
  images: {
      unoptimized: true,
      loader: 'custom',
      loaderFile: './image-loader.js',
  },
  assetPrefix: '/react-test',
  trailingSlash: true,
  webpack: (config) => {
      config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          type: 'asset/resource',
      });
      return config;
  },
};

export default nextConfig;