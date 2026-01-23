import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Agenda = () => {
  const [selectedFilter, setSelectedFilter] = useState('todos');

  const events = [
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
    },
    {
      id: 3,
      title: "Masterclass: Gestão de Equipes de Alta Performance",
      type: "masterclass",
      date: "28 de Fevereiro, 2025",
      time: "09:00 - 12:00",
      location: "Rio de Janeiro - RJ",
      participants: 15,
      maxParticipants: 20,
      description: "Aprenda técnicas avançadas de gestão e como formar equipes de alta performance no ambiente corporativo.",
      status: "inscrições-abertas"
    },
    {
      id: 4,
      title: "Webinar: Carreira Internacional no Setor Automotivo",
      type: "webinar",
      date: "05 de Março, 2025",
      time: "20:00 - 21:30",
      location: "Online",
      participants: 80,
      maxParticipants: 100,
      description: "Descubra oportunidades de carreira internacional e como se preparar para trabalhar em empresas globais.",
      status: "inscrições-abertas"
    },
    {
      id: 5,
      title: "Workshop: Networking Estratégico para Mulheres",
      type: "workshop",
      date: "10 de Março, 2025",
      time: "15:00 - 18:00",
      location: "Belo Horizonte - MG",
      participants: 20,
      maxParticipants: 25,
      description: "Aprenda técnicas de networking eficazes e construa uma rede de contatos sólida.",
      status: "inscrições-abertas"
    },
    {
      id: 6,
      title: "Masterclass: Transformação Digital na Indústria",
      type: "masterclass",
      date: "12 de Março, 2025",
      time: "10:00 - 13:00",
      location: "Online",
      participants: 12,
      maxParticipants: 15,
      description: "Entenda como liderar processos de transformação digital em empresas do setor automotivo.",
      status: "lotado"
    }
  ];

  const eventTypes = [
    { key: 'todos', label: 'Todos os Eventos' },
    { key: 'workshop', label: 'Workshops' },
    { key: 'palestra', label: 'Palestras' },
    { key: 'masterclass', label: 'Masterclasses' },
    { key: 'webinar', label: 'Webinars' }
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      workshop: 'bg-blue-500/20 text-blue-400',
      palestra: 'bg-green-500/20 text-green-400',
      masterclass: 'bg-purple-500/20 text-purple-400',
      webinar: 'bg-orange-500/20 text-orange-400'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  const getStatusColor = (status: string) => {
    return status === 'lotado' 
      ? 'bg-red-500/20 text-red-400' 
      : 'bg-green-500/20 text-green-400';
  };

  const getStatusText = (status: string) => {
    return status === 'lotado' ? 'Lotado' : 'Inscrições Abertas';
  };

  const filteredEvents = selectedFilter === 'todos' 
    ? events 
    : events.filter(event => event.type === selectedFilter);

  return (
    <div className="min-h-screen bg-zinc-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 pt-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-secondary mb-4">
            Agenda de Eventos
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Confira a programação mensal do Mulheres V8 com eventos, aulas, mentorias e encontros 
            que fortalecem negócios, carreiras e identidade feminina no setor automotivo.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-brand-primary" />
            <span className="text-sm font-medium text-gray-400">Filtrar por tipo:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <Button
                key={type.key}
                variant={selectedFilter === type.key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(type.key)}
                className={`text-xs sm:text-sm ${selectedFilter === type.key ? 'bg-brand-primary' : 'border-zinc-700 text-gray-300 hover:bg-zinc-800'}`}
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:border-brand-primary transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <Badge className={getEventTypeColor(event.type)}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </Badge>
                  <Badge className={getStatusColor(event.status)}>
                    {getStatusText(event.status)}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl leading-tight text-white">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-400 text-sm sm:text-base">
                  {event.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>{event.participants}/{event.maxParticipants} participantes</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Button 
                    className={`w-full sm:w-auto ${event.status === 'lotado' ? 'bg-zinc-700' : 'bg-brand-primary hover:bg-brand-dark'}`}
                    disabled={event.status === 'lotado'}
                  >
                    {event.status === 'lotado' ? 'Evento Lotado' : 'Inscrever-se'}
                    {event.status !== 'lotado' && <ChevronRight className="w-4 h-4 ml-1" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum evento encontrado para o filtro selecionado.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-brand-yellow rounded-xl p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
            Não Perca Nenhum Evento!
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-black/70">
            Cadastre-se em nossa newsletter e receba notificações sobre novos eventos.
          </p>
          <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-dark">
            Cadastrar Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Agenda;