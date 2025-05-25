
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-purple bg-clip-text text-transparent">
              Instituto Mulheres V8
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empoderando mulheres através da educação, tecnologia e desenvolvimento pessoal. 
              Construindo um futuro mais inclusivo e diverso.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/institutomulheresv8" className="text-gray-300 hover:text-brand-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com/institutomulheresv8" className="text-gray-300 hover:text-brand-primary transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-brand-primary transition-colors">Home</Link>
              <Link to="/projetos" className="block text-gray-300 hover:text-brand-primary transition-colors">Projetos</Link>
              <Link to="/blog" className="block text-gray-300 hover:text-brand-primary transition-colors">Blog</Link>
              <Link to="/agenda" className="block text-gray-300 hover:text-brand-primary transition-colors">Agenda</Link>
              <Link to="/clube" className="block text-gray-300 hover:text-brand-primary transition-colors">Clube</Link>
              <Link to="/quem-somos" className="block text-gray-300 hover:text-brand-primary transition-colors">Quem Somos</Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-gray-300" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-gray-300" />
                <span className="text-gray-300">contato@institutomulheresv8.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-gray-300" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Instituto Mulheres V8. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
