import { useState, useEffect } from "react";
import { Menu, X, Rocket, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection
      const sections = ["inicio", "diferencial", "servicos", "portfolio", "sobre", "contato"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  const menuItems = [
    { label: "Início", id: "inicio" },
    { label: "Diferencial", id: "diferencial" },
    { label: "Serviços", id: "servicos" },
    { label: "Portfólio", id: "portfolio" },
    { label: "Sobre Mim", id: "sobre" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark-950/80 backdrop-blur-md border-b border-brand-dark-800 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name Branding */}
          <div
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => handleNavLinkClick("inicio")}
          >
            <div className="w-10 h-10 rounded-lg bg-brand-cyan flex items-center justify-center  transition-transform duration-300 group-hover:scale-105">
              <span className="font-heading font-black text-brand-dark-950 text-xl">GH</span>
            </div>
            <div>
              <p className="font-heading font-bold text-white text-base tracking-tight leading-none group-hover:text-brand-cyan transition-colors">
                Guilherme Hirayama
              </p>
              <p className="text-[10px] text-zinc-500 font-mono tracking-widest mt-0.5 uppercase">
                Web Design
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavLinkClick(item.id)}
                className={`font-sans text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-cyan relative py-1 cursor-pointer ${
                  activeSection === item.id ? "text-brand-cyan" : "text-slate-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-cyan  rounded-sm" />
                )}
              </button>
            ))}
          </nav>

          {/* Call to action button */}
          <div className="hidden xl:flex items-center">
            <button
              onClick={() => handleNavLinkClick("contato")}
              className="px-5 py-2.5 rounded-lg bg-brand-cyan hover:bg-brand-cyan/90 font-heading font-extrabold text-xs text-brand-dark-950 uppercase tracking-wider  transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <span className="flex items-center space-x-1.5">
                <span>Solicitar Orçamento</span>
                <Rocket className="w-3.5 h-3.5 text-brand-dark-950" />
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-1 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-brand-dark-950 border-b border-brand-dark-800"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavLinkClick(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-colors ${
                    activeSection === item.id
                      ? "bg-brand-dark-900 text-brand-cyan border-l-2 border-brand-cyan font-bold"
                      : "text-slate-400 hover:bg-brand-dark-900/50 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 px-2">
                <button
                  onClick={() => handleNavLinkClick("contato")}
                  className="w-full py-3 rounded-sm bg-brand-cyan text-brand-dark-950 flex items-center justify-center space-x-2 font-heading font-black text-xs uppercase tracking-widest  cursor-pointer"
                >
                  <span>Solicitar Orçamento</span>
                  <Send className="w-3.5 h-3.5 text-brand-dark-950" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
