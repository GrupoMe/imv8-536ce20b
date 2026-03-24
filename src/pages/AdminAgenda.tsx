import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Plus, Edit, Trash2, Save } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import {
  AgendaEvent,
  AgendaEventStatus,
  AgendaEventType,
  loadAgendaEvents,
  persistAgendaEvents,
} from '@/lib/agenda-data';

type AgendaFormData = {
  title: string;
  type: AgendaEventType;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
  description: string;
  status: AgendaEventStatus;
};

const initialFormData: AgendaFormData = {
  title: '',
  type: 'workshop',
  date: '',
  time: '',
  location: '',
  maxParticipants: 20,
  description: '',
  status: 'inscricoes-abertas',
};

const AdminAgenda = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [events, setEvents] = useState<AgendaEvent[]>([]);
  const [editingEventId, setEditingEventId] = useState<number | null>(null);
  const [formData, setFormData] = useState<AgendaFormData>(initialFormData);

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate('/login');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  useEffect(() => {
    setEvents(loadAgendaEvents());
  }, []);

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  const saveEvents = (nextEvents: AgendaEvent[]) => {
    setEvents(nextEvents);
    persistAgendaEvents(nextEvents);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setEditingEventId(null);
  };

  const handleSaveEvent = () => {
    if (!formData.title || !formData.date || !formData.time) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha pelo menos título, data e horário.',
        variant: 'destructive',
      });
      return;
    }

    if (formData.maxParticipants <= 0) {
      toast({
        title: 'Capacidade inválida',
        description: 'Informe um máximo de participantes maior que zero.',
        variant: 'destructive',
      });
      return;
    }

    if (editingEventId !== null) {
      const updatedEvents = events.map((event) =>
        event.id === editingEventId
          ? {
              ...event,
              title: formData.title,
              type: formData.type,
              date: formData.date,
              time: formData.time,
              location: formData.location,
              maxParticipants: formData.maxParticipants,
              description: formData.description,
              status: formData.status,
            }
          : event
      );

      saveEvents(updatedEvents);
      toast({
        title: 'Evento atualizado!',
        description: 'As alterações foram salvas com sucesso.',
      });

      resetForm();
      return;
    }

    const newEvent: AgendaEvent = {
      id: Math.max(0, ...events.map((event) => event.id)) + 1,
      title: formData.title,
      type: formData.type,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      participants: 0,
      maxParticipants: formData.maxParticipants,
      description: formData.description,
      status: formData.status,
    };

    saveEvents([...events, newEvent]);
    toast({
      title: 'Evento criado!',
      description: 'O evento foi adicionado com sucesso.',
    });

    resetForm();
  };

  const handleDeleteEvent = (id: number) => {
    saveEvents(events.filter((event) => event.id !== id));
    if (editingEventId === id) {
      resetForm();
    }

    toast({
      title: 'Evento removido!',
      description: 'O evento foi removido com sucesso.',
    });
  };

  const handleEditEvent = (event: AgendaEvent) => {
    setEditingEventId(event.id);
    setFormData({
      title: event.title,
      type: event.type,
      date: event.date,
      time: event.time,
      location: event.location,
      maxParticipants: event.maxParticipants,
      description: event.description,
      status: event.status,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getEventTypeColor = (type: AgendaEventType) => {
    const colors = {
      workshop: 'bg-blue-100 text-blue-800',
      palestra: 'bg-green-100 text-green-800',
      masterclass: 'bg-purple-100 text-purple-800',
      webinar: 'bg-orange-100 text-orange-800',
    };

    return colors[type] ?? 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: AgendaEventStatus) => {
    return status === 'lotado' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800';
  };

  const getStatusLabel = (status: AgendaEventStatus) => {
    return status === 'lotado' ? 'Lotado' : 'Inscrições Abertas';
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 [&_button]:text-black [&_a]:text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-brand-primary">Administração - Agenda</h1>
            <p className="text-gray-600 mt-2">Gerencie os eventos da agenda</p>
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

        {/* Formulário */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {editingEventId === null ? <Plus className="w-5 h-5" /> : <Save className="w-5 h-5" />}
              {editingEventId === null ? 'Criar Novo Evento' : 'Editar Evento'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Título</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Título do evento"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Tipo</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value as AgendaEventType })
                  }
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
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  placeholder="Ex: 15 de Março, 2025"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Horário</label>
                <Input
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  placeholder="Ex: 14:00 - 17:00"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Local</label>
                <Input
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Ex: São Paulo - SP"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Máximo de Participantes</label>
                <Input
                  type="number"
                  min={1}
                  value={formData.maxParticipants}
                  onChange={(e) => {
                    const parsed = Number.parseInt(e.target.value, 10);
                    setFormData({
                      ...formData,
                      maxParticipants: Number.isNaN(parsed) ? 0 : parsed,
                    });
                  }}
                  placeholder="Ex: 30"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value as AgendaEventStatus })
                  }
                >
                  <option value="inscricoes-abertas">Inscrições Abertas</option>
                  <option value="lotado">Lotado</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Descrição</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descrição do evento"
                rows={3}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleSaveEvent} className="w-full md:w-auto">
                {editingEventId === null ? (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Criar Evento
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </>
                )}
              </Button>
              {editingEventId !== null && (
                <Button variant="outline" onClick={resetForm} className="w-full md:w-auto">
                  Cancelar Edição
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Lista de eventos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <Badge className={getEventTypeColor(event.type)}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                      <Badge className={getStatusColor(event.status)}>{getStatusLabel(event.status)}</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline" onClick={() => handleEditEvent(event)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDeleteEvent(event.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600 text-sm">{event.description}</p>

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
                    <span>
                      {event.participants}/{event.maxParticipants} participantes
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {events.length === 0 && (
          <Card className="mt-6">
            <CardContent className="py-8 text-center text-gray-500">
              Nenhum evento cadastrado ainda.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminAgenda;
