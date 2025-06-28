
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Heart, Star, Calendar, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const Comunidade = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-brand-primary" />,
      title: "Networking Estratégico",
      description: "Conecte-se com mulheres inspiradoras de diversas áreas e níveis profissionais."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-brand-primary" />,
      title: "Mentorias Personalizadas",
      description: "Receba orientação de líderes experientes para acelerar seu crescimento."
    },
    {
      icon: <Calendar className="w-8 h-8 text-brand-primary" />,
      title: "Eventos Exclusivos",
      description: "Participe de workshops, palestras e encontros focados no seu desenvolvimento."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-primary" />,
      title: "Conteúdo Premium",
      description: "Acesse materiais exclusivos, cursos e recursos para turbinar sua carreira."
    }
  ];

  const testimonials = [
    {
      name: "Júlia Rodrigues",
      role: "Head de Tecnologia",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
      text: "A comunidade me deu suporte e conexões que foram fundamentais para minha promoção a Head."
    },
    {
      name: "Patrícia Lima",
      role: "Consultora Estratégica",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      text: "Aqui encontrei não apenas colegas, mas amigas que torcem pelo meu sucesso."
    },
    {
      name: "Fernanda Castro",
      role: "Diretora Comercial",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
      text: "Os insights e experiências compartilhadas aqui transformaram minha visão de liderança."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-secondary via-brand-primary to-brand-accent text-white py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Uma <span className="text-brand-yellow animate-pulse">Comunidade</span>
            <br />
            que <span className="text-brand-yellow">Acelera</span> Carreiras
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Conecte-se com mulheres que pensam grande, compartilhe experiências e cresça junto com quem entende sua jornada.
          </p>
          <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold hover:scale-105 transition-transform duration-200 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Fazer Parte da Comunidade
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Números da Comunidade */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Nossa Comunidade em Números
            </h2>
            <p className="text-xl text-gray-600">
              Juntas, somos mais fortes e chegamos mais longe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-brand-primary animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-0">
                <div className="mb-4 flex justify-center">
                  <Users className="w-12 h-12 text-brand-yellow animate-pulse" />
                </div>
                <div className="text-4xl font-bold text-brand-primary mb-2 hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={2500} duration={2000} />+
                </div>
                <p className="text-gray-600">Mulheres Conectadas</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-brand-secondary animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-0">
                <div className="mb-4 flex justify-center">
                  <Target className="w-12 h-12 text-brand-yellow animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>
                <div className="text-4xl font-bold text-brand-primary mb-2 hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={89} duration={2000} />%
                </div>
                <p className="text-gray-600">Alcançaram Objetivos</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-brand-accent animate-fade-in" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-0">
                <div className="mb-4 flex justify-center">
                  <Calendar className="w-12 h-12 text-brand-yellow animate-pulse" style={{animationDelay: '1s'}} />
                </div>
                <div className="text-4xl font-bold text-brand-primary mb-2 hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={150} duration={2000} />+
                </div>
                <p className="text-gray-600">Eventos Realizados</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-brand-yellow animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-0">
                <div className="mb-4 flex justify-center">
                  <Heart className="w-12 h-12 text-brand-yellow animate-pulse" style={{animationDelay: '1.5s'}} />
                </div>
                <div className="text-4xl font-bold text-brand-primary mb-2 hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={98} duration={2000} />%
                </div>
                <p className="text-gray-600">Satisfação</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre a Comunidade */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Mais que uma Rede de Contatos
              </h2>
              <p className="text-lg text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
                Nossa comunidade é um ecossistema de crescimento onde mulheres ambiciosas se conectam, 
                colaboram e se inspiram mutuamente para alcançar objetivos extraordinários.
              </p>
              <p className="text-lg text-gray-600 mb-8 hover:text-gray-800 transition-colors duration-300">
                Aqui, você encontra não apenas oportunidades profissionais, mas também um ambiente 
                de apoio genuíno, onde cada conquista é celebrada e cada desafio é enfrentado em conjunto.
              </p>
              <Button className="bg-brand-secondary hover:bg-purple-700 text-white font-medium hover:scale-105 transition-transform duration-200">
                Conhecer Mais Sobre Nós
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop"
                alt="Mulheres em reunião"
                className="w-full rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-yellow text-brand-accent p-4 rounded-lg hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              O que Você Ganha Fazendo Parte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada benefício foi pensado para acelerar seu crescimento profissional e pessoal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-brand-light rounded-lg hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-brand-primary hover:text-brand-dark transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Veja como nossa comunidade está transformando carreiras
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1 + index * 0.5}s`}} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h4 className="font-semibold text-brand-primary">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para Acelerar sua Carreira?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Junte-se a milhares de mulheres que estão transformando suas vidas profissionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold hover:scale-105 transition-transform duration-200">
              Fazer Parte Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary hover:scale-105 transition-all duration-200">
              Conhecer Benefícios
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comunidade;
