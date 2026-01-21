import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Play, Star, Users, MapPin, ArrowRight, Wrench, Brain, TrendingUp, Sparkles } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const Home = () => {
  const pilares = [
    {
      icon: Wrench,
      title: "Técnica",
      description: "Desenvolvimento de conhecimento técnico aplicado à realidade das oficinas e do mercado automotivo."
    },
    {
      icon: Brain,
      title: "Desenvolvimento Humano",
      description: "Desenvolvimento de habilidades comportamentais, inteligência emocional e autoconhecimento."
    },
    {
      icon: TrendingUp,
      title: "Gestão de Negócios",
      description: "Contabilidade, organização financeira, marketing estratégico e gestão empresarial."
    },
    {
      icon: Sparkles,
      title: "Espiritual",
      description: "Valores e propósito, equilíbrio, consciência e clareza nas tomadas de decisão."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Da formação à <span className="text-brand-yellow">liderança</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-100 max-w-4xl mx-auto animate-fade-in transition-all duration-300" style={{animationDelay: '0.2s'}}>
            Educação que forma mulheres para liderar e transformar o setor automotivo.
          </p>
          <p className="text-lg md:text-xl mb-8 text-pink-100 max-w-3xl mx-auto animate-fade-in transition-all duration-300" style={{animationDelay: '0.3s'}}>
            O Instituto Mulheres V8 criou uma comunidade exclusiva no WhatsApp para mulheres que movem o mercado 
            por meio da educação, conteúdos estratégicos e conexão entre as mulheres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in transition-all duration-300" style={{animationDelay: '0.4s'}}>
            <Link to="/comunidade">
              <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold hover:scale-105 transition-all duration-300">
                Fazer Parte da Comunidade
              </Button>
            </Link>
            <Link to="/agenda">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary hover:scale-105 transition-all duration-300">
                Conhecer Eventos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Números de Impacto */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nosso Impacto em Números
            </h2>
            <p className="text-xl text-gray-100">
              Juntas, estamos transformando carreiras e vidas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in hover:scale-110 transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <div className="mb-4">
                <Users className="w-12 h-12 mx-auto text-brand-yellow" />
              </div>
              <div className="text-4xl font-bold mb-2">
                +<AnimatedCounter end={15} duration={2000} /> mil
              </div>
              <p className="text-gray-100">Mulheres Impactadas</p>
            </div>
            <div className="text-center animate-fade-in hover:scale-110 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="mb-4">
                <Calendar className="w-12 h-12 mx-auto text-brand-yellow" />
              </div>
              <div className="text-4xl font-bold mb-2">
                +<AnimatedCounter end={500} duration={2000} />
              </div>
              <p className="text-gray-100">Eventos Educacionais Realizados</p>
            </div>
            <div className="text-center animate-fade-in hover:scale-110 transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <div className="mb-4">
                <MapPin className="w-12 h-12 mx-auto text-brand-yellow" />
              </div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={18} duration={2000} />
              </div>
              <p className="text-gray-100">Estados do Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pilares de Formação */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              4 Pilares de Formação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa metodologia integra quatro pilares fundamentais para o desenvolvimento completo da mulher no setor automotivo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in border-t-4 border-brand-primary" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <pilar.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{pilar.title}</h3>
                  <p className="text-gray-600">{pilar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Próximo Evento */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-brand-light relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Próximo Evento
            </h2>
            <p className="text-xl text-gray-600">
              Não perca nossa próxima oportunidade de crescimento
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-8 text-white">
                <Badge className="bg-brand-yellow text-brand-accent mb-4">
                  Destaque
                </Badge>
                <h3 className="text-2xl font-bold mb-4">
                  Workshop: Liderança Feminina no Século XXI
                </h3>
                <div className="flex items-center mb-4 text-brand-yellow">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>15 de Janeiro de 2025 • 19h30</span>
                </div>
                <p className="mb-6 text-gray-100">
                  Descubra estratégias práticas para desenvolver sua liderança e influenciar positivamente sua equipe e organização.
                </p>
                <Button className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold hover:scale-105 transition-all duration-300">
                  Garantir Minha Vaga
                </Button>
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=400&fit=crop"
                  alt="Workshop Liderança"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Vídeo de Boas-vindas da Eva */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Mensagem da Nossa Fundadora
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Conheça Eva Paiva e sua jornada inspiradora de transformação pessoal e profissional. 
                Descubra como o Instituto Mulheres V8 nasceu do desejo de empoderar e conectar mulheres.
              </p>
              <Button className="bg-brand-primary hover:bg-brand-dark text-white font-medium hover:scale-105 transition-all duration-300">
                <Play className="w-4 h-4 mr-2" />
                Assistir Vídeo Completo
              </Button>
            </div>
            <div className="relative group animate-fade-in transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <div className="bg-black rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop"
                  alt="Eva Paiva - Fundadora"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-2 border-white hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Eva */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <img 
                src="/lovable-uploads/f83eb134-f974-429e-bfd3-fce71697b5e7.png"
                alt="Eva Paiva"
                className="w-full rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-primary text-white p-4 rounded-lg">
                <Star className="w-8 h-8" />
              </div>
            </div>
            <div className="animate-fade-in transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Eva Paiva
              </h2>
              <h3 className="text-xl text-brand-secondary mb-4 font-semibold">
                Fundadora & CEO do Instituto Mulheres V8
              </h3>
              <p className="text-gray-600 mb-4">
                Eva Paiva é fundadora do Instituto Mulheres V8, palestrante e mentora especializada no 
                desenvolvimento de mulheres líderes e empreendedoras. Filha de mecânico, construiu sua 
                trajetória profissional conectando a vivência prática do setor automotivo à formação 
                acadêmica e à visão estratégica de negócios.
              </p>
              <p className="text-gray-600 mb-6">
                Formada em Contabilidade, com especializações em Finanças, Controladoria, Neurociência 
                e Planejamento Estratégico. Autora do livro "99 Cartas" e idealizadora do podcast MulherPod.
              </p>
              <Link to="/institucional">
                <Button className="bg-brand-secondary hover:bg-purple-700 text-white font-medium hover:scale-105 transition-all duration-300">
                  Conhecer Trajetória
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marcas Parceiras */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Marcas que Aceleram com a Gente
            </h2>
            <p className="text-xl text-gray-600">
              Parceiros que acreditam no potencial feminino no setor automotivo
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
                Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Histórias de Transformação
            </h2>
            <p className="text-xl text-gray-600">
              Veja como nossa comunidade está mudando vidas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "O Instituto Mulheres V8 transformou minha perspectiva sobre liderança. 
                  Hoje ocupo um cargo executivo que sempre sonhei."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                    alt="Testimonial"
                    className="w-12 h-12 rounded-full mr-4 hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-primary">Marina Silva</h4>
                    <p className="text-sm text-gray-500">Diretora de Marketing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "A rede de networking que construí aqui foi fundamental para o crescimento 
                  da minha startup. Gratidão eterna!"
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" 
                    alt="Testimonial"
                    className="w-12 h-12 rounded-full mr-4 hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-primary">Ana Costa</h4>
                    <p className="text-sm text-gray-500">CEO & Fundadora</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Os workshops e mentorias me deram a confiança que precisava para 
                  empreender. Hoje minha empresa fatura 7 dígitos!"
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                    alt="Testimonial"
                    className="w-12 h-12 rounded-full mr-4 hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-primary">Carla Santos</h4>
                    <p className="text-sm text-gray-500">Empreendedora</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-accent to-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para Acelerar sua Carreira?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Faça parte de uma comunidade que acredita no seu potencial e quer ver você brilhar.
          </p>
          <Link to="/comunidade">
            <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
              Começar Minha Jornada Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
