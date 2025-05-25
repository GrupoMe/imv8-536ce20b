
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Users } from 'lucide-react';

const Projetos = () => {
  const projects = [
    {
      title: "Instituto Mulheres V8",
      description: "Desenvolvimento de uma plataforma digital completa, com foco em presença institucional, automação inteligente e relacionamento com clientes, integrando tecnologias e inteligência artificial.",
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
      title: "Consultoria Estratégica PME",
      description: "Reestruturação organizacional e implementação de processos de gestão para pequena e média empresa do setor de serviços.",
      technologies: ["Metodologias Ágeis", "KPIs", "CRM", "BI"],
      category: "Consultoria em Gestão",
      status: "Em Andamento",
      duration: "60 dias",
      team: "3 pessoas",
      results: [
        "Redução de 30% no tempo de processos",
        "Aumento de 25% na produtividade",
        "Implementação de sistema de métricas",
        "Treinamento de equipes"
      ]
    },
    {
      title: "Transformação Digital Startup",
      description: "Implementação de stack tecnológico moderno e automação de processos para startup em crescimento.",
      technologies: ["Cloud Computing", "Microserviços", "DevOps", "Analytics"],
      category: "Tecnologia",
      status: "Planejamento",
      duration: "90 dias",
      team: "4 pessoas",
      results: [
        "Arquitetura cloud escalável",
        "Automação de deploy",
        "Monitoramento em tempo real",
        "Redução de custos operacionais"
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
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Projetos
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados alcançados para nossos clientes.
          </p>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-brand-light">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-brand-primary mb-2">
                        {project.title}
                      </CardTitle>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
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
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-brand-primary mb-3">Descrição do Projeto</h4>
                      <p className="text-gray-600 mb-6">
                        {project.description}
                      </p>
                      
                      <h4 className="font-semibold text-brand-primary mb-3">Categoria</h4>
                      <Badge variant="outline" className="mb-6">
                        {project.category}
                      </Badge>
                      
                      <h4 className="font-semibold text-brand-primary mb-3">Tecnologias</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-brand-primary mb-3">Resultados Alcançados</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{result}</span>
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
      <section className="py-16 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Tem um Projeto em Mente?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Vamos conversar sobre como podemos ajudar sua empresa a alcançar seus objetivos.
          </p>
          <button className="bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Solicitar Orçamento
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
