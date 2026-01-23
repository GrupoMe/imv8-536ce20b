import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Star, Calendar, MessageCircle, ArrowRight, Sparkles, CheckCircle, Shield, Bell, Handshake } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const Comunidade = () => {
  const paraQuemE = [
    "Atuam ou desejam atuar no setor automotivo",
    "São donas, gestoras ou líderes de negócios",
    "Buscam crescimento profissional com propósito",
    "Querem trocar experiências com outras mulheres",
    "Valorizam desenvolvimento técnico, estratégico e humano"
  ];

  const oQueAcontece = [
    { icon: Sparkles, text: "Conteúdos exclusivos e direcionados" },
    { icon: Bell, text: "Avisos antecipados sobre eventos, aulas e treinamentos" },
    { icon: MessageCircle, text: "Trocas reais sobre gestão, rotina, desafios e decisões" },
    { icon: Handshake, text: "Indicações, oportunidades e networking qualificado" },
    { icon: Shield, text: "Espaço seguro, respeitoso e sem julgamentos" },
    { icon: Users, text: "Presença e direcionamento da equipe Mulheres V8" }
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
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white py-20 px-4 overflow-hidden border-b border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Uma <span className="text-brand-yellow">Comunidade</span>
            <br />
            que <span className="text-brand-yellow">Acelera</span> Carreiras
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-400 max-w-3xl mx-auto animate-fade-in transition-all duration-300" style={{animationDelay: '0.2s'}}>
            Um espaço exclusivo no WhatsApp para mulheres que desejam crescer juntas, 
            trocar experiências reais e evoluir com direção no setor automotivo.
          </p>
          <Button size="lg" className="bg-brand-yellow text-black hover:bg-yellow-400 font-bold hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Fazer Parte da Comunidade
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Números da Comunidade */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossa Comunidade em Números
            </h2>
            <p className="text-xl text-brand-secondary">
              Juntas, somos mais fortes e chegamos mais longe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:border-brand-primary transition-all duration-500 hover:-translate-y-2 border-t-4 border-t-brand-primary animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-0">
                <div className="mb-4 flex justify-center">
                  <Users className="w-12 h-12 text-brand-yellow" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 hover:scale-110 transition-transform duration-300">
                  +<AnimatedCounter end={15} duration={2000} /> mil
                </div>
                <p className="text-gray-400">Mulheres Conectadas</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:border-brand-secondary transition-all duration-500 hover:-translate-y-2 border-t-4 border-t-brand-secondary animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-0">
                <div className="mb-4 flex justify-center">
                  <Calendar className="w-12 h-12 text-brand-yellow" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 hover:scale-110 transition-transform duration-300">
                  +<AnimatedCounter end={500} duration={2000} />
                </div>
                <p className="text-gray-400">Eventos Realizados</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:border-brand-yellow transition-all duration-500 hover:-translate-y-2 border-t-4 border-t-brand-yellow animate-fade-in" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-0">
                <div className="mb-4 flex justify-center">
                  <Target className="w-12 h-12 text-brand-yellow" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={18} duration={2000} />
                </div>
                <p className="text-gray-400">Estados do Brasil</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O que é a Comunidade */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                O que é a Comunidade Mulheres V8?
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                A Comunidade Mulheres V8 é um ambiente fechado e intencional, criado para mulheres que 
                querem mais do que conteúdo solto nas redes sociais.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                É onde o aprendizado continua, as conexões se fortalecem e as decisões deixam de ser solitárias.
              </p>
              <p className="text-lg text-gray-400">
                Aqui, mulheres que empreendem, lideram ou desejam evoluir profissionalmente compartilham 
                desafios reais, aprendizados práticos e oportunidades de crescimento.
              </p>
            </div>
            <div className="relative animate-fade-in transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop"
                alt="Mulheres em reunião"
                className="w-full rounded-xl hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-yellow text-black p-4 rounded-xl">
                <MessageCircle className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Para Quem é essa Comunidade?
            </h2>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              Mulheres que...
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {paraQuemE.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-zinc-800 rounded-xl animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0" />
                  <span className="text-lg text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que acontece dentro */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              O que Acontece Dentro da Comunidade?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oQueAcontece.map((item, index) => (
              <Card key={index} className="p-6 hover:border-brand-primary transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-zinc-800 rounded-xl hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">{item.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-brand-secondary">
              Veja como nossa comunidade está transformando carreiras
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:border-brand-primary transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-400 mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
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
      <section className="py-20 px-4 bg-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para Evoluir com Clareza, Apoio e Conexão?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Se você sente que é hora de evoluir com mais clareza, apoio e conexão, essa comunidade é para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-yellow text-black hover:bg-yellow-400 font-bold hover:scale-105 transition-all duration-300">
              Entrar na Comunidade WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/cursos">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zinc-900 hover:scale-105 transition-all duration-300">
                Conhecer Cursos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comunidade;