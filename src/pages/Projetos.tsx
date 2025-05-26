
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users } from 'lucide-react';

const Projetos = () => {
  const projects = [
    {
      title: "Instituto Mulheres V8 - Plataforma Digital",
      description: "Desenvolvimento de uma plataforma digital completa, com foco em presença institucional, automação inteligente e relacionamento com participantes, integrando tecnologias e inteligência artificial.",
      technologies: ["React", "Node.js", "WhatsApp API", "IA", "AWS"],
      category: "Plataforma Digital",
      status: "Concluído",
      duration: "40 dias",
      team: "2 pessoas",
      results: [
        "Site institucional responsivo",
        "Blog com painel de gerenciamento",
        "Agenda de eventos automatizada",
        "Chatbot integrado WhatsApp e Instagram",
        "Sistema de inscrições online"
      ]
    },
    {
      title: "Programa de Mentoria Feminina",
      description: "Desenvolvimento de programa estruturado de mentoria para mulheres em tecnologia, incluindo metodologias, processos e plataforma de acompanhamento.",
      technologies: ["Metodologias Ágeis", "KPIs", "CRM", "BI"],
      category: "Educação e Mentoria",
      status: "Em Andamento",
      duration: "60 dias",
      team: "3 pessoas",
      results: [
        "Redução de 30% no tempo de onboarding",
        "Aumento de 25% na retenção de participantes",
        "Implementação de sistema de métricas",
        "Treinamento de mentoras qualificadas"
      ]
    },
    {
      title: "Comunidade Mulheres V8",
      description: "Criação de plataforma de networking e desenvolvimento para mulheres em tecnologia e empreendedorismo, com foco em crescimento profissional.",
      technologies: ["Community Building", "Networking", "Events", "Analytics"],
      category: "Comunidade",
      status: "Planejamento",
      duration: "90 dias",
      team: "4 pessoas",
      results: [
        "Rede de networking estruturada",
        "Eventos mensais automatizados",
        "Sistema de acompanhamento de carreiras",
        "Parcerias estratégicas com empresas"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído':
        return 'bg-green-100 text-green-800';
      case 'Em Andamento':
        return 'bg-blue-100 text-blue-800';
      case 'Planejamento':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="v8-gradient text-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Nossos Projetos
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados alcançados para nossa comunidade.
          </p>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-brand-light p-4 md:p-6">
                  <div className="flex flex-col gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl text-brand-primary mb-2">
                        {project.title}
                      </CardTitle>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        {project.team}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h4 className="font-semibold text-brand-primary mb-2 md:mb-3">Descrição do Projeto</h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          {project.description}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-brand-primary mb-2 md:mb-3">Categoria</h4>
                        <Badge variant="outline">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-brand-primary mb-2 md:mb-3">Tecnologias</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs md:text-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-brand-primary mb-2 md:mb-3">Resultados Alcançados</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm md:text-base">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Quer Fazer Parte da Nossa Comunidade?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-purple-100">
            Vamos conversar sobre como você pode acelerar sua carreira conosco.
          </p>
          <button className="bg-white text-brand-primary px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
            Quero Participar
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
