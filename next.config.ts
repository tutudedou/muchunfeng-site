import type { NextConfig } from 'next';

// 部署到 GitHub Pages 的「项目站点」(username.github.io/仓库名) 时需要子路径；
// 部署到根域名或自定义域名时留空。由 GitHub Actions 通过环境变量传入。
const basePath = process.env.BASE_PATH ?? '';

const nextConfig: NextConfig = {
  // 纯静态导出：构建后得到 out/ 目录，丢到任意静态服务器或对象存储即可
  output: 'export',
  // 静态导出不支持 Next 的图片优化服务
  images: { unoptimized: true },
  // 生成 /works/index.html 形式，兼容 Nginx / OSS / GitHub Pages
  trailingSlash: true,
  basePath,
  // 暴露给代码，用于给 public 下的图片路径加前缀
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
