
import React, { useState } from 'react';
import { BookOpen, Clock, Users, Star, ArrowRight, GraduationCap, Award, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Cursos = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { key: 'todos', label: 'Todos' },
    { key: 'curso', label: 'Cursos' },
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
      title: "Curso de Negociação para Mulheres",
      category: "curso",
      duration: "4 semanas",
      participants: 200,
      rating: 4.7,
      price: "R$ 497",
      description: "Aprenda técnicas de negociação e como se posicionar com confiança em conversas de carreira e salário.",
      modules: ["Preparação para Negociação", "Técnicas Avançadas", "Linguagem Corporal", "Casos Práticos"],
      checkoutLink: "#checkout-cursos"
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
      checkoutLink: "#checkout-cursos"
    },
    {
      id: 4,
      title: "Gestão Financeira para Mulheres Empreendedoras",
      category: "curso",
      duration: "6 semanas",
      participants: 120,
      rating: 4.9,
      price: "R$ 697",
      description: "Domine as finanças do seu negócio com técnicas práticas de organização financeira e contabilidade.",
      modules: ["Fluxo de Caixa", "Precificação", "Investimentos", "Planejamento Tributário"],
      checkoutLink: "#checkout-cursos"
    },
    {
      id: 5,
      title: "Programa de Aceleração de Carreira",
      category: "programa",
      duration: "4 meses",
      participants: 30,
      rating: 4.8,
      price: "R$ 3.497",
      description: "Programa intensivo para profissionais que desejam dar um salto na carreira em curto prazo.",
      modules: ["Análise de Perfil", "Estratégia de Carreira", "Personal Branding", "Execução do Plano"],
      checkoutLink: "#checkout-cursos"
    },
    {
      id: 6,
      title: "Marketing Digital para o Setor Automotivo",
      category: "curso",
      duration: "5 semanas",
      participants: 80,
      rating: 4.7,
      price: "R$ 597",
      description: "Aprenda estratégias de marketing digital específicas para empresas do setor automotivo.",
      modules: ["Redes Sociais", "Google Ads", "Conteúdo Estratégico", "Métricas e Análise"],
      checkoutLink: "#checkout-cursos"
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
      <section className="relative bg-brand-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <Badge className="bg-white/20 text-white mb-4">Cursos & Programas</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Invista no seu <br />Desenvolvimento Profissional
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            Cursos e programas de formação criados por especialistas 
            para acelerar sua carreira no setor automotivo.
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
              <Card key={index} className="bg-brand-light">
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
      <section className="py-16 px-4 bg-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-pink-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronta para dar o próximo passo?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Escolha o curso ideal para você e comece sua transformação hoje mesmo.
          </p>
          <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
            Ver Todos os Cursos
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Cursos;
