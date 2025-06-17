/** @type {import('next').NextConfig} */
const repoName = 'website'; // 🔁 替換成你的實際 repo 名稱

export default {
  output: 'export',
  basePath: '/' + repoName,
  assetPrefix: '/' + repoName + '/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, 
};

