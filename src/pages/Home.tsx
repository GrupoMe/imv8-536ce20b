import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, Users, MapPin, ArrowRight, Wrench, Brain, TrendingUp, Sparkles } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroEventBg from "@/assets/hero-event-bg.jpg";
import mteThomson from "@/assets/partners/mte-thomson.jpg";
import delphi from "@/assets/partners/delphi.png";
import fortbras from "@/assets/partners/fortbras.png";
import kolbenschmidt from "@/assets/partners/kolbenschmidt.jpg";
import sabo from "@/assets/partners/sabo.jpg";
import mahovi from "@/assets/partners/mahovi.jpg";

const parceiros = [
  { name: "MTE-Thomson", logo: mteThomson },
  { name: "Delphi", logo: delphi },
  { name: "Fortbras", logo: fortbras },
  { name: "Kolbenschmidt", logo: kolbenschmidt },
  { name: "Sabo", logo: sabo },
  { name: "Mahovi", logo: mahovi },
];

const Home = () => {
  const pilares = [
    {
      icon: Wrench,
      title: "Técnica",
      description:
        "Desenvolvimento de conhecimento técnico aplicado à realidade das oficinas e do mercado automotivo, em parceria com a indústria, promovendo capacitação prática, atualização constante e domínio de sistemas, processos e tecnologias do setor.",
    },
    {
      icon: Brain,
      title: "Desenvolvimento Humano",
      description:
        "Desenvolvimento de habilidades comportamentais, inteligência emocional e fortalecimento da identidade profissional, preparando mulheres para assumir posições com confiança, clareza e presença.",
    },
    {
      icon: TrendingUp,
      title: "Gestão de Negócios",
      description:
        "Abrange tudo que é fundamental para acelerar seu negócio, desde contabilidade, organização financeira, marketing estratégico e liderança de equipes, capacitação mulheres para administrar, estrutura de negócios com visão, controle e tomada de decisão consciente.",
    },
    {
      icon: Sparkles,
      title: "Espiritual",
      description:
        "Fundamentada em valores e propósito, conduzimos mulheres a compreenderem sua jornada profissional e pessoal, promovendo equilíbrio, consciência e clareza nas tomadas de decisão.",
    },
  ];

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section com Imagem de Fundo */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-between text-white py-16 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${heroEventBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content - Centralizado */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in drop-shadow-lg">
            Da formação à <span className="text-brand-yellow">liderança</span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-4 text-white max-w-3xl mx-auto animate-fade-in drop-shadow-md"
            style={{ animationDelay: "0.2s" }}
          >
            Educação que forma mulheres para liderar e transformar o setor automotivo.
          </p>
          <p
            className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in drop-shadow-md"
            style={{ animationDelay: "0.3s" }}
          >
            O Instituto Mulheres V8 criou uma comunidade exclusiva no WhatsApp para mulheres que movem o mercado por
            meio da educação, conteúdos estratégicos e conexão entre as mulheres.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/comunidade">
              <Button
                size="lg"
                className="bg-brand-yellow text-black hover:bg-yellow-400 font-bold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Fazer Parte da Comunidade
              </Button>
            </Link>
            <Link to="/agenda">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-900 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Conhecer Eventos
              </Button>
            </Link>
          </div>
        </div>

        {/* Números de Impacto - Posicionados na parte inferior */}
        <div className="relative z-10 max-w-4xl mx-auto w-full mt-8">
          <div className="grid grid-cols-3 gap-3">
            <div
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 text-center animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.5s" }}
            >
              <Users className="w-6 h-6 mx-auto text-brand-yellow mb-2" />
              <div className="text-xl md:text-2xl font-bold">
                +<AnimatedCounter end={15} duration={2000} /> mil
              </div>
              <p className="text-white/80 text-xs">Mulheres Impactadas</p>
            </div>
            <div
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 text-center animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.6s" }}
            >
              <Calendar className="w-6 h-6 mx-auto text-brand-yellow mb-2" />
              <div className="text-xl md:text-2xl font-bold">
                +<AnimatedCounter end={500} duration={2000} />
              </div>
              <p className="text-white/80 text-xs">Eventos Realizados</p>
            </div>
            <div
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 text-center animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.7s" }}
            >
              <MapPin className="w-6 h-6 mx-auto text-brand-yellow mb-2" />
              <div className="text-xl md:text-2xl font-bold">
                <AnimatedCounter end={18} duration={2000} />
              </div>
              <p className="text-white/80 text-xs">Estados do Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pilares de Formação */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Pilares de Formação</h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Uma formação completa, construída sobre pilares que sustentam mulheres no setor automotivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar, index) => (
              <Card
                key={index}
                className="hover:border-brand-primary transition-all duration-500 hover:-translate-y-2 animate-fade-in border-t-4 border-t-brand-primary bg-primary-50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <pilar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">{pilar.title}</h3>
                  <p className="text-primary-700">{pilar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Próximo Evento */}
      <section className="py-16 px-4 bg-primary-100 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Próximo Evento</h2>
            <p className="text-xl text-primary-700">Não perca nossa próxima oportunidade de crescimento</p>
          </div>

          <Card
            className="max-w-4xl mx-auto overflow-hidden hover:border-brand-primary transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-white"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-brand-primary p-8 text-white">
                <Badge className="bg-brand-yellow text-black mb-4">Destaque</Badge>
                <h3 className="text-2xl font-bold mb-4">Workshop: Liderança Feminina no Século XXI</h3>
                <div className="flex items-center mb-4 text-brand-yellow">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>15 de Janeiro de 2025 • 19h30</span>
                </div>
                <p className="mb-6 text-white/90">
                  Descubra estratégias práticas para desenvolver sua liderança e influenciar positivamente sua equipe e
                  organização.
                </p>
                <Button className="bg-brand-yellow text-black hover:bg-yellow-400 font-bold hover:scale-105 transition-all duration-300">
                  Garantir Minha Vaga
                </Button>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=400&fit=crop"
                  alt="Workshop Liderança"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>
            </div>
          </Card>
        </div>
      </section>


      {/* Marcas Parceiras */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Marcas que Aceleram com a Gente</h2>
            <p className="text-xl text-primary-700">Parceiros que acreditam no potencial feminino no setor automotivo</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {parceiros.map((parceiro, index) => (
              <div
                key={index}
                className="w-40 h-24 bg-primary-50 rounded-xl flex items-center justify-center p-4 hover:scale-105 transition-all duration-300 border border-primary-200"
              >
                <img
                  src={parceiro.logo}
                  alt={parceiro.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Histórias de Transformação</h2>
            <p className="text-xl text-white/80">Veja como nossa comunidade está mudando vidas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="hover:border-brand-yellow transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-white"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                  ))}
                </div>
                <p className="text-primary-700 mb-4">
                  "O Instituto Mulheres V8 transformou minha perspectiva sobre liderança. Hoje ocupo um cargo executivo
                  que sempre sonhei."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
                    alt="Testimonial"
                    className="w-12 h-12 rounded-full mr-4 hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-900">Marina Silva</h4>
                    <p className="text-sm text-primary-600">Diretora de Marketing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:border-brand-yellow transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-white"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                  ))}
                </div>
                <p className="text-primary-700 mb-4">
                  "A rede de networking que construí aqui foi fundamental para o crescimento da minha startup. Gratidão
                  eterna!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
                    alt="Testimonial"
                    className="w-12 h-12 rounded-full mr-4 hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-900">Ana Costa</h4>
                    <p className="text-sm text-primary-600">CEO & Fundadora</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:border-brand-yellow transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-white"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                  ))}
                </div>
                <p className="text-primary-700 mb-4">
                  "Os workshops e mentorias me deram a confiança que precisava para empreender. Hoje minha empresa
                  fatura 7 dígitos!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                    alt="Testimonial"
                    className="w-12 h-12 rounded-full mr-4 hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-900">Carla Santos</h4>
                    <p className="text-sm text-primary-600">Empresária</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-brand-yellow">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Pronta para Acelerar sua Carreira?</h2>
          <p className="text-xl text-black/80 mb-8">
            Junte-se a milhares de mulheres que estão transformando o setor automotivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/comunidade">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-dark text-white font-bold hover:scale-105 transition-all duration-300"
              >
                Entrar na Comunidade
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/cursos">
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
              >
                Conhecer Cursos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
