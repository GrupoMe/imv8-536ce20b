
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Target, Handshake, Star } from 'lucide-react';

const Parceiros = () => {
  const partnerTypes = [
    {
      icon: <Building className="w-8 h-8 text-brand-yellow" />,
      title: "Empresas Corporativas",
      description: "Grandes empresas que apoiam nossos programas de desenvolvimento profissional e diversidade.",
      count: "45+"
    },
    {
      icon: <Users className="w-8 h-8 text-brand-yellow" />,
      title: "Startups Inovadoras",
      description: "Startups que oferecem oportunidades e mentorias para mulheres em tecnologia.",
      count: "28+"
    },
    {
      icon: <Award className="w-8 h-8 text-brand-yellow" />,
      title: "Instituições de Ensino",
      description: "Universidades e escolas técnicas parceiras em programas educacionais.",
      count: "12+"
    }
  ];

  const featuredPartners = [
    {
      name: "TechCorp Brasil",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop",
      category: "Tecnologia",
      description: "Parceria estratégica em programas de capacitação em TI e transformação digital.",
      benefits: ["Vagas exclusivas", "Mentorias", "Workshops técnicos"]
    },
    {
      name: "Universidade Inovação",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=100&fit=crop",
      category: "Educação",
      description: "Colaboração em cursos de extensão e programas de certificação profissional.",
      benefits: ["Cursos gratuitos", "Certificações", "Pesquisas conjuntas"]
    },
    {
      name: "StartupHub",
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=100&fit=crop",
      category: "Empreendedorismo",
      description: "Apoio ao ecossistema empreendedor feminino com incubação e aceleração.",
      benefits: ["Incubação", "Investimento", "Networking"]
    },
    {
      name: "ConsultoriaPro",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
      category: "Consultoria",
      description: "Parceria em projetos de consultoria organizacional e desenvolvimento de liderança.",
      benefits: ["Projetos conjuntos", "Consultorias", "Treinamentos"]
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Target className="w-6 h-6 text-brand-primary" />,
      title: "Alcance Estratégico",
      description: "Acesso a uma rede qualificada de profissionais femininas."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-primary" />,
      title: "Diversidade & Inclusão",
      description: "Fortalecimento de políticas de diversidade e inclusão."
    },
    {
      icon: <Award className="w-6 h-6 text-brand-primary" />,
      title: "Responsabilidade Social",
      description: "Contribuição para o desenvolvimento social e profissional."
    },
    {
      icon: <Handshake className="w-6 h-6 text-brand-primary" />,
      title: "Networking Qualificado",
      description: "Conexões estratégicas com líderes e profissionais."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-accent via-brand-primary to-brand-secondary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Nossos <span className="text-brand-yellow">Parceiros</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Juntos, construímos um ecossistema mais diverso e inclusivo para o crescimento profissional feminino.
          </p>
          <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
            Seja um Parceiro
          </Button>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Tipos de Parceria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com diferentes tipos de organizações para maximizar o impacto dos nossos programas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-primary">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {type.icon}
                  </div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">{type.count}</div>
                  <h3 className="text-xl font-semibold mb-3 text-brand-primary">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Parceiros em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça algumas das organizações que fazem parte da nossa rede.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPartners.map((partner, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-24 object-contain bg-gray-100 rounded"
                    />
                    <Badge className="bg-brand-secondary text-white">{partner.category}</Badge>
                  </div>
                  <CardTitle className="text-brand-primary">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-brand-primary text-sm">Benefícios da Parceria:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <Badge key={benefitIndex} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Benefícios da Parceria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como sua organização pode se beneficiar ao fazer parte da nossa rede.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-brand-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
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
            Vamos Construir Juntos?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Torne-se um parceiro estratégico e ajude a transformar o mercado de trabalho para mulheres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
              Quero Ser Parceiro
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
              Conhecer Benefícios
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parceiros;
