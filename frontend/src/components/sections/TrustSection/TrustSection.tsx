// src/components/sections/TrustSection.tsx
'use client'
import { motion } from 'framer-motion';

export function TrustSection() {
  // Substitua pelos caminhos reais das suas imagens em /public
  const logos = ['/logo1.png', '/logo2.png', '/logo3.png', '/logo4.png', '/logo5.png'];

  return (
    <section className="bg-background py-10 opacity-60">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest">
          Empresas que <span className="text-primary font-semibold">confiam</span> em nós
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale brightness-200">
          {logos.map((logo, i) => (
            <motion.img 
              key={i} 
              src={logo} 
              alt="Parceiro" 
              className="h-8 md:h-10 object-contain"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}