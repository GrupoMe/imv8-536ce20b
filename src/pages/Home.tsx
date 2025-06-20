
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, TrendingUp, CheckCircle, Star, Heart, Play, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedCounter from '@/components/AnimatedCounter';

const Home = () => {
  const impactNumbers = [
    { number: 2500, label: 'Mulheres Impactadas', suffix: '+' },
    { number: 150, label: 'Eventos Realizados', suffix: '+' },
    { number: 85, label: 'Empresas Parceiras', suffix: '+' },
    { number: 95, label: 'Taxa de Satisfação', suffix: '%' }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "O Instituto Mulheres V8 transformou minha carreira. Aprendi não apenas habilidades técnicas, mas também desenvolvi minha confiança como líder.",
      rating: 5,
      company: "CEO Tech Solutions"
    },
    {
      name: "Ana Costa",
      text: "Participar dos programas foi uma experiência incrível. O suporte e a rede de contatos que construí são inestimáveis.",
      rating: 5,
      company: "Diretora Comercial"
    },
    {
      name: "Juliana Mendes",
      text: "A comunidade V8 me deu forças para empreender. Hoje minha empresa fatura 6 dígitos por mês.",
      rating: 5,
      company: "Fundadora StartupX"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Frase de Impacto */}
      <section className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-20 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ACELERE<br />
                SUA<br />
                CARREIRA<br />
                <span className="text-brand-yellow">AGORA.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-lg text-gray-100">
                Mentorias, oportunidades e uma comunidade unida para mulheres que respiram o universo automotivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
                  Quero participar
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary" asChild>
                  <Link to="/clube">Junte-se ao Clube</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/f83eb134-f974-429e-bfd3-fce71697b5e7.png" 
                alt="Eva - Fundadora do Instituto Mulheres V8"
                className="max-w-md w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Próximo Evento em Destaque */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-yellow to-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-4">
                Próximo Evento
              </h2>
              <h3 className="text-2xl font-semibold text-brand-primary mb-4">
                Workshop: Liderança Feminina no Setor Automotivo
              </h3>
              <p className="text-lg text-brand-accent mb-6">
                Uma jornada transformadora para mulheres que querem acelerar suas carreiras e assumir posições de liderança no universo V8.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-brand-accent">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-semibold">15 de Fevereiro, 2025</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-secondary font-bold" asChild>
                <Link to="/agenda">Ver Agenda Completa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo de Boas-vindas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-8">
            Mensagem da Fundadora
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-primary/90 to-brand-secondary/90">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Vídeo de Boas-vindas</h3>
                  <p className="text-gray-200">Conheça a história por trás do Instituto Mulheres V8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texto de Apresentação */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Instituto Mulheres V8
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nascemos da necessidade de criar um espaço seguro e inspirador onde mulheres 
              possam desenvolver suas habilidades, expandir suas redes de contato e acelerar 
              suas carreiras no universo automotivo. Acreditamos no poder transformador da educação 
              e no potencial ilimitado das mulheres quando têm acesso às ferramentas e oportunidades certas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-brand-primary">
              <CardContent className="p-0">
                <Heart className="w-8 h-8 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-brand-primary">
                  Empoderamento Feminino
                </h3>
                <p className="text-gray-600">
                  Programas e workshops focados no desenvolvimento pessoal e profissional das mulheres no setor automotivo.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-brand-secondary">
              <CardContent className="p-0">
                <Target className="w-8 h-8 text-brand-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-brand-primary">
                  Liderança & Gestão
                </h3>
                <p className="text-gray-600">
                  Capacitação em liderança, gestão de equipes e desenvolvimento de habilidades executivas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-brand-accent">
              <CardContent className="p-0">
                <TrendingUp className="w-8 h-8 text-brand-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-brand-primary">
                  Networking & Oportunidades
                </h3>
                <p className="text-gray-600">
                  Conexões estratégicas e oportunidades de negócios no universo automotivo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Números Dinâmicos */}
      <section className="py-20 px-4 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nosso Impacto em Números
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Resultados que comprovam nossa dedicação em transformar vidas e carreiras
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactNumbers.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <p className="text-gray-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio da Eva */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/f83eb134-f974-429e-bfd3-fce71697b5e7.png" 
                alt="Eva Santos - Fundadora"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Eva Santos
              </h2>
              <h3 className="text-xl font-semibold text-brand-secondary mb-4">
                Fundadora & CEO Instituto Mulheres V8
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Com mais de 15 anos de experiência no setor automotivo, Eva Santos é uma referência 
                em liderança feminina. Formada em Engenharia Mecânica e MBA em Gestão Estratégica, 
                ela dedicou sua carreira a quebrar barreiras e criar oportunidades para mulheres 
                no universo tradicionalmente masculino dos motores.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Sua visão é clara: um mundo onde mulheres ocupem posições de destaque no setor 
                automotivo, liderando inovações e transformando a indústria com sua perspectiva única.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-brand-primary mr-3" />
                  <span className="text-gray-700">15+ anos no setor automotivo</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-brand-primary mr-3" />
                  <span className="text-gray-700">2500+ mulheres mentoreadas</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-brand-primary mr-3" />
                  <span className="text-gray-700">Palestrante internacional</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-brand-primary mr-3" />
                  <span className="text-gray-700">Consultora estratégica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Conheça algumas das mulheres que transformaram suas carreiras conosco
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 text-center border-t-4 border-brand-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <h4 className="font-semibold text-brand-primary mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.company}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para Acelerar sua Carreira?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Junte-se a milhares de mulheres que já transformaram suas vidas através dos nossos programas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
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
