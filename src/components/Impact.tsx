export default function Impact() {
  return (
    <section id="impact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-champagne/30 -skew-x-12 translate-x-32"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="w-12 h-1 bg-gold mb-8"></div>
            <h2 className="text-4xl lg:text-6xl font-black text-obsidian mb-8 leading-[1.1] tracking-tighter uppercase">
              A Percepção é a sua <br />
              <span className="text-gold">Nova Moeda</span>
            </h2>
            <p className="text-xl text-obsidian/60 leading-relaxed font-light mb-8">
              No mercado premium, a competência técnica é o requisito básico.
              A <span className="text-obsidian font-bold">imagem estratégica</span> é o que separa os executivos dos líderes visionários.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gold/10 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Executive" className="w-full h-full object-cover grayscale px-1 py-1" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-obsidian/40 uppercase tracking-widest font-bold">
                +500 Líderes Transformados
              </p>
            </div>
          </div>

          <div className="relative">
            <blockquote className="text-3xl lg:text-4xl font-serif italic text-obsidian leading-snug border-l-4 border-gold pl-12 py-4">
              “Muitos profissionais perdem oportunidades não pela falta de competência, mas pela forma como são percebidos. Este e-book mostra como transformar a tua imagem em estratégia de sucesso.”
            </blockquote>
            <div className="mt-12 flex justify-end">
              <div className="text-right">
                <div className="text-gold font-bold uppercase tracking-widest text-xs mb-1">Impacto Estratégico</div>
                <div className="text-obsidian/40 text-sm">Metodologia Moisés Carvalho</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
