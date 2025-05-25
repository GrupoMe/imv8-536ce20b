
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, TrendingUp, Award, Linkedin } from 'lucide-react';

const QuemSomos = () => {
  const founders = [
    {
      name: "Natália Ferrarini",
      role: "Co-fundadora & Especialista em RH",
      description: "Formada em Psicologia, atua com RH e gestão há mais de 8 anos. Especialista em desenvolvimento de pessoas, cultura organizacional e processos de recrutamento estratégico.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b814?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      expertise: ["Gestão de Pessoas", "Cultura Organizacional", "Recrutamento", "Desenvolvimento Humano"],
      achievements: [
        "Especialização em Psicologia Organizacional",
        "Certificação em Coaching Executivo", 
        "100+ empresas atendidas",
        "Palestrante em eventos de RH"
      ]
    },
    {
      name: "Rodrigo Oliveira",
      role: "Co-fundador & Especialista em TI",
      description: "Formado em Gestão de TI, atua com tecnologia e gestão há mais de 16 anos. Expert em transformação digital, arquitetura de sistemas e estratégia tecnológica empresarial.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      expertise: ["Transformação Digital", "Arquitetura de Sistemas", "Cloud Computing", "Gestão de TI"],
      achievements: [
        "MBA em Gestão de Projetos",
        "Certificações AWS e Azure",
        "200+ projetos entregues",
        "Speaker em conferências tech"
      ]
    }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-brand-primary" />,
      title: "Humanização",
      description: "Colocamos as pessoas no centro de tudo. Acreditamos que o sucesso empresarial vem do desenvolvimento humano e da criação de ambientes de trabalho saudáveis."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-primary" />,
      title: "Inovação",
      description: "Buscamos constantemente novas formas de resolver problemas complexos, utilizando tecnologias avançadas e metodologias modernas."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-primary" />,
      title: "Resultados",
      description: "Nosso compromisso é gerar resultados tangíveis e sustentáveis para nossos clientes, sempre focando no crescimento e na competitividade."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-primary" />,
      title: "Transparência",
      description: "Mantemos comunicação clara e honesta em todos os projetos, com relatórios regulares e metodologia colaborativa."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Fundação da SpecializMe",
      description: "Natália e Rodrigo unem suas expertises para criar uma consultoria inovadora."
    },
    {
      year: "2021",
      title: "Primeiros Grandes Clientes",
      description: "Início dos projetos com startups e PMEs, focando em soluções integradas."
    },
    {
      year: "2022",
      title: "Expansão dos Serviços",
      description: "Desenvolvimento de metodologias próprias e ampliação da equipe."
    },
    {
      year: "2023",
      title: "Reconhecimento no Mercado",
      description: "Consolidação como referência em consultoria empresarial no Sul do Brasil."
    },
    {
      year: "2024",
      title: "Transformação Digital",
      description: "Lançamento de plataformas digitais e serviços de consultoria online."
    },
    {
      year: "2025",
      title: "Expansão Nacional",
      description: "Início da expansão para todo território nacional com novos parceiros."
    }
  ];

  const stats = [
    { number: "20+", label: "Anos de Experiência Combinada" },
    { number: "150+", label: "Empresas Atendidas" },
    { number: "500+", label: "Projetos Entregues" },
    { number: "95%", label: "Taxa de Satisfação" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quem Somos
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8">
                Somos especialistas apaixonados por transformar negócios através da união de pessoas e tecnologia.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-100">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Award className="w-8 h-8 text-blue-300 mb-2" />
                  <h3 className="font-semibold">Excelência</h3>
                  <p className="text-sm text-gray-100">Comprometidos com a qualidade em cada projeto</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Users className="w-8 h-8 text-blue-300 mb-2" />
                  <h3 className="font-semibold">Colaboração</h3>
                  <p className="text-sm text-gray-100">Trabalhamos lado a lado com nossos clientes</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <TrendingUp className="w-8 h-8 text-blue-300 mb-2" />
                  <h3 className="font-semibold">Crescimento</h3>
                  <p className="text-sm text-gray-100">Focamos no crescimento sustentável dos negócios</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Target className="w-8 h-8 text-blue-300 mb-2" />
                  <h3 className="font-semibold">Estratégia</h3>
                  <p className="text-sm text-gray-100">Soluções estratégicas para desafios complexos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Nossa História
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma jornada de mais de 20 anos combinados de experiência, unindo pessoas e tecnologia para transformar negócios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-brand-primary mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fundadores */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Nossos Fundadores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as mentes por trás da SpecializMe e suas trajetórias de sucesso.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-8">
                  <div className="text-center mb-6">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-2xl font-bold text-brand-primary mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      {founder.role}
                    </p>
                    <a
                      href={founder.linkedin}
                      className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 mb-6">
                      {founder.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-brand-primary mb-3">Áreas de Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {founder.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-brand-light text-brand-primary text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-brand-primary mb-3">Principais Conquistas</h4>
                      <ul className="space-y-2">
                        {founder.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa forma de trabalhar e nos relacionar com clientes e parceiros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-brand-primary">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos Transformar seu Negócio Juntos?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Entre em contato conosco e descubra como nossa experiência pode acelerar o crescimento da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              Agendar Consultoria
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
              Conhecer Nossos Serviços
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
