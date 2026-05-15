import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import cursosHeroBg from '@/assets/cursos-hero.jpg';

interface AgendaEvent {
  id: number;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  max_participants: number;
  description: string;
  status: string;
  registration_link?: string;
}

const Agenda = () => {
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [events, setEvents] = useState<AgendaEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from('agenda_events')
        .select('*')
        .order('id');
      if (data) setEvents(data);
    };
    fetchEvents();
  }, []);

  const eventTypes = [
    { key: 'todos', label: 'Todos os Eventos' },
    { key: 'workshop', label: 'Workshops' },
    { key: 'palestra', label: 'Palestras' },
    { key: 'masterclass', label: 'Masterclasses' },
    { key: 'webinar', label: 'Webinars' }
  ];

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      workshop: 'bg-blue-500/20 text-blue-700',
      palestra: 'bg-green-500/20 text-green-700',
      masterclass: 'bg-purple-500/20 text-purple-700',
      webinar: 'bg-orange-500/20 text-orange-700'
    };
    return colors[type] || 'bg-gray-500/20 text-gray-700';
  };

  const getStatusColor = (status: string) => {
    return status === 'lotado'
      ? 'bg-red-500/20 text-red-700'
      : 'bg-green-500/20 text-green-700';
  };

  const getStatusText = (status: string) => {
    return status === 'lotado' ? 'Lotado' : 'Inscrições Abertas';
  };

  const filteredEvents = selectedFilter === 'todos'
    ? events
    : events.filter(event => event.type === selectedFilter);

  return (
    <div className="min-h-screen bg-primary-50">
      <section
        className="relative min-h-[70vh] flex flex-col justify-center text-white py-20 px-4 overflow-hidden"
        style={{ backgroundImage: `url(${cursosHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <Badge className="bg-white/20 text-white mb-4">Agenda</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Agenda de Eventos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Confira a programação mensal do Mulheres V8 com eventos, aulas, mentorias e encontros
            que fortalecem negócios, carreiras e identidade feminina no setor automotivo.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 bg-primary-50">
        <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-brand-primary" />
            <span className="text-sm font-medium text-primary-700">Filtrar por tipo:</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {eventTypes.map((type) => (
              <Button
                key={type.key}
                variant={selectedFilter === type.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(type.key)}
                className={`text-xs sm:text-sm ${selectedFilter === type.key ? 'bg-brand-primary' : 'border-primary-300 text-primary-700 hover:bg-primary-100'}`}
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:border-brand-primary transition-all duration-300 bg-primary-50">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <Badge className={getEventTypeColor(event.type)}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </Badge>
                  <Badge className={getStatusColor(event.status)}>
                    {getStatusText(event.status)}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl leading-tight text-primary-900">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-primary-700 text-sm sm:text-base">
                  {event.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <Calendar className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <Clock className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <Users className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>{event.participants}/{event.max_participants} participantes</span>
                  </div>
                </div>
                <div className="pt-3">
                  {event.status === 'lotado' ? (
                    <Button className="w-full sm:w-auto bg-primary-300" disabled>
                      Evento Lotado
                    </Button>
                  ) : event.registration_link ? (
                    <Button asChild className="w-full sm:w-auto bg-brand-primary hover:bg-brand-dark">
                      <a href={event.registration_link} target="_blank" rel="noopener noreferrer">
                        Inscrever-se
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full sm:w-auto bg-brand-primary hover:bg-brand-dark" disabled>
                      Inscrever-se
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-primary-600 text-lg">
              Nenhum evento encontrado para o filtro selecionado.
            </p>
          </div>
        )}
        </div>
      </section>
    </div>
  );
};

export default Agenda;
