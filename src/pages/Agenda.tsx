
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

const Agenda = () => {
  const events = [
    {
      id: 1,
      title: "Workshop: Transformação Digital para PMEs",
      description: "Aprenda as melhores práticas para implementar a transformação digital na sua empresa, com cases reais e ferramentas práticas.",
      date: "2025-02-15",
      time: "14:00 - 17:00",
      location: "Online - Zoom",
      type: "Workshop",
      capacity: 50,
      registered: 32,
      price: "Gratuito",
      status: "Disponível",
      speaker: "Rodrigo Oliveira",
      topics: ["Digitalização de Processos", "Automação", "Cloud Computing", "ROI em Tecnologia"]
    },
    {
      id: 2,
      title: "Palestra: Gestão de Pessoas em Tempos de Mudança",
      description: "Como liderar equipes durante períodos de transformação e manter o engajamento dos colaboradores.",
      date: "2025-02-22",
      time: "19:00 - 21:00",
      location: "Centro Empresarial - Porto Alegre",
      type: "Palestra",
      capacity: 80,
      registered: 45,
      price: "R$ 50,00",
      status: "Disponível",
      speaker: "Natália Ferrarini",
      topics: ["Liderança", "Engajamento", "Mudança Organizacional", "Comunicação"]
    },
    {
      id: 3,
      title: "Masterclass: Estratégia e Inovação Empresarial",
      description: "Uma imersão completa nas melhores práticas de estratégia empresarial e cultura de inovação.",
      date: "2025-03-05",
      time: "09:00 - 17:00",
      location: "Híbrido - Porto Alegre + Online",
      type: "Masterclass",
      capacity: 30,
      registered: 18,
      price: "R$ 200,00",
      status: "Disponível",
      speaker: "Equipe SpecializMe",
      topics: ["Planejamento Estratégico", "Inovação", "Metodologias Ágeis", "KPIs"]
    },
    {
      id: 4,
      title: "Webinar: IA e o Futuro dos Negócios",
      description: "Explore as tendências da inteligência artificial e como aplicá-la no seu negócio.",
      date: "2025-03-12",
      time: "15:00 - 16:30",
      location: "Online - YouTube Live",
      type: "Webinar",
      capacity: 200,
      registered: 156,
      price: "Gratuito",
      status: "Quase Lotado",
      speaker: "Rodrigo Oliveira",
      topics: ["Inteligência Artificial", "Automação", "Machine Learning", "Chatbots"]
    }
  ];

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponível':
        return 'bg-green-100 text-green-800';
      case 'Quase Lotado':
        return 'bg-yellow-100 text-yellow-800';
      case 'Esgotado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Workshop':
        return 'bg-blue-100 text-blue-800';
      case 'Palestra':
        return 'bg-purple-100 text-purple-800';
      case 'Masterclass':
        return 'bg-orange-100 text-orange-800';
      case 'Webinar':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Agenda de Eventos
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Participe dos nossos eventos e workshops para acelerar o crescimento do seu negócio.
          </p>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">
            Próximos Eventos
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-brand-light">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-brand-primary">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-3 text-brand-primary" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-3 text-brand-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-brand-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-3 text-brand-primary" />
                      <span>{event.registered}/{event.capacity} inscritos</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-brand-primary mb-2">Instrutor</h4>
                    <p className="text-gray-600">{event.speaker}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-brand-primary mb-2">Tópicos Abordados</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-brand-primary">
                        {event.price}
                      </span>
                    </div>
                    <Button 
                      className="bg-brand-primary hover:bg-brand-dark"
                      disabled={event.status === 'Esgotado'}
                    >
                      {event.status === 'Esgotado' ? 'Esgotado' : 'Inscrever-se'}
                      {event.status !== 'Esgotado' && <ExternalLink className="w-4 h-4 ml-2" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter para Eventos */}
      <section className="py-16 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Não Perca Nenhum Evento
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Cadastre-se para receber informações sobre nossos próximos eventos e workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {/* Eventos Corporativos */}
      <section className="py-16 px-4 section-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">
            Eventos Corporativos
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Levamos nossos workshops e palestras para sua empresa. Treinamentos personalizados para suas necessidades específicas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">
                  Workshops In-Company
                </h3>
                <p className="text-gray-600">
                  Treinamentos específicos para sua equipe, focados nos desafios reais da sua empresa.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">
                  Eventos Personalizados
                </h3>
                <p className="text-gray-600">
                  Desenvolvemos eventos sob medida para atender às necessidades específicas do seu negócio.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">
                  Flexibilidade Total
                </h3>
                <p className="text-gray-600">
                  Adaptamos horários, formato e conteúdo para maximizar o aproveitamento da sua equipe.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-dark">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agenda;
