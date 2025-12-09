export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-dark min-h-screen flex items-center justify-center">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Marketing Digital que Gera Resultados
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Ciclo completo de comunicação em Maringá
          </p>
          <button className="bg-accent-primary hover:bg-accent-secondary transition-colors px-8 py-4 rounded-full text-lg font-semibold">
            Fale Conosco
          </button>
        </div>
      </section>

      {/* Próximas seções virão aqui */}
      {/* <section className="section-light">Apresentação</section> */}
      {/* <section className="section-dark">Serviços</section> */}
    </main>
  );
}