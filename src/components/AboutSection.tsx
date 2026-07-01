import { BookOpen, Award, Sparkles, TrendingUp, Cpu, Linkedin, FileText } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const values = [
    {
      icon: <BookOpen className="w-5 h-5 text-brand-purple" />,
      title: "Estudos na FIAP",
      desc: "Imerso na graduação de Web Design na FIAP, absorvendo as melhores práticas globais de usabilidade (UX), psicologia do consumidor, design de interfaces (UI) e estruturação de campanhas locales."
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
      title: "Alta Performance Moderna",
      desc: "Especializado no ecossistema moderno de desenvolvimento frontend (Tailwind CSS, React, clean code). Sites livres de scripts pesados e lentos para garantir abertura instantânea até no 3G."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand-blue" />,
      title: "Foco no Retorno Financeiro",
      desc: "Para nós, um site bonito que não gera leads é desperdício de dinheiro. Projetamos cada pixel focando puramente em atrair o cliente e iniciar diálogos qualificados via WhatsApp."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-dark-950 relative overflow-hidden">
      {/* Background radial overlays */}
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Section left visual card column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[360px]"
            >
              {/* Decorative radial outline */}
              

              {/* Main Info Card */}
              <div className="relative bg-brand-dark-900 border border-brand-dark-800 p-8 rounded-lg space-y-6 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="font-heading font-black text-6xl text-brand-purple">22</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-cyan flex items-center justify-center shadow-md">
                    <span className="font-heading font-black text-lg text-brand-dark-950">GH</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white">Guilherme Hirayama</h3>
                    <p className="text-[10px] text-brand-cyan font-mono font-bold uppercase tracking-widest mt-0.5">Web Designer B2B • 22 Anos</p>
                  </div>
                </div>

                <div className="h-[1px] bg-brand-dark-800" />

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-xs bg-brand-dark-950 p-3 rounded-md border border-brand-dark-800">
                    <span className="text-brand-cyan font-bold p-0.5 shrink-0">✓</span>
                    <div>
                      <span className="block font-bold text-slate-200">Formação Acadêmica</span>
                      <span className="text-slate-400">FIAP - Tecnologia em Web Design</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-xs bg-brand-dark-950 p-3 rounded-md border border-brand-dark-800">
                    <span className="text-brand-cyan font-bold p-0.5 shrink-0">✓</span>
                    <div>
                      <span className="block font-bold text-slate-200">Especialidade</span>
                      <span className="text-slate-400">Landing Pages de Alta Conversão</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-xs bg-brand-dark-950 p-3 rounded-md border border-brand-dark-800">
                    <span className="text-brand-cyan font-bold p-0.5 shrink-0">✓</span>
                    <div>
                      <span className="block font-bold text-slate-200">Nicho Alvo</span>
                      <span className="text-slate-400">Comércios Locais e Clínicas</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase">
                    SÃO PAULO - SP • ATEDIMENTO GLOBAL
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section right content details column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold">
                SOBRE MINHA JORNADA
              </p>
              
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Estudando as Melhores Tecnologias no Coração da Inovação Brasileira
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Olá, sou Guilherme Naoki Hirayama. Aos 22 anos, busco unir a excelência técnica da programação moderna à sofisticação de interfaces fluidas. Como acadêmico de Web Design na FIAP, encontrei o equilíbrio perfeito para criar sites que não são apenas ornamentos digitais vazios, mas verdadeiras ferramentas geradoras de caixa e contatos comerciais para pequenas e médias empresas brasileiras.
              </p>
              
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                Minha missão é simples: capacitar pequenos comércios (restaurantes de delivery de destaque, clínicas odontológicas e médicas, serviços automotivos, etc.) a competirem de igual para igual com grandes marcas digitais, entregando páginas rápidas, de fácil navegação móvel e focadas integralmente na conversão por agendamento ou pedido direto no WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://linkedin.com/in/guilhermehirayama/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center space-x-2 bg-[#0077b5] hover:bg-[#006097] text-white px-5 py-2.5 rounded-md text-sm font-bold font-heading transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>Perfil no LinkedIn</span>
                </a>
                <a href="/curriculo.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center space-x-2 bg-brand-dark-800 hover:bg-brand-dark-700 border border-brand-dark-700 text-slate-200 px-5 py-2.5 rounded-md text-sm font-bold font-heading transition-colors">
                  <FileText className="w-4 h-4 text-brand-cyan" />
                  <span>Baixar Currículo (PDF)</span>
                </a>
              </div>
            </div>

            {/* Pillar grid block mapping */}
            <div className="space-y-4">
              {values.map((v, vIdx) => (
                <div key={vIdx} className="flex items-start space-x-4 bg-brand-dark-900 border border-brand-dark-800/80 p-5 rounded-lg">
                  <div className="p-2.5 bg-brand-dark-950 rounded-md border border-brand-dark-800">
                    {v.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white font-heading">{v.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
