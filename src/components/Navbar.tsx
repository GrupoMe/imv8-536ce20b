
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projetos', href: '/projetos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Clube', href: '/clube' },
    { name: 'Quem Somos', href: '/quem-somos' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-brand-primary">SpecializMe</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActivePath(item.href)
                    ? 'text-brand-primary border-b-2 border-brand-primary'
                    : 'text-gray-700 hover:text-brand-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-brand-primary hover:bg-brand-dark">
              <Link to="/admin">Admin</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActivePath(item.href)
                    ? 'text-brand-primary bg-brand-light'
                    : 'text-gray-700 hover:text-brand-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="block px-3 py-2 text-base font-medium text-white bg-brand-primary hover:bg-brand-dark rounded-md mx-3 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
