
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contatos = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    comoConheceu: '',
    mensagem: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui seria implementada a lógica de envio
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-brand-primary" />,
      title: "Telefone",
      info: "(51) 98157-8944",
      description: "Segunda a sexta, das 10h às 18h"
    },
    {
      icon: <Mail className="w-6 h-6 text-brand-primary" />,
      title: "E-mail",
      info: "contato@institutomulheresv8.com.br",
      description: "Responderemos em até 24h"
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-primary" />,
      title: "Endereço",
      info: "Av. Ipiranga 7454, sala 415",
      description: "Bairro Jardim Botânico, Porto Alegre - RS"
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-primary" />,
      title: "Horário de Atendimento",
      info: "10h às 18h",
      description: "Segunda a sexta-feira"
    }
  ];

  const comoConheceuOptions = [
    "Redes sociais",
    "Indicação de amiga/conhecida", 
    "Evento/Palestra",
    "Site de busca (Google)",
    "Parceiro/Empresa",
    "Mídia/Imprensa",
    "Outros"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Entre em <span className="text-brand-yellow">Contato</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a acelerar sua carreira. Fale conosco!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-primary">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-primary">
                    {contact.title}
                  </h3>
                  <p className="font-medium text-gray-800 mb-1">
                    {contact.info}
                  </p>
                  <p className="text-sm text-gray-600">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-brand-primary flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    Envie sua Mensagem
                  </CardTitle>
                  <p className="text-gray-600">
                    Preencha o formulário e entraremos em contato em breve.
                  </p>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome *
                        </label>
                        <Input
                          value={formData.nome}
                          onChange={(e) => handleInputChange('nome', e.target.value)}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          E-mail *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone
                        </label>
                        <Input
                          value={formData.telefone}
                          onChange={(e) => handleInputChange('telefone', e.target.value)}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Empresa
                        </label>
                        <Input
                          value={formData.empresa}
                          onChange={(e) => handleInputChange('empresa', e.target.value)}
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Como conheceu o Instituto Mulheres V8?
                      </label>
                      <Select onValueChange={(value) => handleInputChange('comoConheceu', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          {comoConheceuOptions.map((option, index) => (
                            <SelectItem key={index} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange('mensagem', e.target.value)}
                        placeholder="Conte-nos como podemos ajudar você..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-brand-primary hover:bg-brand-dark text-white font-medium"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-brand-primary flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    Nossa Localização
                  </CardTitle>
                  <p className="text-gray-600">
                    Venha nos visitar em Porto Alegre!
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2 text-brand-primary" />
                      <p className="font-medium">Av. Ipiranga 7454, sala 415</p>
                      <p>Bairro Jardim Botânico</p>
                      <p>Porto Alegre - RS</p>
                      <p className="text-sm mt-2">
                        {/* Aqui seria integrado o mapa real */}
                        Mapa interativo será integrado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos Acelerar Juntas?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Entre em contato conosco e descubra como podemos impulsionar sua carreira.
          </p>
          <Button size="lg" className="bg-brand-yellow text-brand-accent hover:bg-yellow-400 font-bold">
            Agendar Conversa
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contatos;
