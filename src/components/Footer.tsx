import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              O Poder da Imagem Profissional
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              O guia para aumentar a tua credibilidade, crescer na carreira e reforçar o valor das organizações.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contactos</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+244 9XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>moises.carvalho@email.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Links Úteis</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#download" className="hover:text-amber-400 transition-colors">Fazer download do e-book</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Moisés Carvalho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
