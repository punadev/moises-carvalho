import { Shield, TrendingUp, Target, Award, ArrowUpRight } from 'lucide-react';

import { Shield, TrendingUp, Target, Award, ArrowUpRight } from 'lucide-react';

const benefits = [
  {
    title: 'A DOR REAL',
    desc: 'Mesmo com talento e dedicação, a verdade é simples: o mercado forma uma opinião sobre ti antes mesmo de ouvirem o que tens para dizer.'
  },
  {
    icon: TrendingUp,
    title: 'Posicionamento Executive',
    desc: 'Domine as nuances visuais que sinalizam prontidão para liderança e cargos C-Level.'
  },
  {
    icon: Target,
    title: 'Precisão Estratégica',
    desc: 'Elimine ruídos de comunicação visual e evite erros comuns que minam sua autoridade.'
  },
  {
    icon: Award,
    title: 'ROI de Imagem',
    desc: 'Aplique ferramentas práticas para mensurar e acelerar sua valorização no mercado premium.'
  }
];

export default function Benefits() {
  return (
    <section className="py-32 bg-obsidian text-champagne relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">
              O que você <br />
              <span className="text-gradient-gold">Vai Dominar</span>
            </h2>
            <p className="text-xl text-champagne/60 font-light">
              Uma imersão técnica no código visual que governa as grandes corporações.
              Transforme sua presença em um activo estratégico de alto rendimento.
            </p>
          </div>
          <a href="#download" className="btn-premium-outline mb-4">
            Baixar Agora
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-obsidian p-10 hover:bg-white/5 transition-all duration-500 group">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                <benefit.icon className="w-6 h-6 text-gold group-hover:text-obsidian transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-champagne/50 text-sm leading-relaxed font-light">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
