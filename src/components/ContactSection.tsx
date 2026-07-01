import { useState, FormEvent, useEffect } from "react";
import { Copy, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactSectionProps {
  selectedServiceTitle?: string;
  clearSelectedService?: () => void;
}

export default function ContactSection({ selectedServiceTitle, clearSelectedService }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedServiceTitle) {
      setInterest(selectedServiceTitle);
    }
  }, [selectedServiceTitle]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("guilhermenaokihirayama@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const serviceText = interest ? `Tenho interesse no serviço: ${interest}.` : `Gostaria de falar sobre um projeto.`;
    const text = `Olá Guilherme! Meu nome é ${name}. ${serviceText}\n\n${message}`;
    const url = `https://wa.me/5511997221962?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-brand-dark-900 relative overflow-hidden text-left">
      {/* Decorative Glow Elements */}
      
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div className="space-y-10 lg:sticky lg:top-32">
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold">
                VAMOS CONVERSAR
              </p>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Pronto para digitalizar o seu negócio?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Me envie uma mensagem diretamente para discutirmos o seu projeto, tirar dúvidas sobre qual das soluções atende as suas necessidades ou iniciar o processo hoje mesmo.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-brand-dark-800">
              {/* E-mail */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-dark-950 flex items-center justify-center rounded-lg border border-brand-dark-800 shrink-0">
                  <Mail className="w-5 h-5 text-brand-cyan" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-wider mb-1">E-mail Comercial</p>
                  <button onClick={handleCopyEmail} className="flex items-center space-x-2 text-slate-200 hover:text-brand-cyan transition-colors text-sm cursor-pointer group">
                    <span>guilhermenaokihirayama@gmail.com</span>
                    <Copy className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <AnimatePresence>
                    {copied && (
                      <motion.span initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-[10px] block mt-0.5 text-emerald-400">
                        Email copiado!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-dark-950 flex items-center justify-center rounded-lg border border-brand-dark-800 shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-wider mb-1">WhatsApp</p>
                  <a href="https://wa.me/5511997221962" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-[#25D366] transition-colors text-sm">
                    +55 (11) 99722-1962
                  </a>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-dark-950 flex items-center justify-center rounded-lg border border-brand-dark-800 shrink-0">
                  <MapPin className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-wider mb-1">Operação</p>
                  <span className="text-slate-200 text-sm">São Paulo, SP (Atendimento Remoto e Global)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-brand-dark-950 border border-brand-dark-800 rounded-xl p-6 sm:p-10 shadow-2xl relative">
            
            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-slate-500 font-bold block tracking-wider">
                  Como posso te chamar?
                </label>
                <input
                  required
                  type="text"
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-dark-900 border border-brand-dark-800 rounded-md px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors placeholder-zinc-700 hover:border-brand-dark-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-slate-500 font-bold block tracking-wider">
                  O que você está precisando?
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex: Novo site, Redesign, Aplicativo Web..."
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-brand-dark-900 border border-brand-dark-800 rounded-md px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors hover:border-brand-dark-700 placeholder:text-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-slate-500 font-bold block tracking-wider">
                  Me conte um pouco sobre a sua ideia ou projeto
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Dê detalhes sobre sua necessidade, se já possui algo no ar ou o que está planejando."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-brand-dark-900 border border-brand-dark-800 rounded-md px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors placeholder-zinc-700 resize-none custom-scrollbar hover:border-brand-dark-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 mt-2 rounded-md bg-brand-cyan text-brand-dark-950 font-heading font-black uppercase text-xs tracking-widest transition-all duration-300 hover:bg-brand-cyan/90 hover:scale-[1.02] hover: cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Enviar pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center space-x-2 text-[10px] font-mono text-zinc-500 justify-center !mt-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Atendimento Rápido via Celular.</span>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
