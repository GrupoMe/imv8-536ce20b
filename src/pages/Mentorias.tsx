import React from 'react';
import { Users, Clock, Star, ArrowRight, MessageCircle, Target, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Mentorias = () => {
  const mentorias = [
    {
      id: 1,
      title: "Mentoria Individual com Eva Paiva",
      type: "individual",
      duration: "3 meses",
      sessions: "12 sessões",
      rating: 5.0,
      price: "R$ 2.997",
      description: "Mentoria personalizada com a fundadora do Instituto para acelerar sua carreira e definir estratégias de crescimento.",
      includes: ["Diagnóstico de Carreira", "Plano de Desenvolvimento", "Acompanhamento Semanal", "Networking Exclusivo"],
    },
    {
      id: 2,
      title: "Mentoria em Grupo - Carreira Internacional",
      type: "grupo",
      duration: "2 meses",
      sessions: "8 sessões",
      rating: 4.9,
      price: "R$ 1.497",
      description: "Mentoria em grupo focada em preparar você para oportunidades de carreira internacional no setor automotivo.",
      includes: ["Preparação de CV Internacional", "Entrevistas em Inglês", "Cultura Corporativa Global", "Networking Internacional"],
    },
    {
      id: 3,
      title: "Mentoria de Liderança Feminina",
      type: "grupo",
      duration: "3 meses",
      sessions: "12 sessões",
      rating: 4.8,
      price: "R$ 1.997",
      description: "Desenvolva suas habilidades de liderança com mentoras experientes do setor automotivo.",
      includes: ["Liderança Situacional", "Gestão de Equipes", "Comunicação Assertiva", "Tomada de Decisão"],
    },
  ];

  const getTypeColor = (type: string) => {
    return type === 'individual' 
      ? 'bg-purple-500/20 text-purple-400' 
      : 'bg-blue-500/20 text-blue-400';
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative bg-zinc-950 py-20 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-white">
          <Badge className="bg-brand-primary/20 text-brand-primary mb-4">Mentorias & Acompanhamento</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Mentorias que <br />Transformam Carreiras
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Acompanhamento personalizado com profissionais experientes para 
            acelerar seu desenvolvimento no setor automotivo.
          </p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-12 px-4 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Acompanhamento Personalizado</h3>
              <p className="text-gray-400">Cada mentoria é adaptada às suas necessidades e objetivos específicos.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Foco em Resultados</h3>
              <p className="text-gray-400">Metodologia prática com metas claras e acompanhamento de evolução.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mentoras Experientes</h3>
              <p className="text-gray-400">Profissionais com trajetória consolidada no setor automotivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorias Grid */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossas Mentorias
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Escolha a mentoria ideal para o seu momento de carreira.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorias.map((mentoria) => (
              <Card key={mentoria.id} className="hover:border-brand-primary transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getTypeColor(mentoria.type)}>
                      {mentoria.type === 'individual' ? 'Individual' : 'Em Grupo'}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium text-gray-300">{mentoria.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{mentoria.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400">{mentoria.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {mentoria.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {mentoria.sessions}
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-gray-500 mb-2">O que inclui:</p>
                    <div className="flex flex-wrap gap-2">
                      {mentoria.includes.slice(0, 3).map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-zinc-800 text-gray-300">
                          {item}
                        </Badge>
                      ))}
                      {mentoria.includes.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-zinc-800 text-gray-300">
                          +{mentoria.includes.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <div>
                      <span className="text-2xl font-bold text-brand-yellow">{mentoria.price}</span>
                    </div>
                    <Button className="bg-brand-primary hover:bg-brand-dark">
                      Quero Saber Mais <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 text-brand-yellow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronta para acelerar sua carreira?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Agende uma conversa para descobrir qual mentoria é ideal para você.
          </p>
          <Button size="lg" className="bg-brand-yellow text-primary-900 hover:bg-yellow-400 font-bold">
            Agendar Conversa
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Mentorias;