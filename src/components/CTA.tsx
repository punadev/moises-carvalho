import React, { useState } from 'react';
import { Download, ShieldCheck, X, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    marketing: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data:', formData);
    setShowModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="download" className="py-32 bg-obsidian relative overflow-hidden">
      {/* Decorative background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass text-champagne rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
          <div className="p-12 lg:p-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 bg-gold/10 px-4 py-1 rounded-full border border-gold/20">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span className="text-gold font-bold text-[10px] uppercase tracking-[0.2em]">Secure Acquisition</span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
                Acesse o <br />
                <span className="text-gradient-gold">Conhecimento</span>
              </h2>
              <p className="text-lg text-champagne/60 font-light max-w-2xl mx-auto leading-relaxed">
                Preencha os dados abaixo para receber o guia estratégico <span className="text-white font-medium">"O Poder da Imagem Profissional"</span>.
                Um passo decisivo para sua consolidação como autoridade.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 gap-8 text-white">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ex: seunome@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 text-white">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">Telefone ou WhatssApp</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Digite seu telefone"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                  required
                />
              </div>

              <div className="flex items-center gap-4 py-4 group cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="marketing"
                    name="marketing"
                    checked={formData.marketing}
                    onChange={handleInputChange}
                    className="peer hidden"
                  />
                  <div
                    onClick={() => setFormData(prev => ({ ...prev, marketing: !prev.marketing }))}
                    className="w-6 h-6 border-2 border-white/10 rounded-lg peer-checked:bg-gold peer-checked:border-gold transition-all"
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">
                    <div className="w-2 h-2 bg-obsidian rounded-full"></div>
                  </div>
                </div>
                <label htmlFor="marketing" className="text-sm text-champagne/40 leading-tight font-light cursor-pointer group-hover:text-champagne/60 transition-colors">
                  Aceito receber comunicações estratégicas e insights de autoridade visual.
                </label>
              </div>

              <button
                type="submit"
                className="btn-premium-primary w-full group"
              >
                Fazer download agora
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="glass text-champagne p-8 lg:p-12 rounded-[32px] max-w-lg w-full relative z-10 border border-gold/20 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-champagne/40 hover:text-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-8 border border-gold/20">
                <CheckCircle2 className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black mb-4 uppercase tracking-tighter">
                Solicitação Recebida
              </h3>
              <p className="text-champagne/60 font-light leading-relaxed">
                Obrigado, confirme por favor o seu email para baixar o e-book.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="btn-premium-primary w-full mt-10"
              >
                Confirmar e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
