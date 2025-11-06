/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    output: 'export',
     images: {
    unoptimized: true, // 👈 این خط مشکل را حل می‌کند
  },
};

export default nextConfig;
