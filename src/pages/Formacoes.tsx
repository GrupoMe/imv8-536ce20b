
import React, { useState } from 'react';
import { BookOpen, Clock, Users, Star, ArrowRight, GraduationCap, Award, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Formacoes = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { key: 'todos', label: 'Todas' },
    { key: 'curso', label: 'Cursos' },
    { key: 'mentoria', label: 'Mentorias' },
    { key: 'programa', label: 'Programas' }
  ];

  const formations = [
    {
      id: 1,
      title: "Liderança Feminina no Setor Automotivo",
      category: "curso",
      duration: "8 semanas",
      participants: 150,
      rating: 4.9,
      price: "R$ 997",
      description: "Desenvolva habilidades de liderança específicas para o setor automotivo e aprenda a navegar em ambientes corporativos.",
      modules: ["Fundamentos da Liderança", "Comunicação Assertiva", "Gestão de Equipes", "Negociação"],
      checkoutLink: "#checkout-formacoes"
    },
    {
      id: 2,
      title: "Mentoria Individual com Eva Paiva",
      category: "mentoria",
      duration: "3 meses",
      participants: 25,
      rating: 5.0,
      price: "R$ 2.997",
      description: "Mentoria personalizada com a fundadora do Instituto para acelerar sua carreira e definir estratégias de crescimento.",
      modules: ["Diagnóstico de Carreira", "Plano de Desenvolvimento", "Acompanhamento Semanal", "Networking Exclusivo"],
      checkoutLink: "#checkout-formacoes"
    },
    {
      id: 3,
      title: "Programa de Desenvolvimento de Líderes",
      category: "programa",
      duration: "6 meses",
      participants: 50,
      rating: 4.8,
      price: "R$ 4.997",
      description: "Programa completo de formação de líderes com módulos práticos, mentoria em grupo e projeto final.",
      modules: ["Autoconhecimento", "Liderança Situacional", "Gestão de Conflitos", "Projeto Aplicado"],
      checkoutLink: "#checkout-formacoes"
    },
    {
      id: 4,
      title: "Curso de Negociação para Mulheres",
      category: "curso",
      duration: "4 semanas",
      participants: 200,
      rating: 4.7,
      price: "R$ 497",
      description: "Aprenda técnicas de negociação e como se posicionar com confiança em conversas de carreira e salário.",
      modules: ["Preparação para Negociação", "Técnicas Avançadas", "Linguagem Corporal", "Casos Práticos"],
      checkoutLink: "#checkout-formacoes"
    },
    {
      id: 5,
      title: "Mentoria em Grupo - Carreira Internacional",
      category: "mentoria",
      duration: "2 meses",
      participants: 15,
      rating: 4.9,
      price: "R$ 1.497",
      description: "Mentoria em grupo focada em preparar você para oportunidades de carreira internacional no setor automotivo.",
      modules: ["Preparação de CV Internacional", "Entrevistas em Inglês", "Cultura Corporativa Global", "Networking Internacional"],
      checkoutLink: "#checkout-formacoes"
    },
    {
      id: 6,
      title: "Programa de Aceleração de Carreira",
      category: "programa",
      duration: "4 meses",
      participants: 30,
      rating: 4.8,
      price: "R$ 3.497",
      description: "Programa intensivo para profissionais que desejam dar um salto na carreira em curto prazo.",
      modules: ["Análise de Perfil", "Estratégia de Carreira", "Personal Branding", "Execução do Plano"],
      checkoutLink: "#checkout-formacoes"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Gerente de Operações",
      company: "Montadora ABC",
      quote: "O curso de liderança transformou minha forma de gerir equipes. Consegui uma promoção em 3 meses!",
      rating: 5
    },
    {
      name: "Ana Paula Costa",
      role: "Diretora Comercial",
      company: "Concessionária XYZ",
      quote: "A mentoria com Eva foi divisor de águas na minha carreira. Recomendo para todas as mulheres.",
      rating: 5
    },
    {
      name: "Juliana Mendes",
      role: "Coordenadora de Projetos",
      company: "Tech Auto",
      quote: "O programa de aceleração me ajudou a conquistar minha posição atual. Vale cada centavo investido.",
      rating: 5
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      curso: 'bg-blue-100 text-blue-800',
      mentoria: 'bg-purple-100 text-purple-800',
      programa: 'bg-green-100 text-green-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const filteredFormations = selectedCategory === 'todos' 
    ? formations 
    : formations.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary via-brand-purple to-brand-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <Badge className="bg-white/20 text-white mb-4">Formações & Desenvolvimento</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Invista no seu <br />Desenvolvimento Profissional
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            Cursos, mentorias e programas de formação criados por especialistas 
            para acelerar sua carreira.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-primary">500+</div>
              <p className="text-gray-600">Alunas Formadas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary">15+</div>
              <p className="text-gray-600">Cursos Disponíveis</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary">4.9</div>
              <p className="text-gray-600">Avaliação Média</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary">95%</div>
              <p className="text-gray-600">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant={selectedCategory === cat.key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFormations.map((formation) => (
              <Card key={formation.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(formation.category)}>
                      {formation.category.charAt(0).toUpperCase() + formation.category.slice(1)}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium">{formation.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{formation.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{formation.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {formation.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {formation.participants} alunas
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-gray-500 mb-2">Módulos inclusos:</p>
                    <div className="flex flex-wrap gap-2">
                      {formation.modules.slice(0, 3).map((module, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {module}
                        </Badge>
                      ))}
                      {formation.modules.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{formation.modules.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-brand-primary">{formation.price}</span>
                    </div>
                    <Button asChild>
                      <a href={formation.checkoutLink} target="_blank" rel="noopener noreferrer">
                        Inscrever-se <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              O que nossas alunas dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Histórias reais de mulheres que transformaram suas carreiras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-pink-50 to-white">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-brand-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-brand-primary to-brand-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-pink-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronta para dar o próximo passo?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Escolha a formação ideal para você e comece sua transformação hoje mesmo.
          </p>
          <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
            Ver Todas as Formações
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Formacoes;
