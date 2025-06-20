
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Heart, MessageCircle, Calendar, TrendingUp, Award } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const Comunidade = () => {
  const communityStats = [
    { number: 2500, label: 'Mulheres na Comunidade', suffix: '+' },
    { number: 150, label: 'Eventos Realizados', suffix: '+' },
    { number: 85, label: 'Empresas Parceiras', suffix: '+' },
    { number: 95, label: 'Taxa de Satisfação', suffix: '%' }
  ];

  const communityGroups = [
    {
      title: "Liderança Feminina",
      description: "Grupo focado em desenvolver habilidades de liderança e gestão para mulheres em posições executivas.",
      members: 450,
      icon: <Award className="w-6 h-6 text-brand-primary" />,
      category: "Liderança"
    },
    {
      title: "Tech Women",
      description: "Comunidade de mulheres na tecnologia, compartilhando conhecimentos e oportunidades.",
      members: 680,
      icon: <TrendingUp className="w-6 h-6 text-brand-primary" />,
      category: "Tecnologia"
    },
    {
      title: "Empreendedoras V8", 
      description: "Rede de apoio para mulheres empreendedoras, com mentorias e networking.",
      members: 320,
      icon: <Users className="w-6 h-6 text-brand-primary" />,
      category: "Empreendedorismo"
    },
    {
      title: "Mentoria & Carreira",
      description: "Programa de mentoria para desenvolvimento profissional e transição de carreira.",
      members: 280,
      icon: <Heart className="w-6 h-6 text-brand-primary" />,
      category: "Mentoria"
    }
  ];

  const benefits = [
    {
      icon: <MessageCircle className="w-8 h-8 text-brand-yellow" />,
      title: "Networking Exclusivo",
      description: "Conecte-se com profissionais de diferentes áreas e construa uma rede sólida de contatos."
    },
    {
      icon: <Calendar className="w-8 h-8 text-brand-yellow" />,
      title: "Eventos Mensais",
      description: "Participe de workshops, palestras e encontros presenciais e online."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-yellow" />,
      title: "Grupos de Interesse",
      description: "Junte-se a grupos específicos baseados em seus interesses e objetivos profissionais."
    },
    {
      icon: <Award className="w-8 h-8 text-brand-yellow" />,
      title: "Mentorias Personalizadas",
      description: "Receba orientação de profissionais experientes para acelerar seu crescimento."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Nossa <span className="text-brand-yellow">Comunidade</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Uma rede poderosa de mulheres que se apoiam, crescem juntas e transformam o mercado de trabalho.
          </p>
          <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
            Fazer Parte da Comunidade
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Groups */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Grupos da Comunidade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encontre seu espaço e conecte-se com mulheres que compartilham seus interesses e objetivos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityGroups.map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-brand-primary">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-brand-secondary text-white">{group.category}</Badge>
                    <div className="flex items-center text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm">{group.members} membros</span>
                    </div>
                  </div>
                  <CardTitle className="flex items-center gap-3 text-brand-primary">
                    {group.icon}
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <Button variant="outline" className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                    Participar do Grupo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Benefícios da Comunidade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra tudo o que você ganha ao fazer parte da nossa comunidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-brand-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para Fazer Parte?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Junte-se a milhares de mulheres que já estão transformando suas carreiras através da nossa comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
              Entrar na Comunidade
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
              Saber Mais
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comunidade;
