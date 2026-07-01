import { useState } from "react";
import { Zap, Target, Smartphone, ChevronRight, X, Check, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ValueProposition() {
  const [activeTab, setActiveTab] = useState<"with-guilherme" | "without-guilherme">("with-guilherme");

  const differentials = [
    {
      icon: <Zap className="w-5 h-5 text-brand-cyan" />,
      title: "Criação Ultra-Rápida de Sites",
      desc: "Utilização estratégica de insights de mercado e ferramentas de inteligência artificial para codificar sites velozes e limpos, prontos para rodar em poucos dias.",
      tag: "Vantagem Competitiva"
    },
    {
      icon: <Target className="w-5 h-5 text-brand-purple" />,
      title: "Copywriting de Alta Conversão",
      desc: "Não fazemos apenas texto bonito. Redigimos copies persuasivos com gatilhos mentais estruturados para quebrar objeções e empurrar o cliente local para a tomada de ação.",
      tag: "Mais Vendas"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-brand-blue" />,
      title: "Design Mobile-First",
      desc: "Mais de 90% dos acessos locais ocorrem em celulares pelo 4G/5G. Nossos layouts são pensados e polidos primeiramente para telas pequenas e conexões móveis.",
      tag: "Otimização Extrema"
    }
  ];

  return (
    <section id="diferencial" className="py-24 relative overflow-hidden bg-brand-dark-900">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-purple font-semibold">
            PROPOSTA DE VALOR & DIFERENCIAIS
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Como Transformamos Visitantes em WhatsApps Recheados de Mensagens?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A maioria dos Web Designers foca apenas em colocar cores bonitinhas. Nós focamos em dados estratégicos, velocidade extrema e usabilidade focado no seu ROI de negócio local.
          </p>
        </div>

        {/* Dynamic Interactive Demo and Bento Grid Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Bento Grid Differentials List */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {differentials.map((diff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-brand-dark-950 p-6 rounded-lg border border-brand-dark-800 hover:border-brand-cyan/20 transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-dark-900 rounded-md group-hover:scale-105 transition-transform duration-300">
                      {diff.icon}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold font-heading text-white">{diff.title}</h3>
                        <span className="text-[10px] font-mono bg-brand-dark-900 border border-brand-dark-800 text-brand-cyan px-2 py-0.5 rounded-sm uppercase tracking-wide">
                          {diff.tag}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">{diff.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Proof Stat banner */}
            <div className="bg-gradient-to-tr from-brand-dark-950 to-brand-dark-900 p-6 rounded-lg border border-brand-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest">Estatística FIAP</p>
                <p className="text-sm font-bold text-white mt-1">Metodologia pautada em usabilidade de alto nível</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-heading font-black text-brand-cyan text-glow-cyan">100%</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-none font-mono mt-1">Mobile Friendly</p>
              </div>
            </div>
          </div>

          {/* Interactive Screen Simulator Comparison Frame */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-brand-dark-950 border border-brand-dark-800 rounded-lg p-5 sm:p-6 shadow-2xl space-y-6 relative flex flex-col h-full justify-between">
              
              {/* Simulator Tabs Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 pb-2 border-b border-brand-dark-800">
                  <span className="w-3 nav-dot h-3 rounded-full bg-red-500" />
                  <span className="w-3 nav-dot h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 nav-dot h-3 rounded-full bg-green-500" />
                  <span className="text-[10px] font-mono text-zinc-500 pl-2 uppercase tracking-wide">SIMULADOR_DE_CONVERSAO.conf</span>
                </div>
                
                <h3 className="text-lg font-bold font-heading text-white pt-2">
                  Qual impacto de uma estrutura profissional no seu negócio?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Compare o site antigo de um restaurante ou clínica com a estrutura otimizada que Guilherme desenvolve:
                </p>
              </div>

              {/* Selector buttons */}
              <div className="grid grid-cols-2 gap-3 bg-brand-dark-900 p-1.5 rounded-md border border-brand-dark-800">
                <button
                  type="button"
                  onClick={() => setActiveTab("without-guilherme")}
                  className={`py-2 rounded px-2 text-[10px] uppercase tracking-wider font-extrabold transition-all cursor-pointer ${
                    activeTab === "without-guilherme"
                      ? "bg-red-500/10 text-red-400 border border-red-500/20"
                      : "text-zinc-500 hover:text-slate-300"
                  }`}
                >
                  Site Amador / Comum
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("with-guilherme")}
                  className={`py-2 rounded px-2 text-[10px] uppercase tracking-wider font-extrabold transition-all cursor-pointer ${
                    activeTab === "with-guilherme"
                      ? "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/25 glow-cyan"
                      : "text-zinc-500 hover:text-slate-300"
                  }`}
                >
                  Com Guilherme (Alta Conversão)
                </button>
              </div>

              {/* Simulated Screen display */}
              <div className="flex-1 bg-brand-dark-900 border border-brand-dark-800 rounded-md p-4 flex flex-col justify-between min-h-[220px] transition-all">
                <AnimatePresence mode="wait">
                  {activeTab === "without-guilherme" ? (
                    <motion.div
                      key="without"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Fake header */}
                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-b border-brand-dark-800 pb-2">
                        <span>Restaurante Velho Site</span>
                        <span className="text-red-500 font-bold uppercase">⚠️ Lentidão</span>
                      </div>
                      
                      {/* Negative metrics */}
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-red-400 flex items-center space-x-1.5">
                          <X className="w-3.5 h-3.5" />
                          <span>Menu em arquivo PDF de 15Megas</span>
                        </div>
                        <div className="text-[10px] text-zinc-400 pl-5 leading-normal">
                          O cliente desiste porque sua internet de celular não carrega a imagem do PDF no sinal fraco.
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs font-bold text-red-400 flex items-center space-x-1.5">
                          <X className="w-3.5 h-3.5" />
                          <span>Botão de Contato oculto no rodapé</span>
                        </div>
                        <div className="text-[10px] text-zinc-400 pl-5 leading-normal">
                          Para achar o WhatsApp, o usuário rola a tela várias vezes, fica cansado e vai para o concorrente.
                        </div>
                      </div>

                      {/* Fake design index indicator */}
                      <div className="p-3 bg-red-400/5 rounded-md border border-red-500/10 flex items-center justify-between mt-4">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Score de Performance</span>
                        <span className="text-xs font-bold font-mono text-red-400">32 / 100 (Crítico)</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="with"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Active header */}
                      <div className="flex justify-between items-center text-[10px] font-mono text-brand-cyan border-b border-brand-dark-800 pb-2">
                        <span>🍣 Sushi Premium Hanami</span>
                        <span className="text-emerald-400 font-extrabold flex items-center space-x-1">
                          <Check className="w-3 h-3" />
                          <span className="uppercase tracking-wider">⚡ Instantâneo</span>
                        </span>
                      </div>

                      {/* Positive metrics */}
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-emerald-400 flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5" />
                          <span>Cardápio Digital Integrado</span>
                        </div>
                        <div className="text-[10px] text-zinc-300 pl-5 leading-normal">
                          O cliente escolhe os sushis com cliques simples e rápidos no celular, sem downloads pesados.
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs font-bold text-emerald-400 flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5" />
                          <span>CTA Dinâmico ao WhatsApp</span>
                        </div>
                        <div className="text-[10px] text-zinc-300 pl-5 leading-normal">
                          O botão flutuante gera o pedido perfeitamente formatado e o cliente só precisa apertar enviar.
                        </div>
                      </div>

                      {/* Fake design index indicator */}
                      <div className="p-3 bg-emerald-500/5 rounded-md border border-emerald-500/10 flex items-center justify-between mt-4">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">PageSpeed Performance Score</span>
                        <span className="text-xs font-bold font-mono text-emerald-400">99 / 100 (Excelente)</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Call out value feedback */}
              <div className="text-center font-mono text-[10px] text-brand-cyan tracking-widest uppercase">
                {activeTab === "without-guilherme" 
                  ? "❌ Perda média estimada: 65% dos clientes online" 
                  : "✓ Alta conversão: de 2 a 3x mais contatos no WhatsApp!"
                }
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
