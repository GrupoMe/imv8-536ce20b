
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, TrendingUp, CheckCircle, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-brand-primary" />,
      title: "Empoderamento Feminino",
      description: "Programas e workshops focados no desenvolvimento pessoal e profissional das mulheres."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-primary" />,
      title: "Liderança & Gestão",
      description: "Capacitação em liderança, gestão de equipes e desenvolvimento de habilidades executivas."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-primary" />,
      title: "Tecnologia & Inovação",
      description: "Cursos e mentorias em tecnologia, programação e transformação digital."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "O Instituto Mulheres V8 transformou minha carreira. Aprendi não apenas habilidades técnicas, mas também desenvolvi minha confiança como líder.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Participar dos programas foi uma experiência incrível. O suporte e a rede de contatos que construí são inestimáveis.",
      rating: 5
    }
  ];

  const team = [
    {
      name: "Fundadora & CEO",
      role: "Liderança Executiva",
      description: "Mais de 15 anos de experiência em gestão e desenvolvimento de pessoas.",
    },
    {
      name: "Diretora de Tecnologia",
      role: "Inovação & Tech",
      description: "Especialista em transformação digital e desenvolvimento de soluções tecnológicas.",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="v8-gradient text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empoderando Mulheres<br />
              <span className="text-pink-200">para o Futuro</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-purple-100">
              O Instituto Mulheres V8 é dedicado ao desenvolvimento pessoal e profissional de mulheres, 
              oferecendo educação, mentoria e oportunidades de crescimento em um ambiente inclusivo e diverso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100" asChild>
                <Link to="/quem-somos">
                  Conheça Nossa Missão
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary" asChild>
                <Link to="/clube">Junte-se ao Clube</Link>
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
              Nossos Programas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos programas únicos que combinam desenvolvimento pessoal, 
              capacitação profissional e networking para mulheres em todas as fases da carreira
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-brand-primary">
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

      {/* Sobre o Instituto */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Instituto Mulheres V8
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nascemos da necessidade de criar um espaço seguro e inspirador onde mulheres 
                possam desenvolver suas habilidades, expandir suas redes de contato e acelerar 
                suas carreiras em um ambiente colaborativo e inclusivo.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Acreditamos no poder transformador da educação e no potencial ilimitado das mulheres 
                quando têm acesso às ferramentas e oportunidades certas.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span className="text-gray-700">+500 mulheres impactadas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span className="text-gray-700">Programas personalizados</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span className="text-gray-700">Rede nacional de mentoras</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="p-6 border-l-4 border-brand-secondary">
                  <CardContent className="p-0">
                    <h4 className="text-lg font-semibold text-brand-primary mb-2">
                      {member.name}
                    </h4>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.description}
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
              Histórias de Sucesso
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 text-center border-t-4 border-brand-primary">
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
      <section className="py-20 px-4 v8-gradient text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para Acelerar sua Carreira?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Junte-se a centenas de mulheres que já transformaram suas vidas através dos nossos programas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              Inscreva-se Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary" asChild>
              <Link to="/agenda">Ver Próximos Eventos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
