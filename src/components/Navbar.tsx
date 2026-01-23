
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Quem somos', href: '/institucional' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Mentorias', href: '/mentorias' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Comunidade', href: '/comunidade' },
    { name: 'Galeria', href: '/galeria' },
  ];

  const externalLinks = [
    { name: 'E-commerce', href: 'https://mulheresv8.lojavirtualnuvem.com.br/password/', icon: ShoppingBag },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-primary backdrop-blur-sm shadow-lg fixed w-full z-50 border-b border-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/abec6e81-764b-405a-8047-9926aaef0f4e.png" 
                alt="Instituto Mulheres V8"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActivePath(item.href)
                    ? 'text-brand-yellow border-b-2 border-brand-yellow'
                    : 'text-white/90 hover:text-brand-yellow'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* External Links */}
            {externalLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-brand-yellow transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}

            <Button asChild className="bg-brand-yellow text-primary-900 hover:bg-yellow-400 ml-2 font-semibold">
              <Link to="/login">Login</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-brand-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="xl:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary border-t border-primary-700 max-h-[80vh] overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActivePath(item.href)
                    ? 'text-brand-yellow bg-primary-700'
                    : 'text-white/90 hover:text-brand-yellow hover:bg-primary-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t border-primary-700 my-2 pt-2">
              {externalLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-base font-medium text-white/90 hover:text-brand-yellow hover:bg-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>

            <Link
              to="/login"
              className="block px-3 py-2 text-base font-medium text-primary-900 bg-brand-yellow hover:bg-yellow-400 rounded-md mx-3 mt-4 text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
