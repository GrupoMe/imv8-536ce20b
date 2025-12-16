
import React from 'react';
import { Users, Target, Heart, Lightbulb, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Institucional = () => {
  const whatWeDo = [
    {
      icon: Users,
      title: "Desenvolvimento de Líderes",
      description: "Formamos mulheres para ocupar posições de liderança através de programas de mentoria e capacitação."
    },
    {
      icon: Target,
      title: "Conexão de Talentos",
      description: "Conectamos profissionais talentosas com oportunidades no mercado automotivo e corporativo."
    },
    {
      icon: Lightbulb,
      title: "Educação Continuada",
      description: "Oferecemos cursos, workshops e formações para desenvolvimento profissional constante."
    },
    {
      icon: Heart,
      title: "Comunidade de Apoio",
      description: "Criamos uma rede de suporte onde mulheres se ajudam e crescem juntas."
    }
  ];

  const howWeDo = [
    {
      step: "01",
      title: "Identificação",
      description: "Identificamos talentos femininos com potencial de crescimento e liderança."
    },
    {
      step: "02",
      title: "Capacitação",
      description: "Oferecemos formações práticas com foco em habilidades de mercado."
    },
    {
      step: "03",
      title: "Mentoria",
      description: "Conectamos cada participante com mentoras experientes do setor."
    },
    {
      step: "04",
      title: "Inserção",
      description: "Facilitamos a entrada em posições estratégicas no mercado."
    }
  ];

  const values = [
    { icon: Heart, name: "Empatia", description: "Acolhemos cada história com respeito e compreensão." },
    { icon: Target, name: "Excelência", description: "Buscamos sempre entregar o melhor em tudo que fazemos." },
    { icon: Users, name: "Colaboração", description: "Acreditamos no poder do trabalho em equipe." },
    { icon: Award, name: "Integridade", description: "Agimos com transparência e ética em todas as relações." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary via-brand-purple to-brand-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Quem Somos
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            Somos o Instituto Mulheres V8, uma organização dedicada a acelerar carreiras femininas 
            e transformar o mercado através do empoderamento e da educação.
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
                O Instituto Mulheres V8 nasceu da visão de Eva Paiva, uma profissional com mais de 
                20 anos de experiência no setor automotivo, que identificou a necessidade de criar 
                oportunidades e caminhos para outras mulheres no mercado.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Desde nossa fundação, já impactamos milhares de mulheres através de programas de 
                formação, mentoria e desenvolvimento profissional, construindo uma comunidade 
                forte e unida.
              </p>
              <p className="text-gray-600 text-lg">
                Nosso nome, "V8", representa a força e potência que cada mulher carrega dentro de si, 
                pronta para acelerar e conquistar novos horizontes.
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

      {/* O que Fazemos */}
      <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              O que Fazemos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Atuamos em diversas frentes para promover o desenvolvimento e crescimento 
              profissional de mulheres.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-none bg-white">
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
      <section className="py-16 px-4 bg-white">
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
                  Acelerar o desenvolvimento profissional de mulheres, proporcionando educação, 
                  mentoria e oportunidades que transformem suas carreiras e vidas.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-brand-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Nossa Visão</h3>
                <p className="text-gray-600 text-lg">
                  Ser referência nacional em desenvolvimento de líderes femininas, contribuindo 
                  para um mercado mais diverso, inclusivo e igualitário.
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
              <Link to="/formacoes">Ver Formações</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institucional;
