import { Header } from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08070b] overflow-x-hidden">
      {/* Moldura Azul do Print */}
      <div className="fixed inset-0 border-[1px] border-blue-500/20 pointer-events-none m-4 rounded-sm z-50" />
      
      <Header />
      <HeroSection />
      
      {/* Próximo passo: <ServicesSection /> */}
    </main>
  );
}