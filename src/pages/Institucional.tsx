import React from 'react';
import { Users, Target, Heart, Lightbulb, Award, ArrowRight, CheckCircle, Zap, TrendingUp, Compass } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Institucional = () => {
  const whatWeDo = [
    {
      icon: Users,
      title: "Educação Técnica",
      description: "Formação técnica aplicada à realidade das oficinas e do mercado automotivo."
    },
    {
      icon: Target,
      title: "Gestão de Negócios",
      description: "Contabilidade, organização financeira, marketing estratégico e gestão empresarial."
    },
    {
      icon: Lightbulb,
      title: "Desenvolvimento Humano",
      description: "Habilidades comportamentais, inteligência emocional e autoconhecimento."
    },
    {
      icon: Heart,
      title: "Espiritualidade",
      description: "Valores e propósito, equilíbrio, consciência e clareza nas tomadas de decisão."
    }
  ];

  const howWeDo = [
    {
      step: "01",
      title: "Diagnóstico e Consciência",
      description: "Identificamos o ponto de partida de cada mulher e suas necessidades reais de desenvolvimento."
    },
    {
      step: "02",
      title: "Capacitação Estruturada",
      description: "Oferecemos formações práticas com foco em habilidades técnicas e de gestão."
    },
    {
      step: "03",
      title: "Desenvolvimento e Direcionamento",
      description: "Acompanhamento personalizado com mentorias e trilhas de crescimento."
    },
    {
      step: "04",
      title: "Posicionamento e Expansão",
      description: "Apoio na construção de autoridade e visibilidade no mercado."
    }
  ];

  const values = [
    { 
      icon: Heart, 
      name: "Autenticidade", 
      description: "Honramos a identidade e a história de cada mulher, valorizando sua singularidade." 
    },
    { 
      icon: Target, 
      name: "Lealdade", 
      description: "Agimos com ética, verdade e compromisso absoluto com nossas parceiras." 
    },
    { 
      icon: Zap, 
      name: "Proatividade", 
      description: "Estimulamos a autoliderança, a iniciativa e a ação consciente." 
    },
    { 
      icon: TrendingUp, 
      name: "Crescimento", 
      description: "Cultivamos a evolução contínua em todas as dimensões da vida." 
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary via-brand-purple to-brand-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Quem Somos
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto">
            O Instituto Mulheres V8 é um ecossistema de desenvolvimento feminino criado para capacitar, 
            fortalecer e transformar mulheres no setor automotivo e na vida.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Nossa História
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                O Instituto Mulheres V8 nasceu há quatro anos a partir da visão de Eva Paiva, filha de mecânico, 
                que, ao vivenciar o setor automotivo desde cedo, passou a questionar a ausência e a realidade 
                das mulheres nesse mercado: onde estavam, como se sentiam e de que forma se capacitavam para 
                crescer profissionalmente.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                A partir dessa inquietação, foi criado um grupo de WhatsApp com 14 mulheres, dando início a um 
                movimento de escuta, troca e fortalecimento feminino no sul do país, inicialmente conhecido como 
                <strong> Gaúchas Car</strong>.
              </p>
              <p className="text-gray-600 text-lg">
                Com o crescimento orgânico da iniciativa e o reconhecimento das indústrias e empresas do setor 
                automotivo, o movimento ganhou dimensão nacional, evoluindo para o <strong>Instituto Mulheres V8</strong>, 
                uma organização focada em formar, desenvolver e posicionar mulheres como protagonistas de suas 
                histórias profissionais.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/f83eb134-f974-429e-bfd3-fce71697b5e7.png" 
                alt="Eva Paiva - Fundadora"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-yellow p-4 rounded-xl shadow-lg">
                <p className="text-brand-primary font-bold text-lg">Eva Paiva</p>
                <p className="text-gray-700 text-sm">Fundadora & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio da Eva */}
      <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Eva Paiva
            </h2>
            <p className="text-xl text-brand-secondary mb-6 font-semibold">
              Fundadora do Instituto Mulheres V8, Palestrante e Mentora
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Eva Paiva é fundadora do Instituto Mulheres V8, palestrante e mentora especializada no 
              desenvolvimento de mulheres líderes e empreendedoras. Filha de mecânico, construiu sua 
              trajetória profissional conectando a vivência prática do setor automotivo à formação 
              acadêmica e à visão estratégica de negócios.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Formada em Contabilidade, com especializações em Finanças, Controladoria, Neurociência e 
              Planejamento Estratégico, Eva alia conhecimento técnico à sensibilidade humana para desenvolver 
              mulheres que desejam crescer com propósito e direção.
            </p>
            <p className="text-gray-600 text-lg">
              Autora do livro <strong>"99 Cartas"</strong> e idealizadora do podcast <strong>MulherPod</strong>, 
              Eva é reconhecida por sua capacidade de inspirar, conectar e transformar a vida de milhares de 
              mulheres no Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* O que Fazemos - 4 Pilares */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              O que Fazemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atuamos a partir de quatro pilares fundamentais, integrados de forma estratégica para 
              promover o desenvolvimento completo da mulher.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-none bg-white border-t-4 border-brand-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Fazemos */}
      <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Como Fazemos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa metodologia é baseada em um processo estruturado que garante 
              resultados reais para nossas participantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeDo.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-brand-light mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < howWeDo.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-brand-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 px-4 bg-gradient-to-br from-brand-primary to-brand-purple">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Os princípios que guiam todas as nossas ações e decisões.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-none text-white">
                <CardContent className="p-6 text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.name}</h3>
                  <p className="text-pink-100">{value.description}</p>
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
            <Card className="border-l-4 border-l-brand-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Nossa Missão</h3>
                <p className="text-gray-600 text-lg">
                  Capacitar e desenvolver mulheres para que liderem suas próprias histórias com protagonismo, 
                  visão estratégica, propósito e impacto no setor automotivo e na vida.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-brand-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Nossa Visão</h3>
                <p className="text-gray-600 text-lg">
                  Ser o principal instituto educacional de desenvolvimento feminino do Brasil no setor automotivo, 
                  integrando formação técnica, gestão, desenvolvimento humano e propósito para gerar transformação 
                  sustentável e representatividade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-yellow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Faça Parte desta História
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Junte-se a milhares de mulheres que já estão acelerando suas carreiras conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-dark">
              <Link to="/comunidade">Conhecer a Comunidade</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
              <Link to="/cursos">Ver Cursos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institucional;
