const nextConfig = {
  // GARANTIR SSG (Static Site Generation)
  output: 'export', // Gera site 100% estático
  
  // Otimização de imagens
  images: {
    unoptimized: true, // Necessário para 'output: export'
    formats: ['image/avif', 'image/webp'],
  },
  
  // Remover console.log em produção
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Trailing slash para compatibilidade
  trailingSlash: true,
}

module.exports = nextConfig
