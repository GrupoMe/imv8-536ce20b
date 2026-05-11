import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { ArrowLeft, Plus, Pencil, Trash2, MessageCircle, Clock, DollarSign } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

type MentoriaType = 'individual' | 'grupo';

interface Mentoria {
  id: number;
  title: string;
  type: string;
  duration: string;
  sessions: string;
  rating: number;
  price: string;
  description: string;
  includes: string[];
  cta_link: string;
}

type FormData = {
  title: string;
  type: MentoriaType;
  duration: string;
  sessions: string;
  rating: string;
  price: string;
  description: string;
  includes: string;
  ctaLink: string;
};

const initialFormData: FormData = {
  title: '', type: 'individual', duration: '', sessions: '', rating: '0',
  price: '', description: '', includes: '', ctaLink: 'https://wa.me/5500000000000',
};

const AdminMentorias = () => {
  const { isAuthenticated, isAdmin, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [mentorias, setMentorias] = useState<Mentoria[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Mentoria | null>(null);
  const [toDelete, setToDelete] = useState<Mentoria | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    if (!authLoading && (!isAuthenticated || !isAdmin)) navigate('/login');
  }, [isAuthenticated, isAdmin, authLoading, navigate]);

  useEffect(() => { fetchMentorias(); }, []);

  const fetchMentorias = async () => {
    const { data } = await supabase.from('mentorias' as any).select('*').order('id');
    if (data) setMentorias(data as any);
  };

  if (authLoading || !isAuthenticated || !isAdmin) return null;

  const openCreateDialog = () => { setEditing(null); setFormData(initialFormData); setIsDialogOpen(true); };

  const openEditDialog = (m: Mentoria) => {
    setEditing(m);
    setFormData({
      title: m.title, type: m.type as MentoriaType, duration: m.duration, sessions: m.sessions,
      rating: String(m.rating), price: m.price, description: m.description,
      includes: m.includes.join('\n'), ctaLink: m.cta_link,
    });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (m: Mentoria) => { setToDelete(m); setIsDeleteDialogOpen(true); };

  const handleSubmit = async () => {
    if (!formData.title || !formData.duration || !formData.price || !formData.description) {
      toast.error('Preencha os campos obrigatórios.'); return;
    }
    const includesArr = formData.includes.split('\n').map(i => i.trim()).filter(Boolean);
    const rating = Number.parseFloat(formData.rating);
    const payload = {
      title: formData.title, type: formData.type, duration: formData.duration,
      sessions: formData.sessions, rating: Number.isNaN(rating) ? 0 : rating,
      price: formData.price, description: formData.description, includes: includesArr,
      cta_link: formData.ctaLink || 'https://wa.me/5500000000000',
    };

    if (editing) {
      const { error } = await supabase.from('mentorias' as any).update(payload).eq('id', editing.id);
      if (error) { toast.error('Erro ao atualizar.'); return; }
      toast.success('Mentoria atualizada com sucesso!');
    } else {
      const { error } = await supabase.from('mentorias' as any).insert(payload);
      if (error) { toast.error('Erro ao criar.'); return; }
      toast.success('Mentoria criada com sucesso!');
    }
    setIsDialogOpen(false);
    setEditing(null);
    setFormData(initialFormData);
    fetchMentorias();
  };

  const handleDelete = async () => {
    if (!toDelete) return;
    const { error } = await supabase.from('mentorias' as any).delete().eq('id', toDelete.id);
    if (error) { toast.error('Erro ao remover.'); return; }
    toast.success('Mentoria removida com sucesso!');
    setIsDeleteDialogOpen(false);
    setToDelete(null);
    fetchMentorias();
  };

  return (
    <div className="admin-page min-h-screen py-8 px-4 sm:px-6 lg:px-8 [&_button]:text-black [&_a]:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild><Link to="/admin"><ArrowLeft className="w-4 h-4 mr-2" />Voltar</Link></Button>
            <div>
              <h1 className="text-2xl font-bold text-brand-primary">Gerenciar Mentorias</h1>
              <p className="text-gray-600">Cadastre, edite e exclua as mentorias do site</p>
            </div>
          </div>
          <Button onClick={openCreateDialog}><Plus className="w-4 h-4 mr-2" />Nova Mentoria</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><MessageCircle className="w-5 h-5" />Mentorias ({mentorias.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead><TableHead>Tipo</TableHead><TableHead>Duração</TableHead><TableHead>Preço</TableHead><TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mentorias.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell className="font-medium">{m.title}</TableCell>
                    <TableCell><span className="px-2 py-1 bg-brand-yellow/20 text-brand-primary rounded text-sm">{m.type === 'individual' ? 'Individual' : 'Em Grupo'}</span></TableCell>
                    <TableCell><span className="flex items-center gap-1 text-gray-600"><Clock className="w-4 h-4" />{m.duration}</span></TableCell>
                    <TableCell><span className="flex items-center gap-1 text-gray-600"><DollarSign className="w-4 h-4" />{m.price}</span></TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => openEditDialog(m)}><Pencil className="w-4 h-4" /></Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => openDeleteDialog(m)}><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {mentorias.length === 0 && (
                  <TableRow><TableCell colSpan={5} className="text-center py-8 text-gray-500">Nenhuma mentoria cadastrada. Clique em "Nova Mentoria" para adicionar.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle>{editing ? 'Editar Mentoria' : 'Nova Mentoria'}</DialogTitle></DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input id="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Ex: Mentoria de Carreira Individual" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo *</Label>
                  <Select value={formData.type} onValueChange={(v) => setFormData({ ...formData, type: v as MentoriaType })}>
                    <SelectTrigger id="type"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="individual">Individual</SelectItem><SelectItem value="grupo">Em Grupo</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duração *</Label>
                  <Input id="duration" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} placeholder="Ex: 3 meses" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Preço *</Label>
                  <Input id="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} placeholder="Ex: R$ 1.997" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sessions">Sessões</Label>
                  <Input id="sessions" value={formData.sessions} onChange={(e) => setFormData({ ...formData, sessions: e.target.value })} placeholder="Ex: 8 sessões" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating">Avaliação</Label>
                  <Input id="rating" type="number" min={0} max={5} step="0.1" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} placeholder="Ex: 4.9" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição *</Label>
                <textarea id="description" className="w-full min-h-[100px] px-3 py-2 border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="includes">O que inclui (um por linha)</Label>
                <textarea id="includes" className="w-full min-h-[120px] px-3 py-2 border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary" value={formData.includes} onChange={(e) => setFormData({ ...formData, includes: e.target.value })} placeholder="Encontros semanais&#10;Material exclusivo&#10;Suporte por WhatsApp" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ctaLink">Link do botão (CTA)</Label>
                <Input id="ctaLink" value={formData.ctaLink} onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })} placeholder="Ex: https://wa.me/..." />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
              <Button onClick={handleSubmit}>{editing ? 'Salvar Alterações' : 'Criar Mentoria'}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader><DialogTitle>Confirmar Exclusão</DialogTitle></DialogHeader>
            <p className="py-4">Tem certeza que deseja remover a mentoria "{toDelete?.title}"? Esta ação não pode ser desfeita.</p>
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

export default AdminMentorias;
