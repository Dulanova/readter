import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enabled by default in Next.js 16 for better performance
  reactCompiler: true, 
  // Turbopack handles Tailwind processing automatically
};

export default nextConfig;
