import { useState } from "react";
import { PROJECTS, Project } from "../types";
import { X, Flame, ShieldCheck, LayoutGrid, CheckCircle, ExternalLink, MessageCircle, Heart, Layers, Code2, Briefcase, Languages } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PortfolioSectionProps {
  onSelectProject?: (projectTitle: string) => void;
}

export default function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getIcon = (name: string, colorClass: string) => {
    switch (name) {
      case "Flame":
        return <Flame className={`w-5 h-5 ${colorClass}`} />;
      case "ShieldCheck":
        return <ShieldCheck className={`w-5 h-5 ${colorClass}`} />;
      case "LayoutGrid":
        return <LayoutGrid className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <LayoutGrid className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case "cyan":
        return "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20";
      case "purple":
        return "text-brand-purple bg-brand-purple/10 border-brand-purple/20";
      case "blue":
        return "text-brand-blue bg-brand-blue/10 border-brand-blue/20";
      default:
        return "text-zinc-400 bg-zinc-855";
    }
  };

  const getGlowHover = (color: string) => {
    switch (color) {
      case "cyan":
        return "hover:border-brand-cyan/40 hover:";
      case "purple":
        return "hover:border-brand-purple/40 hover:";
      case "blue":
        return "hover:border-brand-blue/40 hover:";
      default:
        return "hover:border-zinc-700";
    }
  };

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="portfolio" className="py-24 bg-brand-dark-900 relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-purple font-semibold">
            PORTFÓLIO DE PROJETOS
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Casos de Sucesso
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Garantia de layout moderno, carregamento em menos de 1 segundo e pontos de conversão estrategicamente posicionados. Clique para abrir detalhes e simular a página ao vivo.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-brand-dark-950 rounded-lg border border-brand-dark-800 p-6 flex flex-col justify-between transition-all duration-300 ${getGlowHover(project.color)} group`}
            >
              <div className="space-y-5">
                
                {/* Visual Category Badge & Icon */}
                <div className="flex justify-between items-center">
                  <span className={`text-[9px] uppercase font-mono tracking-widest px-3 py-1 rounded-sm border ${getColorClass(project.color)} font-extrabold`}>
                    {project.category}
                  </span>
                  <div className="p-2.5 bg-brand-dark-900 border border-brand-dark-800 rounded-md">
                    {getIcon(project.iconName, project.color === 'cyan' ? 'text-brand-cyan' : project.color === 'purple' ? 'text-brand-purple' : 'text-brand-blue')}
                  </div>
                </div>

                {/* Info Text */}
                <div className="space-y-2">
                  <p className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wide">{project.client}</p>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-brand-cyan transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[50px]">
                    {project.tagline}
                  </p>
                </div>

                {/* Dynamic mini-stats box in card */}
                <div className="grid grid-cols-3 gap-2 bg-brand-dark-900 p-3 rounded-md border border-brand-dark-800 text-center">
                  {project.stats.slice(0, 2).map((stat, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <p className="text-[9px] text-zinc-500 font-mono leading-none uppercase tracking-wide">{stat.label}</p>
                      <p className={`text-xs font-black font-mono mt-1 ${project.color === 'cyan' ? 'text-brand-cyan text-glow-cyan' : project.color === 'purple' ? 'text-brand-purple' : 'text-brand-blue'}`}>
                        {stat.value}
                      </p>
                    </div>
                  ))}
                  <div className="space-y-0.5">
                    <p className="text-[9px] text-zinc-500 font-mono leading-none uppercase tracking-wide font-medium">Layout</p>
                    <p className="text-xs font-black text-brand-cyan font-mono mt-1">MOBILE 100%</p>
                  </div>
                </div>
              </div>

              {/* Botão Ver Projeto explicitly requested */}
              <div className="pt-6 mt-6 border-t border-brand-dark-800">
                <button
                  type="button"
                  onClick={() => openProjectDetails(project)}
                  className="w-full py-3 rounded-sm bg-brand-dark-950 hover:bg-brand-dark-900 border border-brand-dark-800 text-[10px] uppercase px-4 py-2.5 font-mono tracking-widest text-slate-300 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:border-zinc-750 cursor-pointer"
                >
                  <span>Ver Projeto & Simulação</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sites Ativos & No Ar */}
        <div className="mt-24 pt-16 border-t border-brand-dark-800 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-brand-purple font-bold">
              PORTFÓLIO EM PRODUÇÃO
            </p>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Sites Ativos & No Ar ⚡
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Explore aplicações reais e completas desenvolvidas para clientes, rodando diretamente em produção com alta velocidade e design sob medida.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Made by Kisa",
                description: "E-commerce e vitrine digital de moda autoral e costura fina, focado em alta conversão e sofisticação.",
                url: "https://www.madebykisa.com.br",
                badge: "E-Commerce",
              },
              {
                title: "Soukyou Eisa Daiko",
                description: "Portal institucional e de eventos de grupo de tambores tradicionais japoneses (Taiko/Okinawa).",
                url: "https://soukyou-eisa-daiko.vercel.app",
                badge: "Institucional",
              },
              {
                title: "Prisma Tech",
                description: "Aplicação web inteligente desenvolvida para controle de diagnósticos, exames e análises técnicas.",
                url: "https://prisma-tech-exame-app-w367.vercel.app",
                badge: "Web Application",
              },
              {
                title: "Turistei",
                description: "Plataforma de turismo interativo com curadoria de roteiros personalizados e pontos de viagem.",
                url: "https://turistei.vercel.app",
                badge: "Guia Digital",
              }
            ].map((site, sIdx) => (
              <div
                key={sIdx}
                className="bg-brand-dark-950 rounded-lg border border-brand-dark-800 p-5 flex flex-col justify-between hover:border-brand-purple/40 hover:scale-[1.02] transition-all duration-300 group/site"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-mono uppercase tracking-widest bg-brand-dark-900 px-2 py-0.5 rounded-sm border border-brand-dark-800 text-slate-400 font-bold">
                      {site.badge}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="No ar" />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold font-heading text-white group-hover/site:text-brand-cyan transition-colors">
                      {site.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed min-h-[50px]">
                      {site.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-4 mt-4 border-t border-brand-dark-800">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-sm bg-brand-dark-900 hover:bg-brand-dark-800 border border-brand-dark-800 text-[9px] uppercase font-mono tracking-widest text-slate-300 transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>Visitar Site</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                  
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectProject) {
                        onSelectProject(`Projeto semelhante ao ${site.title}`);
                      } else {
                        const target = document.getElementById("contato");
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full py-2 rounded-sm bg-transparent hover:bg-brand-cyan/10 border border-brand-dark-800 hover:border-brand-cyan/20 text-[9px] uppercase font-mono tracking-widest text-slate-400 hover:text-brand-cyan transition-all duration-300 flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <span>Orçamento Semelhante</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Separator / Divider */}
        <div className="my-24 border-t border-brand-dark-800 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark-900 px-4">
            <Layers className="w-6 h-6 text-brand-purple opacity-50" />
          </div>
        </div>

        {/* Skills & Specialties */}
        <div className="max-w-5xl mx-auto space-y-12 mb-10">
          <div className="text-center space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold">
              SOBRE O DESENVOLVEDOR
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Especialidades & Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tech Stack */}
            <div className="bg-brand-dark-950 p-6 rounded-lg border border-brand-dark-800 space-y-6 flex flex-col hover:border-brand-cyan/40 hover: transition-all duration-300">
              <div className="flex items-center space-x-3 pb-4 border-b border-brand-dark-800">
                <Code2 className="w-5 h-5 text-brand-cyan" />
                <h3 className="font-heading tracking-tight font-bold text-lg text-white">Linguagens & Tech</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'HTML / CSS', 'Tailwind CSS', 'SQL', 'Low Code', '.NET Framework', 'Microsoft Azure'].map((tech) => (
                  <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-sm bg-brand-dark-900 border border-brand-dark-800 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-brand-dark-950 p-6 rounded-lg border border-brand-dark-800 space-y-6 flex flex-col hover:border-brand-purple/40 hover: transition-all duration-300">
              <div className="flex items-center space-x-3 pb-4 border-b border-brand-dark-800">
                <Briefcase className="w-5 h-5 text-brand-purple" />
                <h3 className="font-heading tracking-tight font-bold text-lg text-white">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['UX & UI Design', 'Agile Environment', 'Agile Methodologies', 'Project Planning', 'Project Management', 'DevOps', 'Problem Solving', 'Logic Skills', 'Mathematics'].map((skill) => (
                  <span key={skill} className="text-xs font-mono px-3 py-1.5 rounded-sm bg-brand-dark-900 border border-brand-dark-800 text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages & Education */}
            <div className="bg-brand-dark-950 p-6 rounded-lg border border-brand-dark-800 space-y-6 flex flex-col hover:border-brand-blue/40 hover: transition-all duration-300">
              <div className="flex items-center space-x-3 pb-4 border-b border-brand-dark-800">
                <Languages className="w-5 h-5 text-brand-blue" />
                <h3 className="font-heading tracking-tight font-bold text-lg text-white">Idiomas & Formação</h3>
              </div>
              <div className="space-y-4 flex-1">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Idiomas</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-300 font-mono tracking-tight"><span className="text-brand-cyan mr-1.5">✓</span>Português (Nativo)</span>
                    <span className="text-xs text-slate-300 font-mono tracking-tight"><span className="text-brand-cyan mr-1.5">✓</span>Inglês (Cambridge Certified)</span>
                  </div>
                </div>
                <div className="space-y-2 pt-4 mt-2 border-t border-brand-dark-800">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Educação (FIAP)</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] leading-tight text-slate-300 font-mono tracking-tight">
                      <span className="text-brand-purple mr-1.5">◆</span>Web Design (2025-2026)
                    </span>
                    <span className="text-[11px] leading-tight text-slate-300 font-mono tracking-tight">
                      <span className="text-brand-purple mr-1.5">◆</span>Análise e Desenv. de Sistemas (2023-2024)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Overlay for Project Details & Live Sandbox Interaction */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#030712]/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            >
              {/* Outer container */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-brand-dark-900 border border-brand-dark-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl mr-auto ml-auto"
              >
                
                {/* Modal Title header */}
                <div className="flex justify-between items-center p-6 border-b border-brand-dark-800">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[9px] font-mono bg-brand-dark-950 border border-brand-cyan/30 px-2.5 py-0.5 rounded-sm text-brand-cyan uppercase font-extrabold tracking-wider">
                        {selectedProject.category}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                        {selectedProject.client}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-tight tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-brand-dark-800 rounded-md text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Fecar modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal main content view scroll area */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
                  
                    <div className="space-y-8 animate-in fade-in duration-200">
                      
                      {/* STATS DESTAQUES GRID */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {selectedProject.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="bg-brand-dark-950 border border-brand-dark-800 p-4 rounded-lg flex flex-col justify-between">
                            <span className="text-[9px] font-mono uppercase text-zinc-500 font-bold tracking-wider">{stat.label}</span>
                            <span className={`text-2xl font-heading font-black mt-2 text-glow-cyan ${
                              selectedProject.color === 'cyan' ? 'text-brand-cyan' : selectedProject.color === 'purple' ? 'text-brand-cyan' : 'text-brand-cyan'
                            }`}>
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* DESCRIPTION BLOCKS */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-4 space-y-4">
                          <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-brand-cyan">O Desafio do Cliente</h4>
                          <p className="text-xs text-slate-350 leading-relaxed bg-brand-dark-950 p-4 rounded-md border border-brand-dark-800">
                            {selectedProject.challenge}
                          </p>
                        </div>
                        
                        <div className="md:col-span-4 space-y-4">
                          <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-brand-cyan">Estratégia Adotada</h4>
                          <p className="text-xs text-slate-350 leading-relaxed bg-brand-dark-950 p-4 rounded-md border border-brand-dark-800">
                            {selectedProject.strategy}
                          </p>
                        </div>

                        <div className="md:col-span-4 space-y-4">
                          <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-brand-cyan">Resultados Conquistados</h4>
                          <ul className="space-y-3 bg-brand-dark-950 p-4 rounded-md border border-brand-dark-800">
                            {selectedProject.resultsArray.map((res, rIdx) => (
                              <li key={rIdx} className="flex items-start text-xs text-slate-300">
                                <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0 mr-2 mt-0.5" />
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* General overview description */}
                      <div className="space-y-3">
                        <h4 className="font-heading font-bold text-base text-white">Sobre este projeto:</h4>
                        <p className="text-sm text-slate-350 leading-relaxed pb-4">
                          {selectedProject.description}
                        </p>
                      </div>

                    </div>

                </div>

                {/* Modal actions footer */}
                <div className="p-6 bg-brand-dark-950 border-t border-brand-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan text-glow-cyan animate-ping" />
                    <span className="text-xs text-slate-400 leading-none font-sans">Precisa de um site moderno como este?</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 rounded-sm border border-brand-dark-800 text-[10px] uppercase font-mono tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Voltar ao Portfólio
                    </button>
                    <button
                      onClick={() => {
                        const title = selectedProject.title;
                        setSelectedProject(null);
                        if (onSelectProject) {
                          onSelectProject(title);
                        } else {
                          const target = document.getElementById("contato");
                          if (target) target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="px-5 py-2.5 rounded-sm bg-brand-cyan text-brand-dark-950 font-heading font-black text-[10px] tracking-widest uppercase cursor-pointer shadow-lg hover:bg-brand-cyan/95 transition-colors"
                    >
                      Solicitar Orçamento de Projeto Semelhante
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
