
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Plus, Edit, Trash2, Save } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface Event {
  id: number;
  title: string;
  type: 'workshop' | 'palestra' | 'masterclass' | 'webinar';
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  description: string;
  status: 'inscrições-abertas' | 'lotado';
}

const AdminAgenda = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Workshop: Liderança Feminina no Setor Automotivo",
      type: "workshop",
      date: "15 de Fevereiro, 2025",
      time: "14:00 - 17:00",
      location: "São Paulo - SP",
      participants: 25,
      maxParticipants: 30,
      description: "Desenvolva suas habilidades de liderança e aprenda estratégias específicas para mulheres no setor automotivo.",
      status: "inscrições-abertas"
    },
    {
      id: 2,
      title: "Palestra: Inovação e Tecnologia Automotiva",
      type: "palestra",
      date: "22 de Fevereiro, 2025",
      time: "19:00 - 21:00",
      location: "Online",
      participants: 150,
      maxParticipants: 200,
      description: "Conheça as últimas tendências em tecnologia automotiva e como elas impactam o futuro da indústria.",
      status: "inscrições-abertas"
    }
  ]);

  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    title: '',
    type: 'workshop',
    date: '',
    time: '',
    location: '',
    maxParticipants: 0,
    description: '',
    status: 'inscrições-abertas'
  });

  React.useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate('/login');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha pelo menos título, data e horário.",
        variant: "destructive",
      });
      return;
    }

    const event: Event = {
      id: Math.max(...events.map(e => e.id)) + 1,
      title: newEvent.title!,
      type: newEvent.type!,
      date: newEvent.date!,
      time: newEvent.time!,
      location: newEvent.location || '',
      participants: 0,
      maxParticipants: newEvent.maxParticipants || 20,
      description: newEvent.description || '',
      status: newEvent.status!
    };

    setEvents([...events, event]);
    setNewEvent({
      title: '',
      type: 'workshop',
      date: '',
      time: '',
      location: '',
      maxParticipants: 0,
      description: '',
      status: 'inscrições-abertas'
    });

    toast({
      title: "Evento criado!",
      description: "O evento foi adicionado com sucesso.",
    });
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Evento removido!",
      description: "O evento foi removido com sucesso.",
    });
  };

  const getEventTypeColor = (type: string) => {
    const colors = {
      workshop: 'bg-blue-100 text-blue-800',
      palestra: 'bg-green-100 text-green-800',
      masterclass: 'bg-purple-100 text-purple-800',
      webinar: 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-brand-primary">
              Administração - Agenda
            </h1>
            <p className="text-gray-600 mt-2">
              Gerencie os eventos da agenda
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

        {/* Formulário para novo evento */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Criar Novo Evento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Título</label>
                <Input
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  placeholder="Título do evento"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Tipo</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newEvent.type}
                  onChange={(e) => setNewEvent({...newEvent, type: e.target.value as any})}
                >
                  <option value="workshop">Workshop</option>
                  <option value="palestra">Palestra</option>
                  <option value="masterclass">Masterclass</option>
                  <option value="webinar">Webinar</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Data</label>
                <Input
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  placeholder="Ex: 15 de Março, 2025"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Horário</label>
                <Input
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                  placeholder="Ex: 14:00 - 17:00"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Local</label>
                <Input
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                  placeholder="Ex: São Paulo - SP"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Máximo de Participantes</label>
                <Input
                  type="number"
                  value={newEvent.maxParticipants}
                  onChange={(e) => setNewEvent({...newEvent, maxParticipants: parseInt(e.target.value)})}
                  placeholder="Ex: 30"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Descrição</label>
              <Textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                placeholder="Descrição do evento"
                rows={3}
              />
            </div>
            <Button onClick={handleAddEvent} className="w-full md:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Criar Evento
            </Button>
          </CardContent>
        </Card>

        {/* Lista de eventos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                    <CardTitle className="text-lg leading-tight">
                      {event.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600 text-sm">
                  {event.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-brand-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-brand-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-brand-primary" />
                    <span>{event.participants}/{event.maxParticipants} participantes</span>
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

export default AdminAgenda;
