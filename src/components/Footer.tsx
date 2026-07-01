import { MessageCircle, ArrowUp, Send, Code, Shield } from "lucide-react";

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-950 border-t border-brand-dark-800 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Decorative Tech lines */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-purple/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dynamic prompt footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-dark-800">
          
          {/* Column 1: Info and brief requested quote */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-sm bg-brand-cyan flex items-center justify-center shadow-md">
                <span className="font-heading font-black text-brand-dark-950 text-sm">GH</span>
              </div>
              <span className="font-heading font-extrabold text-base text-white tracking-tight">Guilherme Naoki Hirayama</span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-justify max-w-sm">
              Desenvolvimento de Landing Pages de alta performance e sites otimizados para negócios locais, sob as dinâmicas e avaliações práticas no curso de Web Design na FIAP.
            </p>

            <div className="flex items-center space-x-2.5 text-[10px] text-zinc-500 font-mono uppercase tracking-wider font-bold">
              <Shield className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Conexões seguras & conversão otimizada via WhatsApp</span>
            </div>
          </div>

          {/* Column 2: Quick anchor buttons */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">Navegação Rápida</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => {
                    const target = document.getElementById("inicio");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Apresentação
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const target = document.getElementById("diferencial");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  O Diferencial (Diferencial)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const target = document.getElementById("servicos");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Serviços Oferecidos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const target = document.getElementById("portfolio");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Portfólio & Detalhes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact quick facts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">Contatos do Desenvolvedor</h4>
            
            <div className="space-y-3 text-xs text-zinc-400">
              <p className="flex items-center">
                <span className="font-semibold text-white mr-1.5 font-mono">LinkedIn:</span>
                <a href="https://linkedin.com/in/guilhermehirayama/" target="_blank" rel="noreferrer" className="text-brand-cyan hover:underline">
                  linkedin.com/in/guilhermehirayama
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-semibold text-white mr-1.5 font-mono">GitHub:</span>
                <a href="https://github.com/naokigui" target="_blank" rel="noreferrer" className="text-brand-purple hover:underline">
                  github.com/naokigui
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-semibold text-white mr-1.5 font-mono">WhatsApp:</span>
                <a href="https://wa.me/5511997221962" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                  +55 (11) 99722-1962
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Footer bottom meta with Scroll Up button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p className="text-center sm:text-left">
            © {currentYear} Guilherme Naoki Hirayama. Todos os direitos reservados.
          </p>
          
          <p className="text-center text-[10px] text-zinc-650 flex items-center space-x-1.5">
            <Code className="w-3.5 h-3.5" />
            <span>Codificado com TypeScript & Tailwind CSS • São Paulo</span>
          </p>

          <button
            onClick={onScrollToTop}
            className="p-2.5 rounded-sm bg-brand-dark-900 border border-brand-dark-800 hover:border-brand-cyan text-zinc-400 hover:text-white transition-all cursor-pointer group"
            title="Voltar ao Topo"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
