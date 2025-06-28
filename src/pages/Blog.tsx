
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, User, ArrowRight, Search, Mail } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [emailNewsletter, setEmailNewsletter] = useState('');

  const categories = [
    { id: 'todas', name: 'Todas', color: 'bg-gray-100 text-gray-800' },
    { id: 'lideranca', name: 'Liderança', color: 'bg-brand-primary text-white' },
    { id: 'tecnica', name: 'Técnica', color: 'bg-brand-secondary text-white' },
    { id: 'emocional', name: 'Emocional', color: 'bg-brand-accent text-white' },
    { id: 'espiritual', name: 'Espiritual', color: 'bg-brand-yellow text-brand-accent' }
  ];

  const posts = [
    {
      id: 1,
      title: "5 Estratégias Comprovadas para Liderar Equipes Remotas",
      excerpt: "Descubra como manter sua equipe engajada e produtiva no trabalho remoto com técnicas testadas por líderes de sucesso.",
      category: 'lideranca',
      author: "Eva Gomes",
      date: "2025-01-15",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Inteligência Emocional: O Diferencial das Líderes Modernas",
      excerpt: "Como desenvolver e aplicar a inteligência emocional para se tornar uma líder mais eficaz e inspiradora.",
      category: 'emocional',
      author: "Marina Santos",
      date: "2025-01-12",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Tecnologias Emergentes que Todo Profissional Deve Conhecer",
      excerpt: "Um guia prático sobre as principais tecnologias que estão moldando o futuro do trabalho.",
      category: 'tecnica',
      author: "Ana Costa",
      date: "2025-01-10",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Encontrando Equilíbrio Entre Propósito e Performance",
      excerpt: "Como alinhar seus valores pessoais com seus objetivos profissionais para uma carreira mais plena.",
      category: 'espiritual',
      author: "Carla Lima",
      date: "2025-01-08",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Automação e IA: Preparando-se para o Futuro do Trabalho",
      excerpt: "Entenda como se adaptar e prosperar em um mundo cada vez mais automatizado.",
      category: 'tecnica',
      author: "Patricia Oliveira",
      date: "2025-01-05",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Comunicação Assertiva: Ferramenta de Crescimento Profissional",
      excerpt: "Técnicas práticas para se comunicar com clareza, confiança e impacto.",
      category: 'lideranca',
      author: "Juliana Rocha",
      date: "2025-01-03",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop"
    }
  ];

  const filteredPosts = selectedCategory === 'todas' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', emailNewsletter);
    setEmailNewsletter('');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Blog <span className="text-brand-yellow animate-pulse">Mulheres V8</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Conteúdos exclusivos para acelerar sua carreira e desenvolvimento pessoal.
          </p>
          <div className="flex justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar artigos..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300 hover:bg-white/20 transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`hover:scale-105 transition-all duration-300 animate-fade-in ${
                  selectedCategory === category.id ? category.color : 'hover:shadow-lg'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'todas' && (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                Post em Destaque
              </h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className="absolute top-4 left-4 bg-brand-yellow text-brand-accent animate-pulse">
                    Destaque
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-brand-primary text-white">
                    {categories.find(cat => cat.id === featuredPost.category)?.name}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-primary hover:text-brand-dark transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  <Button className="bg-brand-primary hover:bg-brand-dark text-white font-medium hover:scale-105 transition-transform duration-200">
                    Ler Artigo Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              {selectedCategory === 'todas' ? 'Todos os Artigos' : `Artigos de ${categories.find(cat => cat.id === selectedCategory)?.name}`}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'todas' ? regularPosts : filteredPosts).map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className={`absolute top-4 left-4 ${categories.find(cat => cat.id === post.category)?.color}`}>
                    {categories.find(cat => cat.id === post.category)?.name}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-brand-primary hover:text-brand-dark transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 hover:text-gray-800 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full hover:bg-brand-primary hover:text-white hover:scale-105 transition-all duration-300">
                    Ler Mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não Perca Nenhum Conteúdo
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Receba nossos melhores artigos diretamente no seu e-mail.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="email"
                value={emailNewsletter}
                onChange={(e) => setEmailNewsletter(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300 hover:bg-white/20 transition-colors duration-300"
                required
              />
            </div>
            <Button type="submit" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold hover:scale-105 transition-transform duration-200">
              Inscrever-se
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
