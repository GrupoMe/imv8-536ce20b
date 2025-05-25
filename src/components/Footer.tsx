
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SpecializMe</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Consultoria especializada em apoiar empreendedores, empresários e gestores a superarem desafios desde a ideação até a escala dos seus negócios.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/specializme" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com/specializme" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/projetos" className="block text-gray-300 hover:text-white transition-colors">Projetos</Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors">Blog</Link>
              <Link to="/agenda" className="block text-gray-300 hover:text-white transition-colors">Agenda</Link>
              <Link to="/clube" className="block text-gray-300 hover:text-white transition-colors">Clube</Link>
              <Link to="/quem-somos" className="block text-gray-300 hover:text-white transition-colors">Quem Somos</Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-gray-300" />
                <span className="text-gray-300">51 99171-0753</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-gray-300" />
                <span className="text-gray-300">contato@specializme.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-gray-300" />
                <span className="text-gray-300">Porto Alegre, RS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 SpecializMe. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
