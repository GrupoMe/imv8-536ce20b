import React, { useEffect, useState } from "react";
import { Users, Clock, Star, ArrowRight, MessageCircle, Target, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import cursosHeroBg from "@/assets/cursos-hero.jpg";

interface Mentoria {
  id: number;
  title: string;
  type: string;
  duration: string;
  sessions: string;
  rating: number;
  price: string;
  description: string;
  includes: string[];
  cta_link: string;
}

const Mentorias = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [mentorias, setMentorias] = useState<Mentoria[]>([]);

  useEffect(() => {
    const fetchMentorias = async () => {
      const { data } = await supabase.from('mentorias' as any).select('*').order('id');
      if (data) setMentorias(data as any);
    };
    fetchMentorias();
  }, []);

  const getTypeColor = (type: string) => {
    return type === "individual" ? "bg-purple-500/20 text-purple-700" : "bg-blue-500/20 text-blue-700";
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-center text-white py-20 px-4 overflow-hidden"
        style={{ backgroundImage: `url(${cursosHeroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <Badge className="bg-white/20 text-white mb-4">Mentorias & Acompanhamento</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Mentorias que <br />
            Transformam Carreiras
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Acompanhamento personalizado com profissionais experientes para acelerar seu desenvolvimento no setor
            automotivo.
          </p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-12 px-4 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Acompanhamento Personalizado</h3>
              <p className="text-primary-700">Cada mentoria é adaptada às suas necessidades e objetivos específicos.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Foco em Resultados</h3>
              <p className="text-primary-700">Metodologia prática com metas claras e acompanhamento de evolução.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Mentoras Experientes</h3>
              <p className="text-primary-700">Profissionais com trajetória consolidada no setor automotivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorias Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nossas Mentorias</h2>
            <p className="text-xl text-primary-700 max-w-2xl mx-auto">
              Escolha a mentoria ideal para o seu momento de carreira.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorias.map((mentoria) => (
              <Card
                key={mentoria.id}
                className="hover:border-brand-primary transition-all duration-300 overflow-hidden bg-primary-50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getTypeColor(mentoria.type)}>
                      {mentoria.type === "individual" ? "Individual" : "Em Grupo"}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                      <span className="text-sm font-medium text-primary-700">{mentoria.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-900">{mentoria.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-primary-700">{mentoria.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-primary-600">
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
                    <p className="text-sm text-primary-600 mb-2">O que inclui:</p>
                    <div className="flex flex-wrap gap-2">
                      {(mentoria.includes || []).slice(0, 3).map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-primary-100 text-primary-700">
                          {item}
                        </Badge>
                      ))}
                      {(mentoria.includes || []).length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-primary-100 text-primary-700">
                          +{mentoria.includes.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-primary-200">
                    <div>
                      <span className="text-2xl font-bold text-brand-yellow">{mentoria.price}</span>
                    </div>
                    <a href={mentoria.cta_link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-brand-primary hover:bg-brand-dark">
                        Quero Saber Mais <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {mentorias.length === 0 && (
            <p className="text-center text-primary-700 mt-8">Nenhuma mentoria disponível no momento.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 text-brand-yellow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronta para acelerar sua carreira?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Agende uma conversa para descobrir qual mentoria é ideal para você.
          </p>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-brand-yellow text-black hover:bg-yellow-400 font-bold">
              Agendar Conversa
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Mentorias;
