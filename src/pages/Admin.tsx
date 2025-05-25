
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Calendar, 
  FileText, 
  Users, 
  BarChart3,
  Save,
  Eye,
  Settings
} from 'lucide-react';

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  
  // Mock data for demonstration
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Como a Transformação Digital Pode Revolucionar Seu Negócio",
      excerpt: "Descubra as principais tendências e estratégias...",
      status: "Publicado",
      author: "Rodrigo Oliveira",
      date: "2025-01-15",
      category: "Tecnologia"
    },
    {
      id: 2,
      title: "Gestão de Pessoas: 5 Estratégias para Reter Talentos",
      excerpt: "Aprenda técnicas comprovadas para melhorar...",
      status: "Rascunho",
      author: "Natália Ferrarini",
      date: "2025-01-20",
      category: "RH"
    }
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Workshop: Transformação Digital para PMEs",
      date: "2025-02-15",
      time: "14:00",
      location: "Online - Zoom",
      capacity: 50,
      registered: 32,
      status: "Ativo"
    },
    {
      id: 2,
      title: "Palestra: Gestão de Pessoas em Tempos de Mudança",
      date: "2025-02-22",
      time: "19:00",
      location: "Centro Empresarial - Porto Alegre",
      capacity: 80,
      registered: 45,
      status: "Ativo"
    }
  ]);

  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);

  const [blogForm, setBlogForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    author: '',
    status: 'Rascunho'
  });

  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
    price: '',
    type: 'Workshop'
  });

  const stats = [
    { title: "Posts Publicados", value: "12", icon: <FileText className="w-6 h-6" /> },
    { title: "Eventos Ativos", value: "4", icon: <Calendar className="w-6 h-6" /> },
    { title: "Total de Inscrições", value: "234", icon: <Users className="w-6 h-6" /> },
    { title: "Visualizações do Blog", value: "1,284", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    if (editingBlog) {
      setBlogPosts(blogPosts.map(post => 
        post.id === editingBlog.id 
          ? { ...post, ...blogForm, date: new Date().toISOString().split('T')[0] }
          : post
      ));
      setEditingBlog(null);
    } else {
      const newPost = {
        id: Date.now(),
        ...blogForm,
        date: new Date().toISOString().split('T')[0]
      };
      setBlogPosts([newPost, ...blogPosts]);
    }
    setBlogForm({ title: '', excerpt: '', content: '', category: '', author: '', status: 'Rascunho' });
    setShowBlogForm(false);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    if (editingEvent) {
      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? { ...event, ...eventForm, registered: event.registered, status: event.status }
          : event
      ));
      setEditingEvent(null);
    } else {
      const newEvent = {
        id: Date.now(),
        ...eventForm,
        registered: 0,
        status: 'Ativo'
      };
      setEvents([newEvent, ...events]);
    }
    setEventForm({ title: '', description: '', date: '', time: '', location: '', capacity: '', price: '', type: 'Workshop' });
    setShowEventForm(false);
  };

  const handleEditBlog = (post) => {
    setBlogForm(post);
    setEditingBlog(post);
    setShowBlogForm(true);
  };

  const handleEditEvent = (event) => {
    setEventForm(event);
    setEditingEvent(event);
    setShowEventForm(true);
  };

  const handleDeleteBlog = (id) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-brand-primary">
              Painel Administrativo
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="eventos">Eventos</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-brand-primary">{stat.value}</p>
                      </div>
                      <div className="text-brand-primary">
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Últimos Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-brand-primary">{post.title}</h4>
                          <p className="text-sm text-gray-600">{post.author} • {post.date}</p>
                        </div>
                        <Badge variant={post.status === 'Publicado' ? 'default' : 'secondary'}>
                          {post.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Próximos Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.slice(0, 3).map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-brand-primary">{event.title}</h4>
                          <p className="text-sm text-gray-600">{event.date} • {event.registered}/{event.capacity} inscritos</p>
                        </div>
                        <Badge variant="default">
                          {event.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Blog Management */}
          <TabsContent value="blog" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-brand-primary">Gerenciar Blog</h2>
              <Button onClick={() => setShowBlogForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Novo Post
              </Button>
            </div>

            {showBlogForm && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingBlog ? 'Editar Post' : 'Novo Post'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBlogSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Título</label>
                        <Input
                          value={blogForm.title}
                          onChange={(e) => setBlogForm({...blogForm, title: e.target.value})}
                          placeholder="Título do post"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Categoria</label>
                        <Input
                          value={blogForm.category}
                          onChange={(e) => setBlogForm({...blogForm, category: e.target.value})}
                          placeholder="Categoria"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Resumo</label>
                      <Textarea
                        value={blogForm.excerpt}
                        onChange={(e) => setBlogForm({...blogForm, excerpt: e.target.value})}
                        placeholder="Resumo do post"
                        rows={3}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Conteúdo</label>
                      <Textarea
                        value={blogForm.content}
                        onChange={(e) => setBlogForm({...blogForm, content: e.target.value})}
                        placeholder="Conteúdo completo do post"
                        rows={8}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Autor</label>
                        <Input
                          value={blogForm.author}
                          onChange={(e) => setBlogForm({...blogForm, author: e.target.value})}
                          placeholder="Nome do autor"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Status</label>
                        <select
                          value={blogForm.status}
                          onChange={(e) => setBlogForm({...blogForm, status: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="Rascunho">Rascunho</option>
                          <option value="Publicado">Publicado</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button type="submit">
                        <Save className="w-4 h-4 mr-2" />
                        {editingBlog ? 'Atualizar' : 'Salvar'}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setShowBlogForm(false);
                          setEditingBlog(null);
                          setBlogForm({ title: '', excerpt: '', content: '', category: '', author: '', status: 'Rascunho' });
                        }}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Posts Existentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium text-brand-primary">{post.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                          <Badge variant={post.status === 'Publicado' ? 'default' : 'secondary'}>
                            {post.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => handleEditBlog(post)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDeleteBlog(post.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Management */}
          <TabsContent value="eventos" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-brand-primary">Gerenciar Eventos</h2>
              <Button onClick={() => setShowEventForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Novo Evento
              </Button>
            </div>

            {showEventForm && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingEvent ? 'Editar Evento' : 'Novo Evento'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleEventSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Título</label>
                      <Input
                        value={eventForm.title}
                        onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                        placeholder="Título do evento"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Descrição</label>
                      <Textarea
                        value={eventForm.description}
                        onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                        placeholder="Descrição do evento"
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Data</label>
                        <Input
                          type="date"
                          value={eventForm.date}
                          onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Horário</label>
                        <Input
                          type="time"
                          value={eventForm.time}
                          onChange={(e) => setEventForm({...eventForm, time: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Tipo</label>
                        <select
                          value={eventForm.type}
                          onChange={(e) => setEventForm({...eventForm, type: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="Workshop">Workshop</option>
                          <option value="Palestra">Palestra</option>
                          <option value="Masterclass">Masterclass</option>
                          <option value="Webinar">Webinar</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Local</label>
                        <Input
                          value={eventForm.location}
                          onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                          placeholder="Local do evento"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Capacidade</label>
                        <Input
                          type="number"
                          value={eventForm.capacity}
                          onChange={(e) => setEventForm({...eventForm, capacity: e.target.value})}
                          placeholder="Número de vagas"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Preço</label>
                        <Input
                          value={eventForm.price}
                          onChange={(e) => setEventForm({...eventForm, price: e.target.value})}
                          placeholder="Ex: R$ 50,00 ou Gratuito"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button type="submit">
                        <Save className="w-4 h-4 mr-2" />
                        {editingEvent ? 'Atualizar' : 'Salvar'}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setShowEventForm(false);
                          setEditingEvent(null);
                          setEventForm({ title: '', description: '', date: '', time: '', location: '', capacity: '', price: '', type: 'Workshop' });
                        }}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Eventos Existentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium text-brand-primary">{event.title}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span>{event.date} às {event.time}</span>
                          <span>{event.location}</span>
                          <span>{event.registered}/{event.capacity} inscritos</span>
                          <Badge variant="default">{event.status}</Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => handleEditEvent(event)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDeleteEvent(event.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports */}
          <TabsContent value="relatorios" className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-primary">Relatórios</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engajamento do Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Visualizações este mês</span>
                      <span className="font-bold">1,284</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Posts publicados</span>
                      <span className="font-bold">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Compartilhamentos</span>
                      <span className="font-bold">89</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance dos Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Eventos realizados</span>
                      <span className="font-bold">8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Total de participantes</span>
                      <span className="font-bold">234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Taxa de comparecimento</span>
                      <span className="font-bold">87%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
