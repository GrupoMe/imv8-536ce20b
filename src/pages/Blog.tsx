
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "5 Características Essenciais de uma Líder no Setor Automotivo",
      excerpt: "Descubra as principais competências que toda mulher líder deve desenvolver para se destacar no universo V8.",
      author: "Eva Santos",
      date: "2025-01-15",
      readTime: "8 min",
      category: "Liderança",
      featured: true,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Dominando a Mecânica: Guia Técnico para Mulheres",
      excerpt: "Um guia completo sobre conceitos técnicos fundamentais no setor automotivo, explicado de forma clara e objetiva.",
      author: "Natália Ferrarini",
      date: "2025-01-12",
      readTime: "12 min",
      category: "Técnica",
      featured: false,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Superando a Síndrome da Impostora",
      excerpt: "Como lidar com a insegurança e fortalecer sua confiança em ambientes tradicionalmente masculinos.",
      author: "Eva Santos",
      date: "2025-01-10",
      readTime: "6 min",
      category: "Emocional",
      featured: false,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b814?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Encontrando Propósito na Carreira Automotiva",
      excerpt: "Reflexões sobre como alinhar paixão, propósito e profissão no universo dos motores.",
      author: "Rodrigo Oliveira",
      date: "2025-01-08",
      readTime: "9 min",
      category: "Espiritual",
      featured: false,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Negociação Estratégica no Setor Automotivo",
      excerpt: "Técnicas avançadas de negociação para mulheres que querem fechar mais vendas e parcerias.",
      author: "Natália Ferrarini",
      date: "2025-01-05",
      readTime: "10 min",
      category: "Técnica",
      featured: false,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Construindo Resiliência Emocional",
      excerpt: "Como desenvolver a força emocional necessária para superar desafios e pressões do setor.",
      author: "Eva Santos",
      date: "2025-01-03",
      readTime: "7 min",
      category: "Emocional",
      featured: false,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=400&fit=crop"
    }
  ];

  const categories = ["Todos", "Liderança", "Técnica", "Emocional", "Espiritual"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            BLOG<br />
            <span className="text-brand-yellow">MULHERES V8</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-8">
            Conteúdos exclusivos sobre liderança, técnica, desenvolvimento emocional e 
            crescimento espiritual para mulheres do setor automotivo.
          </p>
          
          {/* Barra de Pesquisa */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Filtros por Categoria */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
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
      {featuredPost && selectedCategory === "Todos" && searchTerm === "" && (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center">
              Artigo em Destaque
            </h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-brand-primary text-white">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 leading-tight">
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center">
            {selectedCategory === "Todos" ? "Últimos Artigos" : `Artigos sobre ${selectedCategory}`}
          </h2>
          
          {regularPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum artigo encontrado com os filtros selecionados.</p>
            </div>
          ) : (
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
                    <Badge className="w-fit mb-2 bg-brand-primary text-white">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg text-brand-primary line-clamp-2">
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
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Receba Nossos Insights
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Assine nossa newsletter e receba conteúdos exclusivos sobre liderança, 
            técnica e desenvolvimento pessoal no setor automotivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
              Assinar Newsletter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
