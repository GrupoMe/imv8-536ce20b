
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: number;
  title: string;
  category: 'lideranca' | 'tecnica' | 'emocional' | 'espiritual';
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  featured: boolean;
}

const AdminBlog = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Como Liderar Equipes Diversas no Setor Automotivo",
      category: "lideranca",
      author: "Eva Miranda",
      date: "10 de Janeiro, 2025",
      excerpt: "Estratégias comprovadas para liderar equipes diversas e criar um ambiente inclusivo no setor automotivo.",
      content: "Conteúdo completo do post...",
      image: "/lovable-uploads/f83eb134-f974-429e-bfd3-fce71697b5e7.png",
      featured: true
    },
    {
      id: 2,
      title: "Inteligência Emocional: Sua Ferramenta de Sucesso",
      category: "emocional",
      author: "Maria Silva",
      date: "08 de Janeiro, 2025",
      excerpt: "Desenvolva sua inteligência emocional e transforme sua carreira profissional.",
      content: "Conteúdo completo do post...",
      image: "/lovable-uploads/f83eb134-f974-429e-bfd3-fce71697b5e7.png",
      featured: false
    }
  ]);

  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    category: 'lideranca',
    author: '',
    excerpt: '',
    content: '',
    image: '',
    featured: false
  });

  React.useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate('/login');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  const handleAddPost = () => {
    if (!newPost.title || !newPost.author || !newPost.excerpt) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha pelo menos título, autor e resumo.",
        variant: "destructive",
      });
      return;
    }

    const post: BlogPost = {
      id: Math.max(...posts.map(p => p.id)) + 1,
      title: newPost.title!,
      category: newPost.category!,
      author: newPost.author!,
      date: new Date().toLocaleDateString('pt-BR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }),
      excerpt: newPost.excerpt!,
      content: newPost.content || newPost.excerpt!,
      image: newPost.image || "/lovable-uploads/f83eb134-f974-429e-bfd3-fce71697b5e7.png",
      featured: newPost.featured || false
    };

    setPosts([post, ...posts]);
    setNewPost({
      title: '',
      category: 'lideranca',
      author: '',
      excerpt: '',
      content: '',
      image: '',
      featured: false
    });

    toast({
      title: "Post criado!",
      description: "O post foi adicionado com sucesso.",
    });
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
    toast({
      title: "Post removido!",
      description: "O post foi removido com sucesso.",
    });
  };

  const toggleFeatured = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, featured: !post.featured } : post
    ));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      lideranca: 'bg-blue-100 text-blue-800',
      tecnica: 'bg-green-100 text-green-800',
      emocional: 'bg-purple-100 text-purple-800',
      espiritual: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category: string) => {
    const names = {
      lideranca: 'Liderança',
      tecnica: 'Técnica',
      emocional: 'Emocional',
      espiritual: 'Espiritual'
    };
    return names[category as keyof typeof names] || category;
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-brand-primary">
              Administração - Blog
            </h1>
            <p className="text-gray-600 mt-2">
              Gerencie os posts do blog
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate('/admin')}>
              Voltar ao Admin
            </Button>
            <Button variant="outline" onClick={logout}>
              Sair
            </Button>
          </div>
        </div>

        {/* Formulário para novo post */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Criar Novo Post
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Título</label>
                <Input
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  placeholder="Título do post"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Categoria</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newPost.category}
                  onChange={(e) => setNewPost({...newPost, category: e.target.value as any})}
                >
                  <option value="lideranca">Liderança</option>
                  <option value="tecnica">Técnica</option>
                  <option value="emocional">Emocional</option>
                  <option value="espiritual">Espiritual</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Autor</label>
                <Input
                  value={newPost.author}
                  onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                  placeholder="Nome do autor"
                />
              </div>
              <div>
                <label className="text-sm font-medium">URL da Imagem</label>
                <Input
                  value={newPost.image}
                  onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                  placeholder="URL da imagem (opcional)"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Resumo</label>
              <Textarea
                value={newPost.excerpt}
                onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                placeholder="Resumo do post (obrigatório)"
                rows={2}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Conteúdo Completo</label>
              <Textarea
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                placeholder="Conteúdo completo do post (opcional, usará o resumo se vazio)"
                rows={4}
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={newPost.featured}
                onChange={(e) => setNewPost({...newPost, featured: e.target.checked})}
                className="rounded"
              />
              <label htmlFor="featured" className="text-sm font-medium">
                Post em destaque
              </label>
            </div>
            <Button onClick={handleAddPost} className="w-full md:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Criar Post
            </Button>
          </CardContent>
        </Card>

        {/* Lista de posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryColor(post.category)}>
                        {getCategoryName(post.category)}
                      </Badge>
                      {post.featured && (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          Destaque
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => toggleFeatured(post.id)}
                    >
                      ⭐
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
