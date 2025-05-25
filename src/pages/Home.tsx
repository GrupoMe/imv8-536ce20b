
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-brand-primary" />,
      title: "Gestão de Pessoas",
      description: "Consultoria especializada em RH e desenvolvimento de equipes para maximizar o potencial humano."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-primary" />,
      title: "Estratégia Empresarial",
      description: "Planejamento estratégico e consultoria em gestão para acelerar o crescimento do seu negócio."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-primary" />,
      title: "Tecnologia & Inovação",
      description: "Soluções tecnológicas e transformação digital para modernizar processos e aumentar eficiência."
    }
  ];

  const testimonials = [
    {
      name: "Instituto Mulheres V8",
      text: "A SpecializMe transformou nossa presença digital com uma plataforma completa que integra tecnologia e inteligência artificial.",
      rating: 5
    }
  ];

  const founders = [
    {
      name: "Natália Ferrarini",
      role: "Especialista em RH e Gestão",
      description: "Formada em Psicologia. Atua com RH e gestão há + 8 anos.",
      linkedin: "#"
    },
    {
      name: "Rodrigo Oliveira",
      role: "Especialista em TI e Gestão",
      description: "Formado em Gestão de TI. Atua com tecnologia e gestão há + 16 anos.",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transformando o futuro<br />
              <span className="text-blue-300">do seu negócio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-100">
              Consultoria especializada em apoiar empreendedores, empresários e gestores a superarem desafios desde a ideação até a escala dos seus negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100" asChild>
                <Link to="/quem-somos">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary" asChild>
                <Link to="/projetos">Ver Projetos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções integradas que impulsionam o crescimento e a competitividade das empresas no mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-brand-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a SpecializMe */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                A SpecializMe
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Somamos mais de 20 anos de experiência apoiando empreendedores, empresários e gestores de startups e PMEs a solucionarem desafios nas áreas de Gestão, Recursos Humanos (RH) e Tecnologia da Informação (TI).
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Acreditamos que a união das pessoas certas com a utilização de tecnologias avançadas são a base para o desenvolvimento das empresas.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">+20 anos de experiência</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Metodologia ágil</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Soluções personalizadas</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {founders.map((founder, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <h4 className="text-lg font-semibold text-brand-primary mb-2">
                      {founder.name}
                    </h4>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      {founder.role}
                    </p>
                    <p className="text-gray-600">
                      {founder.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Quem Confia em Nós
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 text-center">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <h4 className="font-semibold text-brand-primary">
                    {testimonial.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              Entre em Contato
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary" asChild>
              <Link to="/projetos">Ver Nossos Projetos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
