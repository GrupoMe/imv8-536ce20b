
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Image, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Admin = () => {
  const { isAuthenticated, isAdmin, user, logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate('/login');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  const adminSections = [
    {
      title: 'Gerenciar Agenda',
      description: 'Criar, editar e remover eventos da agenda',
      icon: Calendar,
      link: '/admin/agenda',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Gerenciar Galeria',
      description: 'Adicionar, editar e remover fotos de eventos',
      icon: Image,
      link: '/admin/galeria',
      color: 'bg-pink-50 border-pink-200'
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-brand-primary">
              Painel Administrativo
            </h1>
            <p className="text-gray-600 mt-2">
              Bem-vinda, {user?.name}! Gerencie o conteúdo do Instituto Mulheres V8.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/">Voltar ao Site</Link>
            </Button>
            <Button variant="outline" onClick={logout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Eventos da Agenda</p>
                  <p className="text-2xl font-bold text-brand-primary">8</p>
                </div>
                <Calendar className="w-8 h-8 text-brand-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Eventos na Galeria</p>
                  <p className="text-2xl font-bold text-brand-primary">6</p>
                </div>
                <Image className="w-8 h-8 text-brand-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminSections.map((section, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow cursor-pointer ${section.color}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <section.icon className="w-8 h-8 text-brand-primary" />
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <Button asChild className="w-full">
                  <Link to={section.link}>
                    Acessar
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/admin/agenda">Gerenciar Agenda</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/admin/galeria">Gerenciar Galeria</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
