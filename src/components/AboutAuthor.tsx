import authorImg from '../assets/images/1757585961786.jpg';

export default function AboutAuthor() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 relative">
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                            <img
                                src={authorImg}
                                alt="Moisés Carvalho"
                                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 glass p-8 rounded-2xl hidden lg:block max-w-xs">
                            <p className="text-obsidian font-bold text-lg mb-2">Refinamento & Estratégia</p>
                            <p className="text-obsidian/60 text-sm leading-relaxed">
                                "A excelência visual não é um luxo, é um pré-requisito para quem quer liderar o futuro."
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 pt-8">
                        <div className="inline-block px-4 py-1 bg-gold/10 text-gold text-xs font-black uppercase tracking-[0.3em] mb-8 rounded-full">
                            AUTORIDADE
                        </div>
                        <h2 className="text-5xl lg:text-8xl font-black text-obsidian mb-10 leading-none tracking-tighter uppercase">
                            Moisés <br />
                            <span className="text-gold">Carvalho</span>
                        </h2>

                        <div className="grid gap-12">
                            <div className="space-y-6">
                                <p className="text-lg text-obsidian/70 font-light leading-relaxed">
                                    Consultor de Estilo e Imagem Profissional, com experiência consolidada nas áreas de Recursos Humanos, comportamento organizacional e desenvolvimento pessoal. Trabalha com profissionais e organizações no desenvolvimento de imagens fortes, autênticas e estrategicamente alinhadas aos seus objectivos.
                                </p>

                                <p className="text-lg text-obsidian/70 font-light leading-relaxed">
                                    É certificado pelo centro de formação Borcelle, no Brasil, sob mentoria do conceituado consultor Alessandro Ricardo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}




