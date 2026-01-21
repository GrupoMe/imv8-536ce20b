
import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface GalleryEvent {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  images: string[];
}

const defaultEvents: GalleryEvent[] = [
  {
    id: 1,
    title: "Workshop Liderança Feminina 2024",
    category: "workshop",
    date: "Novembro 2024",
    location: "São Paulo - SP",
    images: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Palestra Inovação Automotiva",
    category: "palestra",
    date: "Outubro 2024",
    location: "Online",
    images: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Encontro de Networking",
    category: "networking",
    date: "Setembro 2024",
    location: "Rio de Janeiro - RJ",
    images: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Formatura Turma 2024",
    category: "formatura",
    date: "Dezembro 2024",
    location: "São Paulo - SP",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Masterclass Gestão de Equipes",
    category: "workshop",
    date: "Agosto 2024",
    location: "Belo Horizonte - MG",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Evento Anual V8 Women",
    category: "networking",
    date: "Julho 2024",
    location: "Porto Alegre - RS",
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop"
    ]
  }
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [events, setEvents] = useState<GalleryEvent[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('gallery_events');
    if (saved) {
      setEvents(JSON.parse(saved));
    } else {
      setEvents(defaultEvents);
    }
  }, []);

  const categories = [
    { key: 'todos', label: 'Todos' },
    { key: 'workshop', label: 'Workshops' },
    { key: 'palestra', label: 'Palestras' },
    { key: 'networking', label: 'Networking' },
    { key: 'formatura', label: 'Formaturas' }
  ];

  const allImages = events.flatMap((event, eventIndex) => 
    event.images.map((img, imgIndex) => ({
      src: img,
      event: event.title,
      date: event.date,
      location: event.location,
      category: event.category,
      globalIndex: events.slice(0, eventIndex).reduce((acc, e) => acc + e.images.length, 0) + imgIndex
    }))
  );

  const filteredImages = selectedCategory === 'todos'
    ? allImages
    : allImages.filter(img => img.category === selectedCategory);

  const openLightbox = (globalIndex: number) => {
    setSelectedImage(globalIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentFilteredIndex = filteredImages.findIndex(img => img.globalIndex === selectedImage);
    
    if (direction === 'prev') {
      const newIndex = currentFilteredIndex > 0 ? currentFilteredIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[newIndex].globalIndex);
    } else {
      const newIndex = currentFilteredIndex < filteredImages.length - 1 ? currentFilteredIndex + 1 : 0;
      setSelectedImage(filteredImages[newIndex].globalIndex);
    }
  };

  const selectedImageData = selectedImage !== null 
    ? allImages.find(img => img.globalIndex === selectedImage) 
    : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <Badge className="bg-white/20 text-white mb-4">Galeria de Eventos</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Momentos que <br />Marcam Nossa História
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            Reviva os melhores momentos dos nossos eventos, workshops e encontros.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant={selectedCategory === cat.key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.globalIndex} 
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(image.globalIndex)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.event}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.event}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-200">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {image.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {image.location}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhuma foto encontrada para a categoria selecionada.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && selectedImageData && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="max-w-5xl max-h-[90vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImageData.src} 
              alt={selectedImageData.event}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-bold mb-1">{selectedImageData.event}</h3>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedImageData.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedImageData.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-yellow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Quer fazer parte do próximo evento?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Confira nossa agenda e garanta sua vaga nos próximos encontros.
          </p>
          <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-dark">
            <a href="/agenda">Ver Agenda de Eventos</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Galeria;
