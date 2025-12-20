import { Users, Award, Briefcase, Sparkles } from 'lucide-react';

const corporateBenefits = [
  {
    icon: Users,
    title: 'Equipes que Transmitem Credibilidade',
    description: 'Colaboradores visualmente alinhados reforçam a imagem da empresa em cada ponto de contato com clientes e parceiros.'
  },
  {
    icon: Award,
    title: 'Cultura Organizacional Fortalecida',
    description: 'A consistência na apresentação profissional demonstra maturidade organizacional e reforça valores institucionais.'
  },
  {
    icon: Briefcase,
    title: 'Diferenciação Competitiva',
    description: 'Empresas com profissionais bem posicionados visualmente destacam-se no mercado e atraem melhores talentos e oportunidades.'
  },
  {
    icon: Sparkles,
    title: 'ROI em Percepção de Marca',
    description: 'Investir na imagem profissional da equipe gera retorno direto na percepção de qualidade e profissionalismo da organização.'
  }
];

export default function CorporateBenefits() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider bg-amber-400/10 px-4 py-2 rounded-full border border-amber-400/20">
              Para Organizações
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Eleve o Valor Percebido
            <span className="block text-amber-400">da Sua Organização</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Profissionais bem posicionados visualmente são embaixadores silenciosos da marca.
            Invista na imagem da sua equipe e colha resultados tangíveis em reputação e negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {corporateBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-amber-400/30 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Imagem Profissional Não é Vaidade — é Estratégia
          </h3>
          <p className="text-slate-800 text-lg mb-8 max-w-2xl mx-auto">
            Organizações que investem no desenvolvimento da imagem profissional de suas equipes
            constroem reputação sólida e diferenciam-se em mercados competitivos.
          </p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
            Solicitar Proposta para Empresas
          </button>
        </div>
      </div>
    </section>
  );
}
