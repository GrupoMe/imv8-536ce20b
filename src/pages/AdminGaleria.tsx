import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { ArrowLeft, Plus, Pencil, Trash2, Image, Calendar, MapPin } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface GalleryEvent {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  images: string[];
}

const categories = [
  { key: 'workshop', label: 'Workshop' },
  { key: 'palestra', label: 'Palestra' },
  { key: 'networking', label: 'Networking' },
  { key: 'formatura', label: 'Formatura' }
];

const AdminGaleria = () => {
  const { isAuthenticated, isAdmin, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  
  const [events, setEvents] = useState<GalleryEvent[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<GalleryEvent | null>(null);
  const [eventToDelete, setEventToDelete] = useState<GalleryEvent | null>(null);
  
  const [formData, setFormData] = useState({ title: '', category: '', date: '', location: '', images: '' });

  useEffect(() => {
    if (!authLoading && (!isAuthenticated || !isAdmin)) {
      navigate('/login');
    }
  }, [isAuthenticated, isAdmin, authLoading, navigate]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data } = await supabase.from('gallery_events').select('*').order('id');
    if (data) setEvents(data);
  };

  const openCreateDialog = () => {
    setEditingEvent(null);
    setFormData({ title: '', category: '', date: '', location: '', images: '' });
    setIsDialogOpen(true);
  };

  const openEditDialog = (event: GalleryEvent) => {
    setEditingEvent(event);
    setFormData({ title: event.title, category: event.category, date: event.date, location: event.location, images: event.images.join('\n') });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (event: GalleryEvent) => {
    setEventToDelete(event);
    setIsDeleteDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.category || !formData.date || !formData.location) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }
    const imagesArray = formData.images.split('\n').map(url => url.trim()).filter(url => url.length > 0);
    if (imagesArray.length === 0) {
      toast.error('Adicione pelo menos uma URL de imagem');
      return;
    }

    if (editingEvent) {
      const { error } = await supabase.from('gallery_events').update({
        title: formData.title, category: formData.category, date: formData.date, location: formData.location, images: imagesArray
      }).eq('id', editingEvent.id);
      if (error) { toast.error('Erro ao atualizar evento'); return; }
      toast.success('Evento atualizado com sucesso!');
    } else {
      const { error } = await supabase.from('gallery_events').insert({
        title: formData.title, category: formData.category, date: formData.date, location: formData.location, images: imagesArray
      });
      if (error) { toast.error('Erro ao criar evento'); return; }
      toast.success('Evento criado com sucesso!');
    }
    setIsDialogOpen(false);
    fetchEvents();
  };

  const handleDelete = async () => {
    if (eventToDelete) {
      const { error } = await supabase.from('gallery_events').delete().eq('id', eventToDelete.id);
      if (error) { toast.error('Erro ao remover evento'); return; }
      toast.success('Evento removido com sucesso!');
      setIsDeleteDialogOpen(false);
      setEventToDelete(null);
      fetchEvents();
    }
  };

  if (authLoading || !isAuthenticated || !isAdmin) return null;

  const getCategoryLabel = (key: string) => categories.find(c => c.key === key)?.label || key;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 [&_button]:text-black [&_a]:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild><Link to="/admin"><ArrowLeft className="w-4 h-4 mr-2" />Voltar</Link></Button>
            <div>
              <h1 className="text-2xl font-bold text-brand-primary">Gerenciar Galeria</h1>
              <p className="text-gray-600">Adicione, edite ou remova eventos da galeria</p>
            </div>
          </div>
          <Button onClick={openCreateDialog}><Plus className="w-4 h-4 mr-2" />Novo Evento</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Image className="w-5 h-5" />Eventos da Galeria ({events.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Local</TableHead>
                  <TableHead>Imagens</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.title}</TableCell>
                    <TableCell><span className="px-2 py-1 bg-brand-yellow/20 text-brand-primary rounded text-sm">{getCategoryLabel(event.category)}</span></TableCell>
                    <TableCell><span className="flex items-center gap-1 text-gray-600"><Calendar className="w-4 h-4" />{event.date}</span></TableCell>
                    <TableCell><span className="flex items-center gap-1 text-gray-600"><MapPin className="w-4 h-4" />{event.location}</span></TableCell>
                    <TableCell>{event.images.length} foto(s)</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => openEditDialog(event)}><Pencil className="w-4 h-4" /></Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => openDeleteDialog(event)}><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {events.length === 0 && (
                  <TableRow><TableCell colSpan={6} className="text-center py-8 text-gray-500">Nenhum evento cadastrado. Clique em "Novo Evento" para adicionar.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>{editingEvent ? 'Editar Evento' : 'Novo Evento'}</DialogTitle></DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título do Evento *</Label>
                <Input id="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Ex: Workshop Liderança Feminina" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Categoria *</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger><SelectValue placeholder="Selecione uma categoria" /></SelectTrigger>
                  <SelectContent>{categories.map((cat) => (<SelectItem key={cat.key} value={cat.key}>{cat.label}</SelectItem>))}</SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Data *</Label>
                  <Input id="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} placeholder="Ex: Novembro 2024" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Local *</Label>
                  <Input id="location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="Ex: São Paulo - SP" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="images">URLs das Imagens * (uma por linha)</Label>
                <textarea id="images" className="w-full min-h-[120px] px-3 py-2 border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary" value={formData.images} onChange={(e) => setFormData({ ...formData, images: e.target.value })} placeholder="https://exemplo.com/imagem1.jpg&#10;https://exemplo.com/imagem2.jpg" />
                <p className="text-xs text-gray-500">Cole as URLs das imagens, uma por linha</p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
              <Button onClick={handleSubmit}>{editingEvent ? 'Salvar Alterações' : 'Criar Evento'}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader><DialogTitle>Confirmar Exclusão</DialogTitle></DialogHeader>
            <p className="py-4">Tem certeza que deseja remover o evento "{eventToDelete?.title}"? Esta ação não pode ser desfeita.</p>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancelar</Button>
              <Button variant="destructive" onClick={handleDelete}>Remover</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminGaleria;
