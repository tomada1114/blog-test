import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // サイト2がサブディレクトリとしてアクセスされるため、basePath設定が必要
  basePath: '/blog-test',

  // 画像などのアセットにもbasePath接頭辞を付ける
  assetPrefix: '/blog-test',
};

export default nextConfig;
