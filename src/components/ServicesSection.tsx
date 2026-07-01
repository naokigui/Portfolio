import { Rocket, Zap, MessageSquareCode, CheckCircle, ArrowRight } from "lucide-react";
import { SERVICES } from "../types";
import { motion } from "motion/react";

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  // Map string icon names to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case "Rocket":
        return <Rocket className="w-6 h-6 text-brand-cyan" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-brand-purple" />;
      case "MessageCircleCode":
        return <MessageSquareCode className="w-6 h-6 text-brand-blue" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  const getCardColorTheme = (id: string) => {
    switch (id) {
      case "landing-page":
        return "border-brand-cyan/20 hover:border-brand-cyan/50 shadow-brand-cyan/5";
      case "redesign":
        return "border-brand-purple/20 hover:border-brand-purple/50 shadow-brand-purple/5";
      case "cro-opt":
        return "border-brand-blue/20 hover:border-brand-blue/50 shadow-brand-blue/5";
      default:
        return "border-zinc-850 hover:border-zinc-700";
    }
  };

  return (
    <section id="servicos" className="py-24 bg-brand-dark-950 relative overflow-hidden">
      {/* Decorative Blur and Grid Overlay */}
      
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold">
            SERVIÇOS SOB MEDIDA
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Soluções Digitais Lucrativas para Empresas
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Direcionado para donos de comércios de delivery, clínicas de estética, médicos, corretores de imóveis e prestadores de serviços locais. Atração ágil e direta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-brand-dark-900 rounded-lg border p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl ${getCardColorTheme(service.id)}`}
            >
              <div className="space-y-6">
                
                {/* Header with Icon and Badge */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-dark-950 rounded-md border border-brand-dark-800">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[9px] font-mono tracking-widest bg-brand-dark-950 text-brand-cyan px-2.5 py-1 rounded-sm uppercase border border-brand-dark-800 font-black shadow-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Service Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-white tracking-tight">{service.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[70px]">
                    {service.description}
                  </p>
                </div>

                {/* Separation line */}
                <div className="h-[1px] bg-brand-dark-800" />

                {/* Features Checklist */}
                <div className="space-y-3">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Entrega Inclusa:</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0 mr-2.5 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer with Price and Contact CTA */}
              <div className="pt-8 mt-6 border-t border-brand-dark-800 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Investimento</span>
                  <span className="text-lg font-heading font-extrabold text-brand-cyan text-glow-cyan">
                    {service.priceEstimate}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 rounded-sm bg-brand-cyan hover:bg-brand-cyan/90 text-brand-dark-950 font-heading font-black uppercase text-[10px] tracking-widest  transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Pedir Orçamento Deste Serviço</span>
                  <ArrowRight className="w-3 h-3 text-brand-dark-950" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Trust bar */}
        <div className="mt-20 p-8 rounded-lg bg-brand-dark-900 border border-brand-dark-800 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 via-transparent to-brand-purple/5 pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h4 className="font-heading font-extrabold text-lg text-white">Precisa de algo sob medida para o seu nicho comercial?</h4>
            <p className="text-xs text-slate-400 max-w-lg mx-auto">
              Seu negócio tem necessidades específicas? Desenvolvo fluxos de reservas integrados com calendários, menus personalizados por QR Code e canais internos. Fale comigo para criarmos o seu blueprint exclusivo.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  const target = document.getElementById("contato");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-widest uppercase text-brand-cyan hover:text-white transition-colors cursor-pointer group"
              >
                <span>Entrar em contato para projeto sob medida</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
