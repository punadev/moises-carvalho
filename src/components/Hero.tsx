import { ArrowRight, Star } from 'lucide-react';
import meeImg from '../assets/images/mee.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden bg-obsidian">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 mb-8 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full transform hover:scale-105 transition-transform duration-500 cursor-default">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-gold font-bold text-xs uppercase tracking-[0.3em]">
                Strategic Excellence
              </span>
            </div>

            <h1 className="text-5xl lg:text-8xl font-black mb-10 leading-[0.95] tracking-tighter">
              <span className="block opacity-90">O PODER DA</span>
              <span className="block text-gradient-gold drop-shadow-2xl">IMAGEM</span>
              <span className="block opacity-90">PROFISSIONAL</span>
            </h1>

            <p className="text-xl lg:text-2xl text-champagne/70 mb-16 max-w-xl leading-relaxed font-light">
              O guia prático para aumentar a tua credibilidade, crescer na carreira e <span className="text-gold font-medium">reforçar o valor das organizações.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <a href="#download" className="btn-premium-primary group">
                Quero meu e-book gratuito
                <div className="w-8 h-8 rounded-full bg-obsidian/10 flex items-center justify-center group-hover:bg-obsidian/20 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
              <a href="#impact" className="text-champagne/50 hover:text-gold transition-colors text-sm uppercase tracking-widest font-bold flex items-center gap-2 group">
                Explorar Conceito
                <div className="w-1 h-1 bg-gold rounded-full group-hover:w-4 transition-all"></div>
              </a>
            </div>
          </div>

          {/* Right Side: Image with Premium Frame */}
          <div className="relative group flex justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative w-full aspect-[3/4] overflow-hidden  transform hover:scale-[1.02] transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent z-10"></div>
              <img
                src={meeImg}
                alt="E-book: O Poder da Imagem Profissional"
                className="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
