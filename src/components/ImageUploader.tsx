import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Trash2, ArrowUp, ArrowDown, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ImageUploaderProps {
  eventId: number;
  images: string[];
  onChange: (images: string[]) => void;
}

const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

const sanitize = (name: string) =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9.-]+/g, '-')
    .replace(/-+/g, '-');

const ImageUploader: React.FC<ImageUploaderProps> = ({ eventId, images, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const extractPath = (url: string): string | null => {
    const marker = '/storage/v1/object/public/gallery/';
    const idx = url.indexOf(marker);
    if (idx === -1) return null;
    return url.substring(idx + marker.length);
  };

  const handleFiles = async (files: FileList | File[]) => {
    const fileArr = Array.from(files);
    if (fileArr.length === 0) return;

    setUploading(true);
    const uploaded: string[] = [];

    for (const file of fileArr) {
      if (!ACCEPTED.includes(file.type)) {
        toast.error(`${file.name}: formato não suportado (use JPG, PNG ou WEBP)`);
        continue;
      }
      if (file.size > MAX_SIZE) {
        toast.error(`${file.name}: tamanho máximo é 10MB`);
        continue;
      }

      const path = `${eventId}/${Date.now()}-${sanitize(file.name)}`;
      const { error } = await supabase.storage.from('gallery').upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      });
      if (error) {
        toast.error(`Erro ao enviar ${file.name}: ${error.message}`);
        continue;
      }
      const { data } = supabase.storage.from('gallery').getPublicUrl(path);
      uploaded.push(data.publicUrl);
    }

    if (uploaded.length > 0) {
      onChange([...images, ...uploaded]);
      toast.success(`${uploaded.length} imagem(ns) enviada(s)`);
    }
    setUploading(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleRemove = async (index: number) => {
    if (!confirm('Remover esta imagem?')) return;
    const url = images[index];
    const path = extractPath(url);
    if (path) {
      await supabase.storage.from('gallery').remove([path]);
    }
    const next = images.filter((_, i) => i !== index);
    onChange(next);
  };

  const move = (index: number, dir: -1 | 1) => {
    const target = index + dir;
    if (target < 0 || target >= images.length) return;
    const next = [...images];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div className="space-y-3">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragOver ? 'border-brand-primary bg-brand-primary/5' : 'border-gray-300'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
        <p className="text-sm text-gray-600 mb-3">
          Arraste imagens aqui ou clique para selecionar
        </p>
        <p className="text-xs text-gray-500 mb-3">JPG, PNG ou WEBP até 10MB cada</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
        >
          {uploading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Enviando...
            </>
          ) : (
            'Selecionar arquivos'
          )}
        </Button>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {images.map((url, idx) => (
            <div key={url + idx} className="relative group border rounded-md overflow-hidden">
              <img src={url} alt={`Imagem ${idx + 1}`} className="w-full h-32 object-cover" />
              {idx === 0 && (
                <span className="absolute top-1 left-1 bg-brand-yellow text-black text-xs font-semibold px-2 py-0.5 rounded">
                  Capa
                </span>
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="h-7 w-7 p-0"
                  disabled={idx === 0}
                  onClick={() => move(idx, -1)}
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="h-7 w-7 p-0"
                  disabled={idx === images.length - 1}
                  onClick={() => move(idx, 1)}
                >
                  <ArrowDown className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  className="h-7 w-7 p-0"
                  onClick={() => handleRemove(idx)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;