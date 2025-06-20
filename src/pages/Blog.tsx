
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Empreendedorismo Feminino: Quebrando Barreiras no Mundo dos Negócios",
      excerpt: "Descubra as principais estratégias e desafios enfrentados por mulheres empreendedoras e como o Instituto Mulheres V8 está transformando esse cenário.",
      author: "Eva Santos",
      date: "2025-01-15",
      readTime: "8 min",
      category: "Empreendedorismo",
      featured: true,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Liderança Feminina: 5 Competências Essenciais para o Sucesso",
      excerpt: "Aprenda as principais competências que toda mulher líder deve desenvolver para alcançar o sucesso profissional.",
      author: "Natália Ferrarini",
      date: "2025-01-10",
      readTime: "6 min",
      category: "Liderança",
      featured: false,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Networking Estratégico: Como Construir uma Rede de Contatos Poderosa",
      excerpt: "Entenda a importância do networking para mulheres empreendedoras e como construir relacionamentos profissionais sólidos.",
      author: "Rodrigo Oliveira",
      date: "2025-01-05",
      readTime: "7 min",
      category: "Networking",
      featured: false,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Transformação Digital: O Futuro dos Negócios Liderados por Mulheres",
      excerpt: "Explore como a transformação digital está criando novas oportunidades para mulheres empreendedoras.",
      author: "Eva Santos",
      date: "2024-12-28",
      readTime: "9 min",
      category: "Tecnologia",
      featured: false,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Gestão Financeira para Mulheres Empreendedoras",
      excerpt: "Dicas essenciais de gestão financeira para mulheres que estão começando ou expandindo seus negócios.",
      author: "Natália Ferrarini",
      date: "2024-12-20",
      readTime: "10 min",
      category: "Finanças",
      featured: false,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    }
  ];

  const categories = ["Todos", "Empreendedorismo", "Liderança", "Networking", "Tecnologia", "Finanças"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = selectedCategory === "Todos" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== "Todos");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Blog Instituto Mulheres V8
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Conteúdos exclusivos sobre empreendedorismo feminino, liderança e transformação de negócios.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post em Destaque */}
      {featuredPost && selectedCategory === "Todos" && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center font-heading">
              Post em Destaque
            </h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-brand-primary">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold text-brand-primary mb-4 font-heading">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{formatDate(featuredPost.date)}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
                  >
                    Ler Artigo Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Lista de Posts */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center font-heading">
            {selectedCategory === "Todos" ? "Últimos Artigos" : `Artigos sobre ${selectedCategory}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-brand-primary">{post.category}</Badge>
                  <CardTitle className="text-lg text-brand-primary line-clamp-2 font-heading">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
                    >
                      Ler mais
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">
            Receba Nossos Insights
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Assine nossa newsletter e receba conteúdos exclusivos sobre empreendedorismo feminino e liderança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Assinar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
