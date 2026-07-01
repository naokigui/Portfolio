import { ArrowRight, MessageCircle, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onCTA: () => void;
}

export default function HeroSection({ onCTA }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-brand-dark-950"
    >
      {/* Background Decorative Tech Grids */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]" 
        />
        
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Presentation */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* FIAP Student Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-brand-dark-900 border border-brand-dark-800 px-4 py-2 rounded-md shadow-sm"
              id="fiap-badge"
            >
              <Award className="w-4 h-4 text-brand-cyan" />
              <span className="text-[10px] font-mono font-black tracking-widest text-brand-cyan uppercase">
                ESTUDANTE DE WEB DESIGN NA FIAP
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            </motion.div>

            {/* Main Punchy Title */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-6xl text-white tracking-tighter uppercase leading-[0.9]"
                id="hero-title"
              >
                Guilherme Naoki Hirayama
                <span className="block mt-3 text-brand-cyan text-glow-cyan text-3xl sm:text-4xl xl:text-5xl font-extrabold uppercase">
                  Web Designer & Dev Frontend
                </span>
              </motion.h1>

              {/* Precise requested subhead */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
                id="hero-subtitle"
              >
                Transformando a presença digital de negócios locais em máquinas de atração de clientes e pedidos via WhatsApp. Estudante de Web Design na FIAP.
              </motion.p>
            </div>

            {/* Micro value highlights */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-[10px] font-mono uppercase tracking-wider text-slate-500"
            >
              <div className="flex items-center space-x-1.5 bg-brand-dark-900 px-3 py-1.5 rounded-md border border-brand-dark-800/80">
                <span className="text-brand-cyan">●</span>
                <span>Foco em Conversão (B2B)</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-brand-dark-900 px-3 py-1.5 rounded-md border border-brand-dark-800/80">
                <span className="text-brand-cyan">●</span>
                <span>Análise de Dados Locais</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-brand-dark-900 px-3 py-1.5 rounded-md border border-brand-dark-800/80">
                <span className="text-brand-cyan">●</span>
                <span>Mobile-First Integral</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onCTA}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-sm bg-brand-cyan text-brand-dark-950 font-heading font-black uppercase text-xs tracking-widest  transition-all duration-300 hover:bg-brand-cyan/90 hover:scale-[1.02] cursor-pointer"
                id="hero-cta-btn"
              >
                <MessageCircle className="w-4 h-4 text-brand-dark-950 fill-brand-dark-950" />
                <span>Solicitar Orçamento Gratuito</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-dark-950" />
              </button>

              <button
                onClick={() => {
                  const target = document.getElementById("portfolio");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-sm border border-brand-dark-800 hover:border-brand-cyan/40 bg-brand-dark-900/40 hover:bg-brand-dark-900 font-heading font-black uppercase text-xs tracking-widest text-brand-cyan transition-all duration-300 cursor-pointer"
                id="hero-sec-btn"
              >
                <span>Ver Portfólio</span>
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              </button>
            </motion.div>
          </div>

          {/* Interactive UI Display Container (Simulated High-Conversion Mobile Page) */}
          <div className="lg:col-span-5 flex justify-center py-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[340px] relative"
            >
              {/* Decorative Glow ring */}
              

              {/* Outer Phone shell */}
              <div className="relative rounded-[36px] bg-brand-dark-900 border-[6px] border-brand-dark-800 shadow-2xl p-3 overflow-hidden">
                
                {/* Phone Speaker Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-brand-dark-800 rounded-b-xl flex items-center justify-center">
                  <div className="w-10 h-1 bg-brand-dark-950 rounded-full" />
                </div>

                {/* Simulated Screen Body */}
                <div className="rounded-[26px] bg-brand-dark-950 p-4 pt-6 space-y-4 text-left border border-brand-dark-800/40">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono pb-2">
                    <span>09:41</span>
                    <div className="flex items-center space-x-1">
                      <span>5G</span>
                      <div className="w-4 h-2 rounded-sm bg-brand-cyan" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex justify-between items-center bg-brand-dark-900/80 p-2.5 rounded-xl border border-brand-dark-800">
                    <span className="text-xs font-bold font-heading text-white">🍣 Sushi Hanami</span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-mono">
                      ABERTO
                    </span>
                  </div>

                  {/* Hero Visual Mock */}
                  <div className="relative h-28 rounded-2xl overflow-hidden bg-brand-dark-900/60 flex items-center justify-center border border-brand-dark-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <span className="absolute top-2 left-2 text-[8px] bg-brand-cyan/20 text-brand-cyan px-2 py-0.5 rounded-md font-mono">
                      ✨ PREMIUM DELIVER
                    </span>
                    {/* Simulated Food Plate */}
                    <div className="w-14 h-14 rounded-full bg-brand-purple/20 flex items-center justify-center border border-brand-purple/40 relative">
                      <span className="text-2xl">🍣</span>
                    </div>
                    <div className="absolute bottom-2 left-3 z-20">
                      <p className="text-[10px] text-gray-400 font-mono">Especialidade</p>
                      <p className="text-xs font-bold text-white leading-none">Hanami Combo Master</p>
                    </div>
                  </div>

                  {/* Copy Block simulation */}
                  <div className="space-y-1.5">
                    <p className="text-[10px] text-brand-cyan uppercase tracking-wider font-semibold font-mono">Peça Já</p>
                    <h3 className="text-sm font-bold text-gray-100">O melhor salmão fresco da cidade na sua mesa</h3>
                    <p className="text-[9px] text-gray-400 leading-relaxed">
                      Lander mobile-first com carregamento instantâneo. Sem logins chatos. Clique e envie direto para nossa cozinha no WhatsApp.
                    </p>
                  </div>

                  {/* High conversion button mockup */}
                  <div className="space-y-2">
                    <div className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-500/20">
                      <MessageCircle className="w-3.5 h-3.5 text-brand-dark-950 fill-brand-dark-950" />
                      <span className="text-[10px] font-extrabold text-brand-dark-950 font-heading">
                        INICIAR PEDIDO PELO WHATSAPP
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-[8px] text-zinc-500 font-mono px-1">
                      <span>✓ 100% Responsivo</span>
                      <span>⚡ 0.4s Velocidade</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Stat Card 1 - floating */}
              <div className="hidden sm:flex absolute -left-10 bottom-6 bg-brand-dark-900/90 border border-brand-cyan/40 p-3 rounded-2xl backdrop-blur-md shadow-lg items-center space-x-2.5 max-w-[140px]">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan-700/20 text-brand-cyan flex items-center justify-center">
                  <span className="text-base font-bold">⚡</span>
                </div>
                <div>
                  <p className="text-[9px] font-mono text-zinc-400">PAGE SPEED</p>
                  <p className="text-sm font-extrabold text-white">99 / 100</p>
                </div>
              </div>

              {/* Stat Card 2 - floating */}
              <div className="hidden sm:flex absolute -right-8 top-12 bg-brand-dark-900/90 border border-brand-purple/40 p-3 rounded-2xl backdrop-blur-md shadow-lg items-center space-x-2.5 max-w-[140px]">
                <div className="w-8 h-8 rounded-lg bg-brand-purple-700/20 text-brand-purple flex items-center justify-center">
                  <span className="text-sm text-brand-purple font-extrabold">🚀</span>
                </div>
                <div>
                  <p className="text-[9px] font-mono text-zinc-400">CONVERSÃO</p>
                  <p className="text-sm font-extrabold text-brand-cyan">2.5X MAIS</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
