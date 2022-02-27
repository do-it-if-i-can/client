/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  typescript: { ignoreDevErrors: true },
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  pageExtensions: ["page.tsx", "page.ts"],
  images: {
    // next/imageの設定（外部画像最適化の設定）
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
