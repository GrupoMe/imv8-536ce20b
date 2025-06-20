
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, MessageCircle, Calendar, Award, TrendingUp, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedCounter from '@/components/AnimatedCounter';

const Comunidade = () => {
  const communityNumbers = [
    { number: 2500, label: 'Mulheres Ativas', suffix: '+' },
    { number: 150, label: 'Eventos por Ano', suffix: '+' },
    { number: 50, label: 'Mentoras Especialistas', suffix: '+' },
    { number: 98, label: 'Satisfação da Comunidade', suffix: '%' }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-brand-primary" />,
      title: "Rede de Apoio",
      description: "Uma comunidade acolhedora onde mulheres se apoiam mutuamente em suas jornadas profissionais."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-brand-primary" />,
      title: "Mentorias Exclusivas",
      description: "Acesso a mentoras experientes do setor automotivo para orientação personalizada."
    },
    {
      icon: <Calendar className="w-8 h-8 text-brand-primary" />,
      title: "Eventos Regulares",
      description: "Workshops, palestras e networking events desenvolvidos especialmente para nossa comunidade."
    },
    {
      icon: <Award className="w-8 h-8 text-brand-primary" />,
      title: "Oportunidades Exclusivas",
      description: "Primeiro acesso a vagas, projetos e oportunidades de negócios no setor."
    }
  ];

  const testimonials = [
    {
      name: "Carla Rodrigues",
      text: "A comunidade V8 mudou minha perspectiva profissional. Encontrei aqui não apenas conhecimento, mas verdadeiras amigas que me apoiam em todos os desafios.",
      rating: 5,
      company: "Gerente de Vendas - Concessionária Premium",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b814?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fernanda Lima",
      text: "Através da comunidade consegui minha primeira posição de liderança. O suporte e os conselhos que recebi foram fundamentais para meu crescimento.",
      rating: 5,
      company: "Supervisora de Produção - Montadora",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Juliana Santos",
      text: "Participar da comunidade V8 foi o melhor investimento que fiz na minha carreira. Hoje sou CEO da minha própria empresa automotiva!",
      rating: 5,
      company: "CEO - JM Auto Solutions",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const features = [
    "Grupo exclusivo no WhatsApp",
    "Acesso ao portal de membros",
    "Descontos em cursos e eventos",
    "Mentoria em grupo mensal",
    "Biblioteca de recursos",
    "Job board exclusivo"
  ];

  return (
    <div className="min-h-screen">
      {/* Header - Frase de Impacto */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            UMA COMUNIDADE<br />
            QUE <span className="text-brand-yellow">ACELERA</span><br />
            CARREIRAS
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-8">
            Mais de 2.500 mulheres conectadas, compartilhando experiências, oportunidades 
            e construindo o futuro do setor automotivo juntas.
          </p>
          <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
            Quero Fazer Parte
          </Button>
        </div>
      </section>

      {/* Números Dinâmicos da Comunidade */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Nossa Comunidade em Números
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma rede em constante crescimento de mulheres determinadas a transformar o setor automotivo
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityNumbers.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Comunidade */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Mais que uma Comunidade,<br />uma Família
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nossa comunidade foi criada para ser um espaço seguro onde mulheres do setor automotivo 
                podem compartilhar experiências, desafios e conquistas. Aqui, cada vitória é celebrada 
                coletivamente e cada obstáculo é superado com apoio mútuo.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Desde mecânicas até CEOs, vendedoras até engenheiras, nossa diversidade é nossa força. 
                Juntas, estamos redefinindo o que significa ser mulher no universo automotivo.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-primary mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop" 
                alt="Mulheres trabalhando"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop" 
                alt="Networking feminino"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Por que Fazer Parte?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios exclusivos para membros da nossa comunidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-brand-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Histórias de Transformação
            </h2>
            <p className="text-xl text-gray-600">
              Conheça algumas das mulheres que transformaram suas carreiras através da nossa comunidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-brand-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.text}"
                  </p>
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
            Pronta para Acelerar Junto com a Gente?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Junte-se a mais de 2.500 mulheres que já fazem parte da maior comunidade 
            feminina do setor automotivo no Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
              Entrar na Comunidade
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary" asChild>
              <Link to="/clube">Conhecer o Clube V8</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comunidade;
