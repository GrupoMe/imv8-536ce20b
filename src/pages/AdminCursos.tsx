import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { ArrowLeft, Plus, Pencil, Trash2, BookOpen, Clock, Users, DollarSign } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

type CursoCategory = 'curso' | 'programa';

interface CursoFormation {
  id: number;
  title: string;
  category: string;
  duration: string;
  participants: number;
  rating: number;
  price: string;
  description: string;
  modules: string[];
  checkout_link: string;
}

type FormData = {
  title: string;
  category: CursoCategory;
  duration: string;
  participants: string;
  rating: string;
  price: string;
  description: string;
  modules: string;
  checkoutLink: string;
};

const initialFormData: FormData = {
  title: '', category: 'curso', duration: '', participants: '0', rating: '0',
  price: '', description: '', modules: '', checkoutLink: '#checkout-cursos',
};

const AdminCursos = () => {
  const { isAuthenticated, isAdmin, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [formations, setFormations] = useState<CursoFormation[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingFormation, setEditingFormation] = useState<CursoFormation | null>(null);
  const [formationToDelete, setFormationToDelete] = useState<CursoFormation | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    if (!authLoading && (!isAuthenticated || !isAdmin)) navigate('/login');
  }, [isAuthenticated, isAdmin, authLoading, navigate]);

  useEffect(() => { fetchFormations(); }, []);

  const fetchFormations = async () => {
    const { data } = await supabase.from('cursos_formations').select('*').order('id');
    if (data) setFormations(data);
  };

  if (authLoading || !isAuthenticated || !isAdmin) return null;

  const openCreateDialog = () => { setEditingFormation(null); setFormData(initialFormData); setIsDialogOpen(true); };

  const openEditDialog = (f: CursoFormation) => {
    setEditingFormation(f);
    setFormData({ title: f.title, category: f.category as CursoCategory, duration: f.duration, participants: String(f.participants), rating: String(f.rating), price: f.price, description: f.description, modules: f.modules.join('\n'), checkoutLink: f.checkout_link });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (f: CursoFormation) => { setFormationToDelete(f); setIsDeleteDialogOpen(true); };

  const handleSubmit = async () => {
    if (!formData.title || !formData.duration || !formData.price || !formData.description) { toast.error('Preencha os campos obrigatórios.'); return; }
    const modulesArray = formData.modules.split('\n').map(i => i.trim()).filter(i => i.length > 0);
    if (modulesArray.length === 0) { toast.error('Adicione pelo menos um módulo.'); return; }

    const participants = Number.parseInt(formData.participants, 10);
    const rating = Number.parseFloat(formData.rating);
    const payload = {
      title: formData.title, category: formData.category, duration: formData.duration,
      participants: Number.isNaN(participants) ? 0 : participants,
      rating: Number.isNaN(rating) ? 0 : rating,
      price: formData.price, description: formData.description, modules: modulesArray,
      checkout_link: formData.checkoutLink || '#checkout-cursos',
    };

    if (editingFormation) {
      const { error } = await supabase.from('cursos_formations').update(payload).eq('id', editingFormation.id);
      if (error) { toast.error('Erro ao atualizar.'); return; }
      toast.success('Conteúdo atualizado com sucesso!');
    } else {
      const { error } = await supabase.from('cursos_formations').insert(payload);
      if (error) { toast.error('Erro ao criar.'); return; }
      toast.success('Conteúdo criado com sucesso!');
    }
    setIsDialogOpen(false);
    setEditingFormation(null);
    setFormData(initialFormData);
    fetchFormations();
  };

  const handleDelete = async () => {
    if (!formationToDelete) return;
    const { error } = await supabase.from('cursos_formations').delete().eq('id', formationToDelete.id);
    if (error) { toast.error('Erro ao remover.'); return; }
    toast.success('Conteúdo removido com sucesso!');
    setIsDeleteDialogOpen(false);
    setFormationToDelete(null);
    fetchFormations();
  };

  const getCategoryLabel = (c: string) => c === 'curso' ? 'Curso' : 'Programa';

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 [&_button]:text-black [&_a]:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild><Link to="/admin"><ArrowLeft className="w-4 h-4 mr-2" />Voltar</Link></Button>
            <div>
              <h1 className="text-2xl font-bold text-brand-primary">Gerenciar Cursos</h1>
              <p className="text-gray-600">Cadastre, edite e exclua conteúdos da página de cursos</p>
            </div>
          </div>
          <Button onClick={openCreateDialog}><Plus className="w-4 h-4 mr-2" />Novo Conteúdo</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BookOpen className="w-5 h-5" />Conteúdos de Cursos ({formations.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead><TableHead>Tipo</TableHead><TableHead>Duração</TableHead><TableHead>Alunas</TableHead><TableHead>Preço</TableHead><TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {formations.map((f) => (
                  <TableRow key={f.id}>
                    <TableCell className="font-medium">{f.title}</TableCell>
                    <TableCell><span className="px-2 py-1 bg-brand-yellow/20 text-brand-primary rounded text-sm">{getCategoryLabel(f.category)}</span></TableCell>
                    <TableCell><span className="flex items-center gap-1 text-gray-600"><Clock className="w-4 h-4" />{f.duration}</span></TableCell>
                    <TableCell><span className="flex items-center gap-1 text-gray-600"><Users className="w-4 h-4" />{f.participants}</span></TableCell>
                    <TableCell><span className="flex items-center gap-1 text-gray-600"><DollarSign className="w-4 h-4" />{f.price}</span></TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => openEditDialog(f)}><Pencil className="w-4 h-4" /></Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => openDeleteDialog(f)}><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {formations.length === 0 && (
                  <TableRow><TableCell colSpan={6} className="text-center py-8 text-gray-500">Nenhum conteúdo cadastrado. Clique em "Novo Conteúdo" para adicionar.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader><DialogTitle>{editingFormation ? 'Editar Conteúdo' : 'Novo Conteúdo de Curso'}</DialogTitle></DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input id="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Ex: Liderança Feminina no Setor Automotivo" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Tipo *</Label>
                  <Select value={formData.category} onValueChange={(v) => setFormData({ ...formData, category: v as CursoCategory })}>
                    <SelectTrigger id="category"><SelectValue placeholder="Selecione o tipo" /></SelectTrigger>
                    <SelectContent><SelectItem value="curso">Curso</SelectItem><SelectItem value="programa">Programa</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duração *</Label>
                  <Input id="duration" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} placeholder="Ex: 8 semanas" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Preço *</Label>
                  <Input id="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} placeholder="Ex: R$ 997" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="participants">Participantes</Label>
                  <Input id="participants" type="number" min={0} value={formData.participants} onChange={(e) => setFormData({ ...formData, participants: e.target.value })} placeholder="Ex: 150" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating">Avaliação</Label>
                  <Input id="rating" type="number" min={0} max={5} step="0.1" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} placeholder="Ex: 4.9" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição *</Label>
                <textarea id="description" className="w-full min-h-[100px] px-3 py-2 border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Descrição do curso/programa" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modules">Módulos * (um por linha)</Label>
                <textarea id="modules" className="w-full min-h-[120px] px-3 py-2 border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary" value={formData.modules} onChange={(e) => setFormData({ ...formData, modules: e.target.value })} placeholder="Fundamentos da Liderança&#10;Comunicação Assertiva&#10;Gestão de Equipes" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkoutLink">Link de checkout</Label>
                <Input id="checkoutLink" value={formData.checkoutLink} onChange={(e) => setFormData({ ...formData, checkoutLink: e.target.value })} placeholder="Ex: https://..." />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
              <Button onClick={handleSubmit}>{editingFormation ? 'Salvar Alterações' : 'Criar Conteúdo'}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader><DialogTitle>Confirmar Exclusão</DialogTitle></DialogHeader>
            <p className="py-4">Tem certeza que deseja remover o conteúdo "{formationToDelete?.title}"? Esta ação não pode ser desfeita.</p>
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

export default AdminCursos;
