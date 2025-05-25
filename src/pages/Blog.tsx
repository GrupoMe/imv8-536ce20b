
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Como a Transformação Digital Pode Revolucionar Seu Negócio",
      excerpt: "Descubra as principais tendências e estratégias para implementar a transformação digital na sua empresa de forma eficiente e sustentável.",
      author: "Rodrigo Oliveira",
      date: "2025-01-15",
      readTime: "8 min",
      category: "Tecnologia",
      featured: true,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Gestão de Pessoas: 5 Estratégias para Reter Talentos",
      excerpt: "Aprenda técnicas comprovadas para melhorar o engajamento dos colaboradores e reduzir a rotatividade na sua empresa.",
      author: "Natália Ferrarini",
      date: "2025-01-10",
      readTime: "6 min",
      category: "RH",
      featured: false,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Metodologias Ágeis: Como Acelerar a Entrega de Projetos",
      excerpt: "Entenda como as metodologias ágeis podem otimizar seus processos e aumentar a produtividade da sua equipe.",
      author: "Rodrigo Oliveira",
      date: "2025-01-05",
      readTime: "7 min",
      category: "Gestão",
      featured: false,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "O Futuro do Trabalho Remoto: Tendências e Desafios",
      excerpt: "Explore as principais tendências do trabalho remoto e como preparar sua empresa para o futuro do trabalho.",
      author: "Natália Ferrarini",
      date: "2024-12-28",
      readTime: "9 min",
      category: "Futuro do Trabalho",
      featured: false,
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Inteligência Artificial nos Negócios: Oportunidades e Aplicações",
      excerpt: "Descubra como a IA pode ser aplicada no seu negócio para automatizar processos e gerar insights valiosos.",
      author: "Rodrigo Oliveira",
      date: "2024-12-20",
      readTime: "10 min",
      category: "Tecnologia",
      featured: false,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
    }
  ];

  const categories = ["Todos", "Tecnologia", "RH", "Gestão", "Futuro do Trabalho"];
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");

  const filteredPosts = selectedCategory === "Todos" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

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
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog SpecializMe
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Insights, tendências e conhecimentos para acelerar o crescimento do seu negócio.
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
            <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center">
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
                  <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">
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
          <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center">
            {selectedCategory === "Todos" ? "Últimos Artigos" : `Artigos sobre ${selectedCategory}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured || selectedCategory !== "Todos").map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{post.category}</Badge>
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
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Receba Nossos Insights
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Assine nossa newsletter e receba conteúdos exclusivos sobre gestão, tecnologia e inovação.
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
