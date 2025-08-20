/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer({
  eslint: {
    // Hanya lint saat dev; JANGAN blok build
    ignoreDuringBuilds: true,
    // opsional: tetap lint folder mana saat dev
    dirs: ['.'],
  },
  // Kalau masih ada type error TS yang blok build, aktifkan ini sementara (tidak disarankan jangka panjang)
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  swcMinify: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'drive.google.com', pathname: '/**' },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config) => {
    // Hindari error modul optional ws
    config.externals.push({
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    });
    return config;
  },
});
