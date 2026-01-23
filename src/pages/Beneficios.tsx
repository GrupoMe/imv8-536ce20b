
import React from 'react';
import { Check, Star, Crown, Zap, Gift, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Beneficios = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Acesso a Conteúdos Exclusivos",
      description: "Materiais educativos, vídeos e artigos criados por especialistas do setor."
    },
    {
      icon: Users,
      title: "Networking Premium",
      description: "Conexão com uma rede de profissionais e líderes do mercado automotivo."
    },
    {
      icon: Gift,
      title: "Descontos em Eventos",
      description: "Valores especiais em todos os workshops, palestras e masterclasses."
    },
    {
      icon: Award,
      title: "Certificações",
      description: "Certificados de participação em todos os programas e formações."
    },
    {
      icon: Zap,
      title: "Mentoria Prioritária",
      description: "Acesso prioritário a sessões de mentoria com profissionais experientes."
    },
    {
      icon: Star,
      title: "Eventos VIP",
      description: "Convites para eventos exclusivos com líderes e executivas do setor."
    }
  ];

  const plans = [
    {
      name: "Essencial",
      price: "R$ 49",
      period: "/mês",
      description: "Ideal para quem está começando",
      features: [
        "Acesso à comunidade online",
        "Newsletter semanal exclusiva",
        "10% de desconto em eventos",
        "Acesso a conteúdos básicos",
        "Certificado de membro"
      ],
      highlighted: false,
      checkoutLink: "#checkout-beneficios-essencial"
    },
    {
      name: "Profissional",
      price: "R$ 99",
      period: "/mês",
      description: "Para quem busca crescimento acelerado",
      features: [
        "Tudo do plano Essencial",
        "Acesso a todos os conteúdos",
        "25% de desconto em eventos",
        "1 sessão de mentoria/mês",
        "Acesso a grupos de estudo",
        "Networking prioritário"
      ],
      highlighted: true,
      checkoutLink: "#checkout-beneficios-profissional"
    },
    {
      name: "Premium",
      price: "R$ 199",
      period: "/mês",
      description: "Experiência completa e exclusiva",
      features: [
        "Tudo do plano Profissional",
        "50% de desconto em eventos",
        "4 sessões de mentoria/mês",
        "Acesso VIP a eventos",
        "Mentoria personalizada",
        "Networking com executivas",
        "Suporte prioritário"
      ],
      highlighted: false,
      checkoutLink: "#checkout-beneficios-premium"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <Badge className="bg-white/20 text-white mb-4">Programa de Benefícios</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Acelere sua Carreira com <br />Benefícios Exclusivos
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            Faça parte do nosso programa e tenha acesso a uma série de vantagens 
            pensadas para impulsionar seu desenvolvimento profissional.
          </p>
        </div>
      </section>

      {/* O que é o Programa */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                O que é o Programa de Benefícios?
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                O Programa de Benefícios do Instituto Mulheres V8 é uma iniciativa exclusiva 
                que oferece às nossas associadas acesso a uma série de vantagens e recursos 
                para acelerar suas carreiras.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Com diferentes níveis de participação, você pode escolher o plano que melhor 
                se adapta às suas necessidades e objetivos profissionais.
              </p>
              <p className="text-gray-600 text-lg">
                Seja você uma profissional em início de carreira ou uma executiva experiente, 
                temos benefícios pensados especialmente para você.
              </p>
            </div>
            <div className="relative">
              <div className="bg-brand-light rounded-2xl p-8">
                <Crown className="w-16 h-16 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Por que ser membro?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    Crescimento profissional acelerado
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    Rede de contatos qualificada
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    Conteúdo exclusivo e atualizado
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    Suporte e orientação contínuos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Seus Benefícios
            </h2>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
              Conheça tudo o que você terá acesso como membro do nosso programa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-none bg-white">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Escolha seu Plano
            </h2>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
              Selecione o plano que melhor atende às suas necessidades e comece hoje mesmo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlighted ? 'border-2 border-brand-primary shadow-xl scale-105' : 'border'}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-primary text-white px-4 py-1">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-primary">{plan.name}</CardTitle>
                  <p className="text-gray-500">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className={`w-full ${plan.highlighted ? 'bg-brand-primary hover:bg-brand-dark' : ''}`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    <a href={plan.checkoutLink} target="_blank" rel="noopener noreferrer">
                      Adquirir Plano <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ou CTA */}
      <section className="py-16 px-4 bg-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Entre em contato conosco e tire todas as suas dúvidas sobre o programa de benefícios.
          </p>
          <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
            Falar Conosco
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Beneficios;
