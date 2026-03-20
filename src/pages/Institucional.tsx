import React from "react";
import {
  Users,
  Target,
  Heart,
  Lightbulb,
  Wrench,
  TrendingUp,
  Sparkles,
  Brain,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Institucional = () => {
  const whatWeDo = [
    {
      icon: Wrench,
      title: "Técnica",
      description: "Desenvolvemos competências práticas, métodos e conhecimentos aplicáveis ao dia a dia profissional de mulheres em áreas técnicas e/ou atividades que exigem o conhecimento para melhor performance.",
    },
    {
      icon: TrendingUp,
      title: "Negócios",
      description: "Trabalhamos estratégia, gestão, processos e resultados, ajudando mulheres a organizarem seus negócios e carreiras com sustentabilidade, autonomia e crescimento consciente.",
    },
    {
      icon: Brain,
      title: "Desenvolvimento Humano",
      description: "Atuamos no fortalecimento da identidade, posicionamento, comunicação e maturidade emocional, essenciais para sustentar escolhas, relações e responsabilidades.",
    },
    {
      icon: Sparkles,
      title: "Espiritualidade",
      description: "Conectamos propósito e consciência à prática. A espiritualidade aqui é vivida de forma aplicada, como fonte de clareza, equilíbrio e direção nas decisões profissionais e pessoais.",
    },
  ];

  const values = [
    {
      icon: Heart,
      name: "Autenticidade",
      description: "Honramos a identidade e a história de cada mulher, promovendo um posicionamento verdadeiro, coerente e alinhado ao seu propósito.",
    },
    {
      icon: Target,
      name: "Lealdade",
      description: "Agimos com ética, verdade e compromisso absoluto com nossa missão, relações e entregas.",
    },
    {
      icon: Lightbulb,
      name: "Proatividade",
      description: "Estimulamos a autoliderança, a iniciativa e a criação de soluções que geram impacto real e sustentável.",
    },
    {
      icon: TrendingUp,
      name: "Crescimento",
      description: "Cultivamos a evolução contínua por meio do aprendizado, da consciência e da expansão pessoal e profissional.",
    },
  ];

  const pilares = [
    { name: "Técnica", color: "bg-primary" },
    { name: "Negócios", color: "bg-brand-yellow" },
    { name: "Desenvolvimento Humano", color: "bg-brand-secondary" },
    { name: "Espiritual", color: "bg-primary" },
  ];

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section - Quem Somos */}
      <section className="relative bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Quem Somos</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-8">
            O Instituto Mulheres V8 é um ecossistema de desenvolvimento feminino criado para capacitar, fortalecer e transformar mulheres no setor automotivo e na vida. Atuamos a partir de quatro pilares fundamentais — educação técnica, gestão de negócios, desenvolvimento humano e espiritualidade — integrados de forma estratégica para conduzir mulheres a uma atuação profissional sólida, consciente e com propósito.
          </p>

          {/* 4 Pilares em destaque vertical 
          <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
            {pilares.map((pilar, index) => (
              <div
                key={index}
                className={`${pilar.color} text-white font-bold text-lg px-8 py-3 rounded-xl w-full text-center shadow-lg`}
              >
                {pilar.name}
              </div>
            ))}
          </div>*/}
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Nossa História</h2>
              <p className="text-primary-700 text-lg mb-4">
                O Instituto Mulheres V8 nasceu há quatro anos a partir da visão de Eva Paiva, filha de mecânico, que, ao vivenciar o setor automotivo desde cedo, passou a questionar a ausência e a realidade das mulheres nesse mercado: onde estavam, como se sentiam e de que forma se capacitavam para crescer profissionalmente. A partir dessa inquietação, foi criado um grupo de WhatsApp com 14 mulheres, dando início a um movimento de escuta, troca e fortalecimento feminino no sul do país, inicialmente conhecido como Gaúchas Car.
              </p>
              <p className="text-primary-700 text-lg">
                Com o crescimento orgânico da iniciativa e o reconhecimento das indústrias e empresas do setor automotivo, o movimento ganhou dimensão nacional, evoluindo para o Instituto Mulheres V8. Hoje, o MV8 é um ecossistema estruturado de desenvolvimento feminino que integra educação técnica, gestão de negócios, desenvolvimento humano e espiritualidade, mantendo sua essência de origem enquanto atua de forma estratégica para ampliar a representatividade, a capacitação e o protagonismo das mulheres em toda a cadeia automotiva.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://i.ibb.co/fVQt7vbZ/nv-formt-MV8-4.png"
                alt="Mulheres V8 - Nossa História"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Fundadora */}
      <section className="py-16 px-4 bg-primary-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img
                src="/lovable-uploads/f83eb134-f974-429e-bfd3-fce71697b5e7.png"
                alt="Eva Paiva - Fundadora"
                className="rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow p-4 rounded-xl shadow-lg">
                <p className="text-primary font-bold text-lg">Eva Paiva</p>
                <p className="text-brand-secondary text-sm font-medium">Fundadora & CEO</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Nossa Fundadora</h2>
              <p className="text-primary-700 text-lg mb-4">
                Eva Paiva é fundadora do Instituto Mulheres V8, palestrante e mentora especializada no desenvolvimento de mulheres líderes e empreendedoras. Filha de mecânico, construiu sua trajetória profissional conectando a vivência prática do setor automotivo à formação acadêmica e à visão estratégica de negócios, tornando-se uma das principais vozes na promoção do protagonismo feminino nesse mercado.
              </p>
              <p className="text-primary-700 text-lg mb-4">
                Formada em Contabilidade, com especializações em Finanças, Controladoria, Neurociência e Planejamento Estratégico, Eva une conhecimento técnico e sensibilidade humana para transformar trajetórias profissionais de forma consistente e sustentável.
              </p>
              <p className="text-primary-700 text-lg mb-4">
                É autora do livro <strong className="text-primary-900">"99 Cartas"</strong> e idealizadora do podcast{" "}
                <strong className="text-primary-900">MulherPod</strong>, onde compartilha reflexões, estratégias e ferramentas práticas para impulsionar mulheres na vida e nos negócios.
              </p>
              <p className="text-primary-700 text-lg">
                Sua missão é conduzir mulheres a assumirem o papel de protagonistas de suas histórias, com visão estratégica, autoconfiança e clareza para liderarem seus empreendimentos com propósito e consistência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que Fazemos - 4 Pilares */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">O que Fazemos</h2>
            <p className="text-xl text-brand-secondary max-w-4xl mx-auto">
              Tudo o que fazemos é desenvolvido sob o olhar em quatro pilares fundamentais para o avanço, inclusão e melhor performance da mulher no mercado de trabalho automotivo: a técnica, negócios, desenvolvimento humano e espiritual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, index) => (
              <Card
                key={index}
                className="hover:border-brand-primary transition-all duration-300 border-t-4 border-t-brand-primary bg-primary-50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">{item.title}</h3>
                  <p className="text-primary-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 px-4 bg-brand-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Valores</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-none text-white">
                <CardContent className="p-6 text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.name}</h3>
                  <p className="text-gray-200">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-brand-primary bg-primary-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa Missão</h3>
                <p className="text-primary-700 text-lg">
                  Capacitar e desenvolver mulheres para que liderem suas próprias histórias com protagonismo, visão estratégica, propósito e impacto no setor automotivo e na vida.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-brand-yellow bg-primary-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-yellow mb-4">Nossa Visão</h3>
                <p className="text-primary-700 text-lg">
                  Ser o principal instituto educacional de desenvolvimento feminino do Brasil no setor automotivo, integrando formação técnica, gestão, desenvolvimento humano e propósito para gerar transformação sustentável e representatividade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-yellow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Faça Parte desta História</h2>
          <p className="text-xl text-black/80 mb-8">
            Junte-se a milhares de mulheres que já estão acelerando suas carreiras conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-dark text-white">
              <Link to="/comunidade">Conhecer a Comunidade</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white"
            >
              <Link to="/cursos">Ver Cursos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institucional;
