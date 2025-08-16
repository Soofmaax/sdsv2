/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour l'export statique (gardée de l'original)
  output: 'export',
  
  // ESLint (désactivé temporairement pour le build)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Images optimisées même en mode export
  images: { 
    unoptimized: true, // Nécessaire pour l'export statique
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimisations de performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Optimisation du bundle
  webpack: (config, { dev, isServer }) => {
    // Optimisations pour la production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }

    return config;
  },

  // Variables d'environnement publiques
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://votre-domaine.com',
  },

  // Optimisation du build
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Compression
  compress: true,

  // Trailing slash pour la compatibilité avec l'export statique
  trailingSlash: true,
};

module.exports = nextConfig;
