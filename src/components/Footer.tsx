
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Instagram, Clock, ExternalLink, ShoppingBag, Tv } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  
  const getFooterText = () => {
    const footerTexts = [
      "© 2025 Instituto Mulheres V8. Feito com ❤️ para acelerar talentos femininos. Todos os direitos reservados.",
      "© 2025 Instituto Mulheres V8. Todos os direitos reservados. Feito com ♥ e paixão por motores.",
      "© 2025 Instituto Mulheres V8. Todos os direitos reservados. Feito com ♥ por mulheres que aceleram."
    ];
    
    const pathHash = location.pathname.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    return footerTexts[Math.abs(pathHash) % footerTexts.length];
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Instituto Mulheres V8
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empoderando mulheres através da educação, tecnologia e desenvolvimento pessoal. 
              Construindo um futuro mais inclusivo e diverso.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://linkedin.com/company/institutomulheresv8" className="text-gray-300 hover:text-brand-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com/institutomulheresv8" className="text-gray-300 hover:text-brand-primary transition-colors">
                <Instagram size={24} />
              </a>
            </div>
            
            {/* External Links */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#ecommerce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-brand-primary transition-colors text-sm"
              >
                <ShoppingBag size={16} />
                E-commerce
                <ExternalLink size={12} />
              </a>
              <a 
                href="#streaming" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-brand-primary transition-colors text-sm"
              >
                <Tv size={16} />
                Streaming
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-brand-primary transition-colors">Home</Link>
              <Link to="/institucional" className="block text-gray-300 hover:text-brand-primary transition-colors">Institucional</Link>
              <Link to="/beneficios" className="block text-gray-300 hover:text-brand-primary transition-colors">Benefícios</Link>
              <Link to="/formacoes" className="block text-gray-300 hover:text-brand-primary transition-colors">Formações</Link>
              <Link to="/agenda" className="block text-gray-300 hover:text-brand-primary transition-colors">Agenda</Link>
              <Link to="/comunidade" className="block text-gray-300 hover:text-brand-primary transition-colors">Comunidade</Link>
              <Link to="/galeria" className="block text-gray-300 hover:text-brand-primary transition-colors">Galeria</Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-gray-300" />
                <span className="text-gray-300">(51) 98157-8944</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-gray-300" />
                <span className="text-gray-300">contato@institutomulheresv8.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-gray-300" />
                <span className="text-gray-300">Av. Ipiranga 7454, sala 415<br />Jardim Botânico, Porto Alegre - RS</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-3 text-gray-300" />
                <span className="text-gray-300">10h às 18h (Seg-Sex)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {getFooterText()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
