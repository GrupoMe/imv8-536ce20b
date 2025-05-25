
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Calendar, MessageCircle, BookOpen, Star, Crown, Zap } from 'lucide-react';

const Clube = () => {
  const plans = [
    {
      name: "Essencial",
      price: "R$ 97",
      period: "/mês",
      description: "Para empreendedores iniciantes que querem acelerar seu crescimento",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      color: "border-blue-200",
      features: [
        "Acesso ao fórum exclusivo",
        "1 webinar mensal",
        "Biblioteca de conteúdos",
        "Templates e ferramentas básicas",
        "Newsletter semanal",
        "Suporte por email"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "R$ 197",
      period: "/mês",
      description: "Para empresários que buscam crescimento acelerado e networking",
      icon: <Star className="w-8 h-8 text-orange-500" />,
      color: "border-orange-200",
      features: [
        "Tudo do plano Essencial",
        "2 webinars mensais",
        "Acesso a gravações de todos os eventos",
        "Sessões de Q&A mensais",
        "Networking exclusivo",
        "Templates avançados",
        "Consultoria mensal de 30min",
        "Prioridade no suporte"
      ],
      highlighted: true
    },
    {
      name: "Elite",
      price: "R$ 397",
      period: "/mês",
      description: "Para líderes empresariais que querem resultados extraordinários",
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      color: "border-purple-200",
      features: [
        "Tudo do plano Professional",
        "Acesso ilimitado a todos os eventos",
        "Consultoria mensal de 1h",
        "Revisão estratégica trimestral",
        "Acesso direto aos fundadores",
        "Convites para eventos VIP",
        "Mastermind exclusivo",
        "Suporte prioritário via WhatsApp"
      ],
      highlighted: false
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-12 h-12 text-brand-primary" />,
      title: "Networking de Alto Nível",
      description: "Conecte-se com empreendedores, empresários e especialistas de diversos setores."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-brand-primary" />,
      title: "Conteúdo Exclusivo",
      description: "Acesse materiais, templates e ferramentas desenvolvidas pela nossa equipe."
    },
    {
      icon: <Calendar className="w-12 h-12 text-brand-primary" />,
      title: "Eventos Mensais",
      description: "Webinars, workshops e masterclasses com especialistas renomados."
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-brand-primary" />,
      title: "Mentoria Especializada",
      description: "Receba orientação direta dos nossos especialistas em sessões exclusivas."
    }
  ];

  const testimonials = [
    {
      name: "Marina Silva",
      company: "Tech Solutions",
      text: "O Clube SpecializMe transformou a forma como vejo meu negócio. O networking e o conteúdo são excepcionais.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      company: "Inova Consultoria",
      text: "As sessões de mentoria me ajudaram a estruturar processos que aumentaram minha receita em 40%.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Digital Marketing Pro",
      text: "Encontrei no clube não apenas conhecimento, mas parceiros de negócio e amizades duradouras.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Clube <span className="text-blue-300">SpecializMe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-8">
            Uma comunidade exclusiva para empreendedores e empresários que querem acelerar o crescimento dos seus negócios através de networking, mentoria e conteúdo de alta qualidade.
          </p>
          <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
            Quero Fazer Parte
          </Button>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Por que Fazer Parte do Clube?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse recursos exclusivos e conecte-se com uma rede de empreendedores de sucesso.
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

      {/* Planos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encontre o plano ideal para acelerar o crescimento do seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.color} ${plan.highlighted ? 'border-2 border-orange-400 shadow-lg' : ''}`}>
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-400 text-white text-center py-2 text-sm font-semibold">
                    MAIS POPULAR
                  </div>
                )}
                <CardHeader className={plan.highlighted ? 'pt-12' : 'pt-6'}>
                  <div className="text-center mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl text-center text-brand-primary">
                    {plan.name}
                  </CardTitle>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-brand-primary">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-center text-gray-600 mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.highlighted ? 'bg-orange-500 hover:bg-orange-600' : 'bg-brand-primary hover:bg-brand-dark'}`}
                    size="lg"
                  >
                    Escolher {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              O que Nossos Membros Dizem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic text-center">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <h4 className="font-semibold text-brand-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-brand-primary mb-3">
                  Posso cancelar minha assinatura a qualquer momento?
                </h3>
                <p className="text-gray-600">
                  Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento. Você manterá acesso até o final do período pago.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-brand-primary mb-3">
                  Existe período de experiência?
                </h3>
                <p className="text-gray-600">
                  Oferecemos 7 dias de garantia. Se não ficar satisfeito, devolvemos 100% do valor pago.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-brand-primary mb-3">
                  Como funcionam as consultorias?
                </h3>
                <p className="text-gray-600">
                  As consultorias são agendadas através da plataforma e realizadas via videoconferência com nossos especialistas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Acelerar seu Crescimento?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Junte-se a centenas de empreendedores que já estão transformando seus negócios no Clube SpecializMe.
          </p>
          <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 mr-4">
            Começar Agora
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
            Falar com Consultor
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Clube;
